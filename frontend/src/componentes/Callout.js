import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imagem from '../../assets/iconeMarcadorMapa.jpg'

const CustomCallout = ({profissional}) => {

  //console.log('Item recebido: '+ JSON.stringify(profissional))

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{profissional[0].nomeFantasia}</Text>
        <Text style={styles.description}>{profissional[0].descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexWrap: 'wrap'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default CustomCallout;
