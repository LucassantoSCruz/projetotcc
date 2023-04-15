import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

// Caixa 
import { BottomSheet } from 'react-native-btr';

// Importação do Axios
import axios from 'axios'

const TelaLogin = ({ navigation }) => {

  // Função que declara se a caixa está visivel ou não
  const [visivel, setVisivel] = useState(false);

  // 
  function toggle() {
    setVisivel((visivel) => !visivel);
  }

  const [profissional, setProfissional] = useState(false);
  const [pessoal, setPessoal] = useState(false);

  useEffect(() => {
    if (profissional == true) {
      console.log('Profissional')
      setTipoconta('Profissional')
    }
    return () => {
      setProfissional(false)
    }
  }, [profissional])

  useEffect(() => {
    if (pessoal == true) {
      console.log('Pessoal')
      setTipoconta('Pessoal')
    }
    return () => {
      setPessoal(false)
    }
  }, [pessoal])

  const [tipoconta, setTipoconta] = useState('')

  //Estados para "capturar" email e senha
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [sucesso, setSucesso] = useState(false);

  // constante do botão pesquisa
  const [busca, setBusca] = useState(false);

  // constande de dados
  const [dados, setDados] = useState([])

  // chamada da rota de listagem de um nome especifico
  const Login = () => {

    axios.get(`http://192.168.56.1:3000/ListarProfissionaisNome/${email}`, {
      dados: {
        Email: email,
        Senha: senha
      }
    })
      .then(function (response) {
        setDados(response.data)
        console.log('Usuário Encontrado: ', dados.data.Email, dados.data.Senha);

      })
      .catch(function (error) {
        //console.error("Erro: ", error)
        Alert.alert("Usuario não encontrado.")
        // Alert.alert("Usuario não encontrado ou senha errada")
        // console.error("Erro: ", error)
      })
  }

  useEffect(() => {
    if (busca == true) {
      Login()
      if (email != null) {
        if (senha != null) {
          Login()
        }
        else {
          // Alert.alert('Digite sua senha.')
        }
      }
      else {
        Alert.alert("Digite seu Nome")
      }
    }
    return () => {
      setBusca(false)
    }
  }, [busca])

  useEffect(() => {
    if (dados.data != null) {
      if (dados.data.Email == email, dados.data.Senha == senha) {
        Alert.alert(
          "Login Realizado",
          "Entre no Aplicativo",
          [{
            text: "Entrar",
            onPress: () => navigation.navigate('Profissionais'),
          },]
        )
      }
      else {
        Alert.alert("Senha Incorreta.")
      }
    }
  }, [dados])

  return (
    <View style={styles.view}>

      <Text style={styles.titulo}>
        Login
      </Text>

      <TextInput
        style={styles.caixadetexto}
        onChangeText={value => setEmail(value)}
        value={email}
        placeholder="Email"
      />

      <TextInput
        style={styles.caixadetexto}
        onChangeText={value => setSenha(value)}
        value={senha}
        placeholder="Senha"
      />

      <TouchableOpacity style={styles.botaomodal} onPress={toggle}>
        <View>
          <Text style={styles.titulomodal}>
            Tipo de conta: {tipoconta}
          </Text>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visivel}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.fundomodal}>
          <TouchableOpacity style={styles.selecao} onPress={() => setProfissional(true)}>
            <Text style={styles.textomodal}>
              Profissional - Pessoa Jurídica
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selecao} onPress={() => setPessoal(true)}>
            <Text style={styles.textomodal}>
              Pessoal - Pessoa Física
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <TouchableOpacity style={styles.botao} onPress={() => setBusca(true)}>
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
    width: '80%',
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
  titulomodal: {
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