import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

const TelaInicial = ({navigation}) => {
    return(
        <View style={styles.view}>
            <Text style={styles.titulo1}>
                Bem Vindo ao
            </Text>
            <Text style={styles.titulo2}>
                BELEZURA
            </Text>
            <Image source={require('./assets/logo.png')}
            style={styles.logo}/>
            <Text style={styles.legenda}>
                O aplicativo que acaba com a sua feiura
            </Text>
            <TouchableOpacity style={styles.botao1}>
                <Text style={styles.textobotao}>Cadastrar-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao2} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.textobotao}>Fazer Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  botao1: {
      width: '50%',
      height: 50,
      backgroundColor: '#9A6B99',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      borderRadius: 20
  },
  botao2: {
      width: '50%',
      height: 50,
      backgroundColor: '#D0A3CE',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      borderRadius: 20
  },
  textobotao: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
  },
  view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  logo: {
      width: 230,
      height: 200
  },
  titulo1: {
      color: '#9A6B99',
      fontWeight: 'bold',
      fontSize: 30
  },
  titulo2: {
      color: '#9A6B99',
      fontWeight: 'bold',
      fontSize: 50
  },
  legenda: {
      color: '#9A6B99',
      textDecorationLine: 'line-through'
  },
/*  decoracao: {
    backgroundColor: '#9A6B99',
    width: '50%',
    height: 40,
    position: 'absolute'
  }
*/
})

export default TelaInicial