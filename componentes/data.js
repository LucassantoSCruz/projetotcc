import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exemplo = (props) => {
    return (
        <View>
            <Text style={style.text}>
               Nome do Perfil: {props.name}
            </Text>
        </View>
    );
}

const Data = () => {
    return (
      <View>
        <Exemplo name="Sallon Fashion" />
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