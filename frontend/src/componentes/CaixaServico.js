import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';

// criação de um componente
const CaixaServico = (item) => {

  // const cb = props.quandoClicar;

  const navigation = useNavigation()

  const Pressionar = () => {
    console.log('Serviço clicado: ' + item.item.FK_Profissionais_Servicos)
    const fkServico = item.item.FK_Profissionais_Servicos
    console.log(fkServico)
    navigation.navigate('PerfilProfissional', { fkServico })
  }

  return (
    <TouchableOpacity onPress={Pressionar}>
      <View style={styles.fundo}>
        <View style={styles.fundoimagem}>
          <Image
            source={require('../../assets/imagem1.png')}
            style={styles.imagem} />
        </View>
        <View style={styles.fundonome}>
          <Text style={styles.texto}>
            {item.item.titulo}
          </Text>
          <Text style={styles.texto}>
            R$ {item.item.preco.replace('.', ',')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  fundo: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: '2%',
    flex: 1,
    marginBottom: 15,
    width: 185,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fundoimagem: {
    alignItems: 'center'
  },
  textocampo: {
    fontSize: 32,
  },
  fundonome: {
    borderRadius: 14,
    width: '100%',
    backgroundColor: '#9a6b99',
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    padding: 10
  },
  textopreco: {
    fontSize: 18,
    color: 'white',
    padding: 10
  }
})

export default CaixaServico