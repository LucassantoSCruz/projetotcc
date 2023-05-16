import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button, Alert } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadraoPerfil from '../componentes/ImagemPadrao';
import axios from 'axios';

const PlaceholderImage = require('../../assets/Perfil.png');

const TelaCadastroProfissional = ({ navigation }) => {

  const [ID, setID] = useState(null)
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
          axios.post('http://10.0.1.101:3000/cadastrarProfissonal', {
            CPF_CNPJ, 
            Nome, 
            NomeFantasia, 
            Pronomes, 
            Email, 
            Senha,
            Telefone, 
            AtendimentoDomiciliar,
            PessoaJuridica,
            Descricao
          }),
          axios.post('http://10.0.1.101:3000/cadastrarEndereco', {
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
          console.log(response.data);
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

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Cadastre-se
        </Text>

        <TextInput style={styles.campo}
          placeholder='Nome (obrigatório):'
          onChangeText={value => setNome(value)}
          value={Nome}
        />

        <TextInput style={styles.campo}
          placeholder='Nome fantasia:'
          onChangeText={value => setNomeFantasia(value)}
        />

        <TextInput style={styles.campo}
          placeholder='CPF/CNPJ (obrigatório):'
          keyboardType='numeric'
          returnKeyType='done'
          value={ID}
          onChangeText={value => setID(value)}
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
          value={Email}
        />

        <TextInput style={styles.campo}
          placeholder='Crie uma senha (obrigatório):'
          onChangeText={value => setSenha(value)}
          value={Senha}
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
              setTxtAtDomiciliar("Não realizo atendimento á domicílio.")}
            }>
              <Text style={styles.textomodal}>
                Não realizo atendimento á domicílio.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(true);
              setTxtAtDomiciliar("Sim, atendimento á domicilio e em meu estabelecimento.")}
            }>
              <Text style={styles.textomodal}>
                Sim, atendimento á domicilio e no estabelecimento.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => {
              setAtendimentoDomiciliar(true);
              setTxtAtDomiciliar("Realizo apenas atendimento á domicílio.")}
            }>
              <Text style={styles.textomodal}>
                Realizo apenas atendimento á domicílio.
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <TextInput style={styles.campo}
          placeholder='Telefone:'
          onChangeText={value => setTelefone(value)}
          keyboardType='numeric'
          returnKeyType='done'
          value={Telefone}
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
          value={Descricao}
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