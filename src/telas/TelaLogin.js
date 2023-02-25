import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const TelaLogin = ({navigation}) => {
    return (
        <View style={styles2.view}>
            <Text style={styles2.titulo}>
                Login
            </Text>
            <TextInput
                style={styles2.caixadetexto}
                placeholder="Usuário"/>
            <TextInput
                style={styles2.caixadetexto}
                placeholder="Senha"/>
            <TextInput
                style={styles2.caixadetexto}
                placeholder="Escolha seu tipo de conta"/>
            <TouchableOpacity style={styles2.botao} onPress={()=>navigation.navigate('Profissionais')}>
                <Text style={styles2.textobotao}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles2 = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  caixadetexto: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  botao: {
    width: '50%',
    height: 50,
    backgroundColor: '#9A6B99',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 10
},
  textobotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
},
  legenda: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 5
  }
});

export default TelaLogin 