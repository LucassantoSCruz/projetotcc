import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Data = () => {
  return (
    <View>
      <Text style={styles.text}>
        Exemplo de Perfil
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
    }
})

export default Data;