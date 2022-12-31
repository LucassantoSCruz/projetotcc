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
      <Image source={require("../assets/iconsbelezura/calendario.png")} style={styles.imagem}></Image>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image source={require("../assets/iconsbelezura/marcador.png")} style={styles.imagem}></Image>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  tela: {
    flex: 0.075,
    backgroundColor: "#90918b",
    flexDirection: "row",
    alignItems: "center"
  },
  texto: {
    margin: 10,
    fontWeight: "bold"
  },
  barItem: {
    backgroundColor: "blue",
    margin: 10
  },
  imagem: {
    margin: 10,
    height: 30,
    width: 30
  }
})

export default BarCategoria