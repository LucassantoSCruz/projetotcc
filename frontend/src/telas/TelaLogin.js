import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import { useForm, Controller } from "react-hook-form";

// Caixa 
import { BottomSheet } from 'react-native-btr';

// Importação do Axios
import axios from 'axios'

const TelaLogin = ({ navigation }) => {

  // Função que declara se a caixa está visivel ou não
  const [visivel, setVisivel] = useState(false);

  function toggle() {
    setVisivel((visivel) => !visivel);
  }

  const [profissional, setProfissional] = useState(false);
  const [pessoal, setPessoal] = useState(false);

  useEffect(() => {
    if (profissional == true) {
      console.log('Profissional')
      setTipoconta('Profissional')
      setRotaLogin('ListarProfissionaisEmail')
    }
    return () => {
      setProfissional(false)
    }
  }, [profissional])

  useEffect(() => {
    if (pessoal == true) {
      console.log('Cliente')
      setTipoconta('Cliente')
      setRotaLogin('ListarClientesEmail')
    }
    return () => {
      setPessoal(false)
    }
  }, [pessoal])

  const [tipoconta, setTipoconta] = useState('')

  const [rotaLogin, setRotaLogin] = useState('')

  const [email, setEmail] = useState(null)

  const [senha, setSenha] = useState(null)

  const [botao, setBotao] = useState(false)

  const [dados, setDados] = useState([])

  const [dadosRecebidos, setDadosRecebidos] = useState(null)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Email: '',
      Senha: ''
    }
  });

  const onSubmit = data => {

    // console.log("Dados no onSubmit: " + (data.Email));
    setDados(data)
    Login()

  }

  const Login = () => {

    // console.log("Dados no Login: " + (dados.Email))

    axios.get(`http://192.168.1.2:3000/${rotaLogin}/${dados.Email}/${dados.Senha}`, {
      email: dados.Email,
      senha: dados.Senha
    })

      .then(function (response) {
        console.log(response.data)
        if (response.data.data != null) {
          if (response.status === 200) {
            setDadosRecebidos(response.data.data);
            Alert.alert(
              "Login Realizado",
              "Entre no Aplicativo",
              [
                {
                  text: "Cancelar",
                },
                {
                  text: "Entrar",
                  onPress: () => navigation.navigate("Profissionais"),
                },
              ]
            );
          } else {
            console.log(response.data.data.Email + " RETORNO ELSE");
          }
        }
        else {
          Alert.alert("Usuário não encontrado.")
        }
      })
      .catch(function (error) {
        console.log("Erro: " + error);
      });
  };

  return (
    <View style={style.tela}>

      <Text style={style.titulo}>
        Login
      </Text>

      {errors.Email &&
        <Text style={style.texto}>
          Campo de Email incorreto.
        </Text>
      }

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Digite um Email válido'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (

          <TextInput
            style={style.caixadetexto}
            placeholder="Digite seu Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />

        )}
        name="Email"
      />

      {errors.Senha &&
        <Text style={style.texto}>
          Campo de Senha incorreto.
        </Text>
      }

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 6,
        }}
        render={({ field: { onChange, onBlur, value } }) => (

          <TextInput
            style={style.caixadetexto}
            placeholder="Digite sua Senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />

        )}
        name="Senha"
      />

      <TouchableOpacity style={style.botaomodal} onPress={toggle}>
        <View>
          <Text style={style.titulomodal}>
            Tipo de conta: {tipoconta}
          </Text>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visivel}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={style.fundomodal}>
          <TouchableOpacity style={style.selecao} onPress={() => setProfissional(true)}>
            <Text style={style.textomodal}>
              Profissional
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.selecao} onPress={() => setPessoal(true)}>
            <Text style={style.textomodal}>
              Cliente
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <TouchableOpacity style={style.botao} onPress={handleSubmit(onSubmit)} >
        <Text style={style.textobotao}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  texto: {
    fontSize: 14,
    color: 'red'
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