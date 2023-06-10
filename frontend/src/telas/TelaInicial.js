import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { BottomSheet } from 'react-native-btr';

const TelaInicial = ({navigation}) => {

    const [visivelTipoConta, setVisivelTipoConta] = useState(false);

    function toggleTipoConta() {
        setVisivelTipoConta((visivelTipoConta) => !visivelTipoConta);
    }

    return(
        <View style={styles.view}>
            <Text style={styles.titulo1}>
                Boas Vindas ao
            </Text>
            <Text style={styles.titulo2}>
                BELEZURA
            </Text>
            <Image source={require('../../assets/logo.png')}
            style={styles.logo}/>
            <Text style={styles.legenda}>
                O aplicativo que acaba com a sua feiura
            </Text>
            <TouchableOpacity style={styles.botao1} onPress={toggleTipoConta}>
                <Text style={styles.textobotao}>Cadastrar-se</Text>
            </TouchableOpacity>
            <BottomSheet
                visible={visivelTipoConta}
                onBackButtonPress={toggleTipoConta}
                onBackdropPress={toggleTipoConta}
            >
                <View style={styles.fundomodal}>
                    <TouchableOpacity style={styles.selecao} onPress={() => navigation.navigate('CadastroProfissional')}>
                    <Text style={styles.textomodal}>
                        Conta Profissional
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selecao} onPress={() => navigation.navigate('CadastroCliente')}>
                    <Text style={styles.textomodal}>
                        Conta Cliente
                    </Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
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
  fundomodal: {
    backgroundColor: "#fff",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  selecao: {
    width: '90%',
  },
  textomodal: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    backgroundColor: '#d0a3ce',
    color: 'white',
    padding: 10,
    borderRadius: 50
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