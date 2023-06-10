import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

// Importação do hook-form
import { useForm, Controller } from "react-hook-form";

// Importação da Caixa 
import { BottomSheet } from 'react-native-btr';

// Importação do Axios
import axios from 'axios'

// Importação do AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  //Estado com a rota para buscar cliente ou profissional 
  //dependendo do tipo de conta selecionado
  const [rotaLogin, setRotaLogin] = useState('')
  //Estado com a chave primária do cliente ou profissional
  const [idUsuario, setIdUsuario] = useState(null)

  const [email, setEmail] = useState(null)

  const [senha, setSenha] = useState(null)

  const [CPF_CNPJ, setCPF_CNPJ] = useState(null)

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

  const Navegacao = () => {
    navigation.navigate("Profissionais"),
    
      salvarDados()
  }

  const Login = () => {

    // console.log("Dados no Login: " + (dados.Email))

    axios.get(`http://192.168.10.242:3000/${rotaLogin}/${dados.Email}/${dados.Senha}`, {
      Email: dados.Email,
      Senha: dados.Senha
    })

      .then(function (response) {
        if(tipoconta == 'Profissional'){
          console.log(response.data.data.CPF_CNPJ)
          setIdUsuario(response.data.data.CPF_CNPJ)
          console.log("CPF_CNPJ do usuário Profissional: " + idUsuario)
        } else{
            console.log(response.data.data.CPF)
            setIdUsuario(response.data.data.CPF)
            console.log("CPF_CNPJ do usuário Profissional: " + idUsuario)
        }

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
                  onPress: Navegacao
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

  const salvarDados = async () => {
    try {
      await AsyncStorage.setItem('idUsuario', JSON.stringify(idUsuario));
      console.log('Valor salvo com sucesso!');
    } catch (error) {
      console.error(error);
    }
    try {
      await AsyncStorage.setItem('tipoconta', JSON.stringify(tipoconta));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={style.tela}>

      <Text style={style.titulo}>
        Login
      </Text>

      {errors.Email &&
        <View style={style.caixaerro}>
          <Image style={style.imagemerro} source={require('../../assets/iconsbelezura/erro.png')} />
          <Text style={style.textoerro}>
            Campo de Email incorreto
          </Text>
        </View>
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
        <View style={style.caixaerro}>
          <Image style={style.imagemerro} source={require('../../assets/iconsbelezura/erro.png')} />
          <Text style={style.textoerro}>
            Campo de Senha incorreto
          </Text>
        </View>
      }

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 2,
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
  caixaerro: {
    justifyContent: 'center',
    alignItems: "center",
    padding: 5,
    backgroundColor: 'grey',
    flexDirection: 'row',
    borderRadius: 50,
    margin: 2
  },
  textoerro: {
    fontSize: 14,
    color: 'white',
    marginHorizontal: 5
  },
  imagemerro: {
    width: 20,
    height: 20,
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
  }
});

export default TelaLogin 