import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { BottomSheet } from "react-native-btr";
import MapView from "react-native-maps";

const BarCategoria = () =>{

const [mapa, setMapa] = useState(false);

function alternar() {
  setMapa((mapa) => !mapa);
}

  return (
    <View style={styles.tela}>

      <TouchableOpacity>
        <Text style={styles.texto}>Cabeleireiro</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto}>Manicure</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto}>Maquiador</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto}>Mais Opções</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../../assets/iconsbelezura/calendario.png")} style={styles.imagem}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={alternar}>
        <Image source={require("../../assets/iconsbelezura/marcador.png")} style={styles.imagem}/>
        <BottomSheet
          visible={mapa}
          onBackButtonPress={alternar}
          onBackdropPress={alternar}
          >
          <View style={styles.fundomodal}>
            <Text style={styles.textomapa}>Localização</Text>
              <MapView style={styles.mapa}
                  initialRegion={{
                    latitude: -23.5113,
                    longitude: -46.8768,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
              />
          </View>
        </BottomSheet>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  tela: {
    flex: 0.075,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  texto: {
    color: '#000000'
  },
  imagem: {
    height: 25,
    width: 25,
    color: '#000000'
  },
  fundomodal: {
    backgroundColor: "#fff",
    height: '50%',
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mapa: {
    flex: 2,
    width: '100%',
    height: '75%',
    justifyContent: 'flex-start'
  },
  textomapa: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 15
  }
})

export default BarCategoria