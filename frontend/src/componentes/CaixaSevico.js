import React from "react";  
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';

  // criação de um componente
  CaixaServico = ( props ) => {
    const cb = props.quandoClicar;
    return (
      <TouchableOpacity onPress={()=>cb(true)}>
        <View style={styles.fundo}>
          <View style={styles.fundoimagem}>
            <Image
              // source={require('../assets/imagem1.png')}
              style={styles.imagem} />
          </View>
          <View style={styles.fundonome}>
            <Text style={styles.texto}>
              {props.campo.Titulo}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

const styles = StyleSheet.create({
    caixa: {
        backgroundColor: '#f9c2ff',
        margin: 15,
        padding: 15,
      },
      textocampo: {
        fontSize: 32,
      },
      fundonome: {
        height: 75,
        borderRadius: 14,
        backgroundColor: '#9a6b99',
      },
      fundo: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        flex: 1,
        marginLeft: 7.5,
        marginRight: 7.5,
        marginBottom: 15,
      },
      imagem: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
      },
      fundoimagem: {
        alignItems: 'center'
      },
      texto: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
      },
})

export default CaixaServico