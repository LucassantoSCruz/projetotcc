import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadraoPerfil from '../componentes/ImagemPadrao';
import axios from 'axios';

const PlaceholderImage = require('../../assets/Perfil.png');

const TelaCadastroCliente = ({ navigation }) => {

  // const [CPF, setCPF] = useState(null)
  // const [Nome, setNome] = useState(null)
  // const [Email, setEmail] = useState(null)
  // const [Senha, setSenha] = useState(null)
  // const [Telefone, setTelefone] = useState(null)
  const [visivelPronome, setVisivelPronome] = useState(false);
  const [Pronomes, setPronomes] = useState("")

  const enviarFormulario = async () => {
    axios.post('http://10.0.1.60:3000/cadastrarCliente', {
      CPF: dados.CPF,
      nome: dados.Nome,
      email: dados.Email,
      senha: dados.Senha,
      telefone: dados.Telefone,
      pronomes: Pronomes
    })
      .then(function (response) {
        console.log(response.data);
        navigation.navigate('Login')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function togglePronomes() {
    setVisivelPronome((visivelPronome) => !visivelPronome);
  }

  const [eleDele, setEleDele] = useState(false);
  const [elaDela, setElaDela] = useState(false);
  const [eluDelu, setEluDelu] = useState(false);
  const [naoDizer, setNaoDizer] = useState(false);

  const [dados, setDados] = useState([])

  useEffect(() => {
    if (eleDele == true) {
      setPronomes('Ele/Dele')
    }
    return () => {
      setEleDele(false)
    }
  })

  useEffect(() => {
    if (elaDela == true) {
      setPronomes('Ela/Dela')
    }
    return () => {
      setElaDela(false)
    }
  })

  useEffect(() => {
    if (eluDelu == true) {
      setPronomes('Elu/Delu')
    }
    return () => {
      setEluDelu(false)
    }
  })

  useEffect(() => {
    if (naoDizer == true) {
      setPronomes('Prefere não dizer')
    }
    return () => {
      setNaoDizer(false)
    }
  })

  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1]
    });

    if (!result.canceled) {
      setImagemSelecionada(result.assets[0].uri);
    } else {
      Alert.alert("Atenção", "Você não selecionou nenhuma imagem.");
    }
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      CPF: '',
      Nome: '',
      Email: '',
      Senha: '',
      Telefone: ''
    }
  })

  const onSubmit = data => {

    console.log(data);
    setDados(data);

    enviarFormulario()

  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Cadastre-se
        </Text>

        {errors.Nome &&
          <View style={styles.caixaerro}>
            <Image style={styles.imagemerro} source={require('../../assets/iconsbelezura/erro.png')} />
            <Text style={styles.textoerro}>
              Campo de Nome incorreto
            </Text>
          </View>
        }

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput style={styles.campo}
              placeholder='Nome:'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />

          )}
          name='Nome'
        />

        {errors.CPF &&
          <View style={styles.caixaerro}>
            <Image style={styles.imagemerro} source={require('../../assets/iconsbelezura/erro.png')} />
            <Text style={styles.textoerro}>
              Campo de CPF incorreto
            </Text>
          </View>
        }

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 11
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput style={styles.campo}
              placeholder='CPF:'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />

          )}
          name='CPF'
        />

        {errors.Email &&
          <View style={styles.caixaerro}>
            <Image style={styles.imagemerro} source={require('../../assets/iconsbelezura/erro.png')} />
            <Text style={styles.textoerro}>
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

            <TextInput style={styles.campo}
              placeholder='E-mail:'
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType='email-address'
              value={value}
            />

          )}
          name='Email'
        />

        {errors.Senha &&
          <View style={styles.caixaerro}>
            <Image style={styles.imagemerro} source={require('../../assets/iconsbelezura/erro.png')} />
            <Text style={styles.textoerro}>
              Campo de Senha incorreto
            </Text>
          </View>
        }

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput style={styles.campo}
              placeholder='Crie uma senha:'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />

          )}
          name='Senha'
        />

        {errors.Telefone &&
          <View style={styles.caixaerro}>
            <Image style={styles.imagemerro} source={require('../../assets/iconsbelezura/erro.png')} />
            <Text style={styles.textoerro}>
              Campo de Telefone incorreto
            </Text>
          </View>
        }

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput style={styles.campo}
              placeholder='Telefone:'
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType='numeric'
              returnKeyType='done'
              value={value}
            />

          )}
          name='Telefone'
        />

        <TouchableOpacity style={styles.botaomodal} onPress={togglePronomes}>
          <View>
            <Text style={styles.titulomodal}>
              Pronome: {Pronomes}
            </Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          visible={visivelPronome}
          onBackButtonPress={togglePronomes}
          onBackdropPress={togglePronomes}
        >
          <View style={styles.fundomodal}>
            <TouchableOpacity style={styles.selecao} onPress={() => setElaDela(true)}>
              <Text style={styles.textomodal}>
                Ela/Dela
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => setEleDele(true)}>
              <Text style={styles.textomodal}>
                Ele/Dele
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => setEluDelu(true)}>
              <Text style={styles.textomodal}>
                Elu/Delu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => setNaoDizer(true)}>
              <Text style={styles.textomodal}>
                Prefere não dizer
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <Text style={styles.titfotodeperfil}>
          Foto de Perfil
        </Text>

        <ImagemPadraoPerfil
          placeholderImageSource={PlaceholderImage}
          imagemSelecionada={imagemSelecionada}
        />

        <TouchableOpacity style={styles.botaofoto} onPress={pickImageAsync}>
          <Text style={styles.txtbtn}>
            Importar Foto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.txtbtn} >
            Cadastrar
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4e8f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 20,
    margin: 30,
    fontWeight: 'bold',
    color: 'black '
  },
  tituloestabelecimento: {
    fontSize: 20,
    marginBottom: 30,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black '
  },
  campo: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  caixa: {
    width: '80%',
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  txt: {
    marginBottom: 10
  },
  check: {
    flexDirection: 'column'
  },
  descricao: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  img: {
    width: '80%',
    backgroundColor: '#e8d0e8',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    fontSize: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  titfotodeperfil: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black ',
    marginTop: 15
  },
  fotoperfil: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 15
  },
  botaofoto: {
    width: '80%',
    height: 70,
    backgroundColor: '#D0A3CE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15
  },
  botao: {
    width: '80%',
    height: 70,
    backgroundColor: '#9a6b99',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  txtbtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  botaomodal: {
    justifyContent: 'center',
    width: '80%',
    height: 50,
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
    height: 300,
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
  fotodeperfil: {
    height: 150,
    width: 150
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
});

export default TelaCadastroCliente;