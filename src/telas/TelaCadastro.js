import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button, Alert } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadraoPerfil from '../componentes/ImagemPadrao';
import axios from 'axios';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const PlaceholderImage = require('../../assets/Perfil.png');

const TelaCadastro = ({ navigation }) => {

  const [CPF_CNPJ, setCPF_CNPJ] = useState(null)
  const [Nome, setNome] = useState(null)
  const [Email, setEmail] = useState(null)
  const [Senha, setSenha] = useState(null)
  const [Telefone, setTelefone] = useState(null)
  const [AtendimentoDomiciliar, setAtendimentoDomiiliar] = useState(null)
  const [Descricao, setDescricao] = useState(null)
  
  //Não vão para o back por enquanto
  const [sobrenome, setSobrenome] = useState(null)
  const [nomefantasia, setNomefantasia] = useState(null)
  const [visivelSexo, setVisivelSexo] = useState(false);

  const [visivelCPF, setVisivelCPF] = useState(false);


  //Função para cadastrar (Axios pelo Chat GPT)
  const enviarFormulario = async () => {
    try {
      const response = await axios.post('http://192.168.1.3:3000/cadastrarProfissonal', {
        CPF_CNPJ, Nome, Email, Senha, Telefone, AtendimentoDomiciliar, Descricao
      });
      console.log(response.data);
    } catch (erro) {
      console.log(erro);
    }
  };

  function toggle1() {
    setVisivelSexo((visivelSexo) => !visivelSexo);
  }
  function toggle2() {
    setVisivelCPF((visivelCPF) => !visivelCPF);
  }

  const [profissional, setProfissional] = useState(false);
  const [cliente, setCliente] = useState(false);

  useEffect(() => {
    if (profissional == true) {
      console.log('Profissional'),
        setTipoconta('Profissional')
    }
    return () => {
      setProfissional(false)
    }
  }, [profissional])

  useEffect(() => {
    if (cliente == true) {
      console.log('Cliente')
      setTipoconta('Cliente')
    }
    return () => {
      setCliente(false)
    }
  }, [cliente])

  const [masculino, setMasculino] = useState(false);
  const [feminino, setFeminino] = useState(false);
  const [outro, setOutro] = useState(false)

  useEffect(() => {
    if (masculino == true) {
      console.log('Masculino'),
        setTiposexo('Masculino')
    }
    return () => {
      setMasculino(false)
    }
  })

  useEffect(() => {
    if (feminino == true) {
      console.log('Feminino')
      setTiposexo('Feminino')
    }
    return () => {
      setFeminino(false)
    }
  })

  useEffect(() => {
    if (outro == true) {
      console.log('Outro')
      setTiposexo('Outro/Prefere não dizer')
    }
    return () => {
      setOutro(false)
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
  const [tiposexo, setTiposexo] = useState("")

  //add o endereço
  const [cepEnd, setCepEnd] = useState(null);
  const [infoCep, setInfo] = useState('');

  //cep
  const getCep = async () => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cepEnd}/json`);
    setInfo(data);
  }


  const rotaCadastro = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ListagemDados', {
        // setCpf: "000",
        // nome: "000",
        // sobrenome: "000",
        // email: "000",
        // senha: "000",
        // cepEnd: "000",
        
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Cadastre-se
        </Text>

        <Text>{CPF_CNPJ} - {Nome} - {Email} - {Senha} - {Telefone} - {Descricao}</Text>

        <TextInput style={styles.campo}
          placeholder='Nome:'
          onChangeText={value => setNome(value)}
          value={Nome}
        />

        <TextInput style={styles.campo}
          placeholder='Sobrenome:'
          onChangeText={value => setSobrenome(value)}
          value={sobrenome}
        />

        <TouchableOpacity style={styles.botaomodal} onPress={toggle1}>
          <View>
            <Text style={styles.titulomodal}>
              Sexo: {tiposexo}
            </Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          visible={visivelSexo}
          onBackButtonPress={toggle1}
          onBackdropPress={toggle1}
        >
          <View style={styles.fundomodal}>
            <TouchableOpacity style={styles.selecao} onPress={() => setFeminino(true)}>
              <Text style={styles.textomodal}>
                Feminino
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => setMasculino(true)}>
              <Text style={styles.textomodal}>
                Masculino
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => setOutro(true)}>
              <Text style={styles.textomodal}>
                Outro/Prefere não dizer
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <TouchableOpacity style={styles.botaomodal} onPress={toggle2}>
          <View >
            <Text style={styles.titulomodal}>Tipo de Conta: {tipoconta}</Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          visible={visivelCPF}
          onBackButtonPress={toggle2}
          onBackdropPress={toggle2}
        >
          <View style={styles.fundomodal}>
            <TouchableOpacity style={styles.selecao} onPress={() => setProfissional(true)}>
              <Text style={styles.textomodal}>
                Profissional - Pessoa Jurídica
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selecao} onPress={() => setCliente(true)}>
              <Text style={styles.textomodal}>
                Cliente - Pessoa Física
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <TextInput style={styles.campo}
          placeholder='CPF/CNPJ:'
          keyboardType='numeric'
          returnKeyType='done'
          value={CPF_CNPJ}
          onChangeText={value => setCPF_CNPJ(value)}
        />

        <TextInput style={styles.campo}
          placeholder='Nome fantasia:'
          onChangeText={value => setNomefantasia(value)}
        />

        <TextInput style={styles.campo}
          placeholder='Telefone:'
          onChangeText={value => setTelefone(value)}
          keyboardType='numeric'
          returnKeyType='done'
          value={Telefone}
        />

        <TextInput style={styles.campo}
          placeholder='E-mail:'
          onChangeText={value => setEmail(value)}
          keyboardType='email-address'
          value={Email}
        />

        <TextInput style={styles.campo}
          placeholder='Crie uma senha:'
          onChangeText={value => setSenha(value)}
          value={Senha}
        />

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

        <TextInput
          style={styles.campo}
          placeholder='CEP:'
          value={cepEnd}
          onChangeText={text => setCepEnd(text)}
        />

        <TouchableOpacity style={styles.botaofoto} onPress={getCep}>
          <Text style={styles.txtbtn}>
            Salvar Endereço
          </Text>
        </TouchableOpacity>

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
          value={infoCep.cidade}
        />
        <TextInput
          style={styles.campo}
          placeholder='Estado:'
          value={infoCep.estado}
        />
        <TextInput
          style={styles.campo}
          placeholder='Numero:'
          value={infoCep.numero}
        />
        <TextInput
          style={styles.campo}
          placeholder='Complemento:'
        />


        {/* colocando o campo do cep para calcular o endereço
        <TextInput
          placeholder='CEP'
          value='{cepEnd}'
          onChangeText={text => setCepEnd(text)}
          onBlu={() => modCep(cepEnd)}
        />
        <Text> Rua: {endereco.Rua}</Text>
        <Text> Bairro: {endereco.Bairro}</Text>
        <Text> Cidade: {endereco.Cidade}</Text>
        <Text> Estado: {endereco.Estado}</Text>
        <Text> Numero: {endereco.Numero}</Text>
        <Text> Complemeto: {endereco.Complemeto}</Text>
        <Button title='Salvar' onPress={() => console.log(endereco)} />
        Precisa modificar o style, pq estou fazendo para criar as rotas */}

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
  },
  fotodeperfil: {
    height: 150,
    width: 150
  }
});

export default TelaCadastro;