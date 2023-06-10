import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const TelaCadastroEndereco = ({ navigation }) => {

  const [cepEnd, setCepEnd] = useState(null);
  const [infoCep, setInfo] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [numero, setNumero] = useState(null);
  const [complemento, setComplemento] = useState(null);
  const route = useRoute();

  const enviarFormulario = async () => {
    axios.post('http://192.168.1.3:3000/cadastrarEndereco', {
        latitude,
        longitude,
        cep: cepEnd,
        uf: infoCep.uf,
        localidadeCidade: infoCep.localidade,
        logradouro: infoCep.logradouro,
        bairro: infoCep.bairro,
        numero,
        complemento
    })
    .then(function (response) {
      console.log('ID do endereço cadastrado: '+ JSON.stringify(response.data.ID_Endereco))
      const ID_Endereco = response.data.ID_Endereco
      console.log("Constante com ID: " + ID_Endereco)

      axios.post(`http://192.168.1.3:3000/cadastrarEnderecoProfissional`, {
        FK_Profissionais_Enderecos: route.params.idProfissional, 
        FK_Enderecos_Profissionais: ID_Endereco
      })
      .then(function (response){
        console.log(response.data)
        navigation.navigate('Login')
      })
      .catch(function (erro){
        console.log(erro)
      })
    })
    .catch (function (erro) {
      console.log(erro);
    })
  };

  //cep
  const getCep = async () => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cepEnd}/json`);
    setInfo(data);
  }

  return (
    <ScrollView>
      <View style={styles.container}>

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
          placeholder='latitude:'
          value={latitude}
          onChangeText={value => setLatitude(value)}
        />
        <TextInput
          style={styles.campo}
          placeholder='longitude:'
          value={longitude}
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
          placeholder='numero:'
          value={numero}
          onChangeText={text => setNumero(text)}
        />
        <TextInput
          style={styles.campo}
          placeholder='complemento:'
          value={complemento}
          onChangeText={text => setComplemento(text)}
        />

        <TouchableOpacity style={styles.botao} onPress={enviarFormulario}>
          <Text style={styles.txtbtn} >
            Cadastrar Endereço
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

export default TelaCadastroEndereco;