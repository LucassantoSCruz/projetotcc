import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const BarCategoria = () =>{
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

      <TouchableOpacity>
        <Image source={require("../../assets/iconsbelezura/marcador.png")} style={styles.imagem}></Image>
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
  }
})

export default BarCategoria