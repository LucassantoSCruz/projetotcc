import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { BottomSheet } from 'react-native-btr';

const TelaLogin = ({navigation}) => {

const [visivel, setVisivel] = useState(false);

function toggle() {
  setVisivel((visivel) => !visivel);
}

    return (
        <View style={styles.view}>

            <Text style={styles.titulo}>
                Login
            </Text>

            <TextInput
                style={styles.caixadetexto}
                placeholder="Usuário"/>

            <TextInput
                style={styles.caixadetexto}
                placeholder="Senha"/>

            <TouchableOpacity style={styles.botaomodal} onPress={toggle}>
              <View>
                <Text style={styles.titulomodal}>
                  Escolha o seu tipo de conta:
                </Text>
              </View>
              </TouchableOpacity>
              <BottomSheet
                visible={visivel}
                onBackButtonPress={toggle}
                onBackdropPress={toggle}
              >
                <View style={styles.fundomodal}>
                  <TouchableOpacity style={styles.selecao}>
                    <Text style={styles.textomodal}>
                      Profissional - Pessoa Jurídica
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.selecao}>
                    <Text style={styles.textomodal}>
                      Pessoal - Pessoa Física
                    </Text>
                  </TouchableOpacity>
                </View>
              </BottomSheet>

            <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Profissionais')}>
                <Text style={styles.textobotao}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    width:'80%',
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
  botaomodal: {
    justifyContent: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  titulomodal:{
    color: '#666666'
  },
  fundomodal: {
    backgroundColor: "#fff",
    height: 250,
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
  }
});

export default TelaLogin 