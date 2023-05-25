import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button, Alert } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadraoPerfil from '../componentes/ImagemPadrao';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
const PlaceholderImage = require('../../assets/Perfil.png');

const TelaCadastroProfissional = ({ navigation }) => {

  const [CPF_CNPJ, setCPF_CNPJ] = useState(null)
  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [atendimentoDomiciliar, setAtendimentoDomiciliar] = useState(null)
  const [pessoaJuridica, setPessoaJuridica] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [nomeFantasia, setNomeFantasia] = useState(null)
  const [visivelPronome, setVisivelPronome] = useState(false);

  const [cadEndereco, setCadEndereco] = useState(false)

  const [visivelTipoConta, setVisivelTipoConta] = useState(false);
  const [visivelAtDomicilio, setAtDomicilio] = useState(false);

  //Teste para fazer mais de uma requisição com o Axios
  const enviarFormulario = async () => {
    axios.post('http://10.0.1.101:3000/cadastrarProfissonal', {
      CPF_CNPJ, 
      nome, 
      nomeFantasia, 
      pronomes, 
      email, 
      senha,
      telefone, 
      atendimentoDomiciliar,
      pessoaJuridica,
      descricao
    })
    .then(function (response) {
      console.log(response.data);
      if(cadEndereco){
        navigation.navigate('CadastroEndereco', {CPF_CNPJ})
      }else{
        navigation.navigate('Login')
      }
      
    })
    .catch (function (erro) {
      console.log(erro);
    })
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
        setTxtPronomes('Ele/Dele')
    }
    return () => {
      setEleDele(false)
    }
  })

  useEffect(() => {
    if (elaDela == true) {
      console.log('Ela/Dela')
      setPronomes('Ela/Dela')
      setTxtPronomes('Ela/Dela')
    }
    return () => {
      setElaDela(false)
    }
  })

  useEffect(() => {
    if (eluDelu == true) {
      console.log('Elu/Delu')
      setPronomes('Elu/Delu')
      setTxtPronomes('Elu/Delu')
    }
    return () => {
      setEluDelu(false)
    }
  })

  useEffect(() => {
    if (naoDizer == true) {
      console.log('Prefere não dizer')
      setTxtPronomes('Prefere não dizer')
      setPronomes(null)
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
  const [pronomes, setPronomes] = useState("")
  const [txtPronomes, setTxtPronomes] = useState("")
  const [txtAtDomiciliar, setTxtAtDomiciliar] = useState("Realiza atendimento á domicílio?")

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Cadastre-se
        </Text>

        <TextInput style={styles.campo}
          placeholder='Nome (obrigatório):'
          onChangeText={value => setNome(value)}
          value={nome}
        />

        <TextInput style={styles.campo}
          placeholder='Nome fantasia:'
          onChangeText={value => setNomeFantasia(value)}
        />

        <TextInput style={styles.campo}
          placeholder='CPF/CNPJ (obrigatório):'
          keyboardType='numeric'
          returnKeyType='done'
          value={CPF_CNPJ}
          onChangeText={value => setCPF_CNPJ(value)}
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
          <View style={styles.fundomodal}>
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

        <TextInput style={styles.campo}
          placeholder='E-mail (obrigatório):'
          onChangeText={value => setEmail(value)}
          keyboardType='email-address'
          value={email}
        />

        <TextInput style={styles.campo}
          placeholder='Crie uma senha (obrigatório):'
          onChangeText={value => setSenha(value)}
          value={senha}
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
          <View style={styles.fundomodal}>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(false);
              setTxtAtDomiciliar("Não realizo atendimento á domicílio.")
              setCadEndereco(true)}
            }>
              <Text style={styles.textomodal}>
                Não realizo atendimento á domicílio.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(true);
              setTxtAtDomiciliar("Sim, atendimento á domicilio e em meu estabelecimento.")
              setCadEndereco(true)}
            }>
              <Text style={styles.textomodal}>
                Sim, atendimento á domicilio e estabelecimento.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(true);
              setTxtAtDomiciliar("Realizo apenas atendimento á domicílio.")
              setCadEndereco(false)}
            }>
              <Text style={styles.textomodal}>
                Sim, apenas atendimento á domicílio.
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <TextInput style={styles.campo}
          placeholder='Telefone:'
          onChangeText={value => setTelefone(value)}
          keyboardType='numeric'
          returnKeyType='done'
          value={telefone}
        />

        <TouchableOpacity style={styles.botaomodal} onPress={toggle1}>
          <View>
            <Text style={styles.titulomodal}>
              Pronome: {txtPronomes}
            </Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          visible={visivelPronome}
          onBackButtonPress={toggle1}
          onBackdropPress={toggle1}
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

        <TextInput style={styles.descricao}
          placeholder='Descrição:'
          editable
          multiline
          numberOfLines={6}
          maxLength={200}
          onChangeText={value => setDescricao(value)}
          value={descricao}
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

        <TouchableOpacity style={styles.botao} onPress={enviarFormulario}>
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