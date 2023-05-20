import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button, Alert } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadraoPerfil from '../componentes/ImagemPadrao';
import axios from 'axios';

const PlaceholderImage = require('../../assets/Perfil.png');

import { useForm, Controller } from 'react-hook-form';

const TelaCadastroProfissional = ({ navigation }) => {

  const [CPF_CNPJ, setCPF_CNPJ] = useState(null)
  const [Nome, setNome] = useState(null)
  const [Email, setEmail] = useState(null)
  const [Senha, setSenha] = useState(null)
  const [Telefone, setTelefone] = useState(null)
  const [AtendimentoDomiciliar, setAtendimentoDomiciliar] = useState(null)
  const [PessoaJuridica, setPessoaJuridica] = useState(null)
  const [Descricao, setDescricao] = useState(null)
  const [NomeFantasia, setNomeFantasia] = useState(null)
  const [visivelPronome, setVisivelPronome] = useState(false);
  //add o endereço
  const [cepEnd, setCepEnd] = useState(null);
  const [infoCep, setInfo] = useState('');
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);
  const [Numero, setNumero] = useState(null);
  const [Complemento, setComplemento] = useState(null);

  const [visivelTipoConta, setVisivelTipoConta] = useState(false);
  const [visivelAtDomicilio, setAtDomicilio] = useState(false);

  //Teste para fazer mais de uma requisição com o Axios
  const enviarFormulario = async () => {
    try {
      const response = await axios.all([
        axios.post('http://192.168.10.242:3000/cadastrarProfissonal', {
          CPF_CNPJ: dados.CPF_CNPJ,
          Nome: dados.Nome,
          NomeFantasia: dados.NomeFantasia,
          Pronomes: Pronomes,
          Email: dados.Email,
          Senha: dados.Senha,
          Telefone: dados.Telefone,
          AtendimentoDomiciliar: AtendimentoDomiciliar,
          PessoaJuridica: PessoaJuridica,
          Descricao: dados.Descricao
        }),
        axios.post('http://192.168.10.242:3000/cadastrarEndereco', {
          Latitude,
          Longitude,
          CEP: cepEnd,
          UF: infoCep.uf,
          LocalidadeCidade: infoCep.localidade,
          Logradouro: infoCep.logradouro,
          Bairro: infoCep.bairro,
          Numero,
          Complemento
        })
      ]);
    } catch (erro) {
      console.log(erro);
    }
  };

  function toggle1() {
    setVisivelPronome((visivelPronome) => !visivelPronome);
  }
  function toggle2() {
    setVisivelTipoConta((visivelTipoConta) => !visivelTipoConta);
  }
  function toggleAtDomicilio() {
    setAtDomicilio((visivelAtDomicilio) => !visivelAtDomicilio)
  }

  const [PJ, setPJ] = useState(false);
  const [PF, setPF] = useState(false);

  useEffect(() => {
    if (PJ == true) {
      setTipoconta('Pessoa Jurídica')
      setPessoaJuridica(true)
    }
    return () => {
      setPJ(false)
    }
  }, [PJ])

  useEffect(() => {
    if (PF == true) {
      setTipoconta('Pessoa Física')
      setPessoaJuridica(false)
    }
    return () => {
      setPF(false)
    }
  }, [PF])

  const [eleDele, setEleDele] = useState(false);
  const [elaDela, setElaDela] = useState(false);
  const [eluDelu, setEluDelu] = useState(false)
  const [naoDizer, setNaoDizer] = useState(false)

  useEffect(() => {
    if (eleDele == true) {
      console.log('Ele/Dele'),
        setPronomes('Ele/Dele')
    }
    return () => {
      setEleDele(false)
    }
  })

  useEffect(() => {
    if (elaDela == true) {
      console.log('Ela/Dela')
      setPronomes('Ela/Dela')
    }
    return () => {
      setElaDela(false)
    }
  })

  useEffect(() => {
    if (eluDelu == true) {
      console.log('Elu/Delu')
      setPronomes('Elu/Delu')
    }
    return () => {
      setEluDelu(false)
    }
  })

  useEffect(() => {
    if (naoDizer == true) {
      console.log('Prefere não dizer')
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

  const [tipoconta, setTipoconta] = useState("")
  const [Pronomes, setPronomes] = useState("")
  const [txtAtDomiciliar, setTxtAtDomiciliar] = useState("Realiza atendimento á domicílio?")

  //cep
  const getCep = async () => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cepEnd}/json`);
    setInfo(data);
  }

  const [dados, setDados] = useState([])
  // const rotaCadastro = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/ListagemDados', {
  //       // setCpf: "000",
  //       // nome: "000",
  //       // sobrenome: "000",
  //       // email: "000",
  //       // senha: "000",
  //       // cepEnd: "000",

  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onSubmit = data => {

    console.log(data)
    setDados(data)
    enviarFormulario()

  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Nome: '',
      NomeFantasia: '',
      CPF_CNPJ: '',
      Email: '',
      Senha: '',
      Telefone: '',
      Descricao: '',
      CEP: '',
      Latitude: '',
      Longitude: '',
      Numero: '',
      Complemento: ''
    }
  })

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Cadastre-se
        </Text>

        {errors.Nome && <Text style={styles.textoerro}>Digite seu nome!</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 3
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput
              style={styles.campo}
              placeholder='Nome (obrigatório):'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />

          )}
          name='Nome'
        />

        {errors.NomeFantasia && <Text style={styles.textoerro}>Digite seu nome!</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 3
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput
              style={styles.campo}
              placeholder='Nome fantasia:'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />

          )}
          name='NomeFantasia'
        />

        {errors.CPF_CNPJ && <Text style={styles.textoerro}>Digite seu cpf!</Text>}

        <Controller
          control={control}
          rules={{
            minLength: 11,
            maxLength: 14,
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput
              style={styles.campo}
              placeholder='CPF/CNPJ (obrigatório):'
              keyboardType='numeric'
              returnKeyType='done'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />

          )}
          name='CPF_CNPJ'
        />

        <TouchableOpacity style={styles.botaomodal} onPress={toggle2}>
          <View >
            <Text style={styles.titulomodal}>Tipo de Conta (obrigatório): {tipoconta}</Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          visible={visivelTipoConta}
          onBackButtonPress={toggle2}
          onBackdropPress={toggle2}
        >
          <View style={styles.fundomodalconta}>
            <TouchableOpacity style={styles.selecao} onPress={() => setPJ(true)}>
              <Text style={styles.textomodal}>
                Pessoa Jurídica
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => setPF(true)}>
              <Text style={styles.textomodal}>
                Pessoa Física
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        {errors.Email && <Text style={styles.textoerro}>Digite seu e-mail!</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Digite um E-mail válido'
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.campo}
              placeholder='E-mail (obrigatório):'
              keyboardType='email-address'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name='Email'
        />

        {errors.Senha && <Text style={styles.textoerro}>Digite sua senha!</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.campo}
              placeholder='Crie uma senha (obrigatório):'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name='Senha'
        />

        <TouchableOpacity style={styles.botaomodal} onPress={toggleAtDomicilio}>
          <View >
            <Text style={styles.titulomodal}>{txtAtDomiciliar}</Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          visible={visivelAtDomicilio}
          onBackButtonPress={toggleAtDomicilio}
          onBackdropPress={toggleAtDomicilio}
        >
          <View style={styles.fundomodaldomicilio}>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(false);
              setTxtAtDomiciliar("Não realizo atendimento á domicílio.")
            }
            }>
              <Text style={styles.textomodal}>
                Não realizo atendimento á domicílio.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(true);
              setTxtAtDomiciliar("Sim, atendimento á domicilio e em meu estabelecimento.")
            }
            }>
              <Text style={styles.textomodal}>
                Sim, atendimento á domicilio e no estabelecimento.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(true);
              setTxtAtDomiciliar("Realizo apenas atendimento á domicílio.")
            }
            }>
              <Text style={styles.textomodal}>
                Realizo apenas atendimento á domicílio.
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        {errors.Telefone && <Text style={styles.textoerro}>Digite seu telefone!</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.campo}
              placeholder='Telefone:'
              keyboardType='numeric'
              returnKeyType='done'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name='Telefone'
        />

        <TouchableOpacity style={styles.botaomodal} onPress={toggle1}>
          <View>
            <Text style={styles.titulomodal}>
              Pronome: {Pronomes}
            </Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          visible={visivelPronome}
          onBackButtonPress={toggle1}
          onBackdropPress={toggle1}
        >
          <View style={styles.fundomodalpronome}>
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

        {errors.Descricao && <Text style={styles.textoerro}>Adicione uma breve descrição!</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 3
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.descricao}
              placeholder='Descrição:'
              editable
              multiline
              numberOfLines={6}
              maxLength={200}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name='Descricao'
        />

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

        <Text style={styles.tituloestabelecimento}>
          Local do Estabelecimento
        </Text>


        <View style={styles.alinhamentocep}>
          <TextInput
            style={styles.campocep}
            placeholder='CEP:'
            value={cepEnd}
            onChangeText={text => setCepEnd(text)}
          />

          <TouchableOpacity style={styles.botaocep} onPress={getCep}>
            <Text style={styles.textocep}>
              Buscar
            </Text>
          </TouchableOpacity>
        </View>

        {/* TextInput para colocar a latitude e longitude manualmente enquanto
          não temos a api para salvá-los automaticamente - qualquer coisa podemos
          tirá-los do banco */}
        <TextInput
          style={styles.campo}
          placeholder='Latitude:'
          value={Latitude}
          onChangeText={value => setLatitude(value)}
        />
        <TextInput
          style={styles.campo}
          placeholder='Longitude:'
          value={Longitude}
          onChangeText={value => setLongitude(value)}
        />

        <TextInput
          style={styles.campo}
          placeholder='Rua:'
          value={infoCep.logradouro}
        />
        <TextInput
          style={styles.campo}
          placeholder='Bairro:'
          value={infoCep.bairro}
        />
        <TextInput
          style={styles.campo}
          placeholder='Cidade:'
          value={infoCep.localidade}
        />
        <TextInput
          style={styles.campo}
          placeholder='Estado:'
          value={infoCep.uf}
        />
        <TextInput
          style={styles.campo}
          placeholder='Numero:'
          value={Numero}
          onChangeText={text => setNumero(text)}
        />
        <TextInput
          style={styles.campo}
          placeholder='Complemento:'
          value={Complemento}
          onChangeText={text => setComplemento(text)}
        />

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
  fundomodalconta: {
    backgroundColor: "#fff",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  fundomodaldomicilio: {
    backgroundColor: "#fff",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  fundomodalpronome: {
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
  textoerro: {
    fontSize: 14,
    color: 'red'
  },
  alinhamentocep: {
    flexDirection: 'row'
  },
  campocep: {
    width: '51%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: '2%'
  },
  botaocep: {
    width: '25%',
    height: 50,
    backgroundColor: '#D0A3CE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: '2%'
  },
  textocep: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default TelaCadastroProfissional;