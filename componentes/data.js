import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Data = () => {
  return (
    <View>
      <Text style={style.text}>
        Exemplo de Perfil
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
    }
})

export default Data;