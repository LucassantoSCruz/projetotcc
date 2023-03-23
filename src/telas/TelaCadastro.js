import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import cep from 'cep-promise';//biblioteca pra consultar CEP -> npm install cep-promise 
import axios from 'axios';

const TelaCadastro = () => {

  const [nome, setNome] = useState(null)
  const [sobrenome, setSobrenome] = useState(null)
  //const [cpf, setCpf] = useState(null)
  const [nomefantasia, setNomefantasia] = useState(null)
  const [telefone, setTelefone] = useState(null)

  //add o endereço
  const [cepEnd, setCepEnd] = useState({});
  const [infoCep, setInfo] = useState('');

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [descr, onChangeText] = useState(null)
  

  const pessoaF = useState(null);
  const pessoaJ = useState(null)
  const pessoas = useState(null)
  const [visivelSexo, setVisivelSexo] = useState(false);
  const [visivelCPF, setVisivelCPF] = useState(false);

  function toggle1() {
    setVisivelSexo((visivelSexo) => !visivelSexo);
  }
  function toggle2() {
    setVisivelCPF((visivelCPF) => !visivelCPF);
  }

  const getCep = async () => {
    const {data} = await axios.get(`https://viacep.com.br/ws/${cepEnd}/json`);
    setInfo(data);
  }

  const rotaCadastro = async () =>{
    //const {data} = await axios.post(`http://localhost:3000/CadastroDados`);
    const cadastrar = data => axios.post(`http://localhost:3000/CadastroDadosF`, data)
    .then(() => {
      console.log('dados cadastrados!')
    }).catch(() => {
      console.log('erro ao cadastrar')
    })
  }


/*diferença entre pessoaFisica e pessoaJuridica
if(pessoas => pessoas.pessoaF) { 
  //ligação com o front
    const rotaCadastro = async () =>{
      //const {data} = await axios.post(`http://localhost:3000/CadastroDados`);
      const cadastrar = data => axios.post(`http://localhost:3000/CadastroDadosF`, data)
      .then(() => {
        console.log('dados cadastrados!')
      }).catch(() => {
        console.log('erro ao cadastrar')
      })
    }
  } else {
    const rotaCadastro = async () =>{
      //const {data} = await axios.post(`http://localhost:3000/CadastroDados`);
      const cadastrar = data => axios.post(``, data)
      .then(() => {
        console.log('dados cadastrados!')
      }).catch(() => {
        console.log('erro ao cadastrar')
      })
    }
  }
 */
 

  
  return (
    <ScrollView>
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Cadastre-se
      </Text>

      <TextInput style={styles.campo}
        placeholder='Nome:'
        onChangeText={value => setNome(value)}
      />

      <TextInput style={styles.campo}
        placeholder='Sobrenome:'
        onChangeText={value => setSobrenome(value)}
      />

      <TouchableOpacity style={styles.botaomodal} onPress={toggle1}>
        <View>
          <Text style={styles.titulomodal}>
            Sexo:
          </Text>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visivelSexo}
        onBackButtonPress={toggle1}
        onBackdropPress={toggle1}
      >
        <View style={styles.fundomodal}>
          <TouchableOpacity style={styles.selecao}>
            <Text style={styles.textomodal}>
              Feminino
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selecao}>
            <Text style={styles.textomodal}>
              Masculino
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selecao}>
            <Text style={styles.textomodal}>
              Outros/Prefere não dizer
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

    
    {/* colocando o campo do cep para calcular o endereço */}
    <TextInput
      placeholder='CEP'
      value={cepEnd}
      onChangeText={text => setCepEnd(text)}
    />
    <TouchableOpacity onPress={getCep}>
    <Button title='Buscar'/>
    </TouchableOpacity>
    <Text> Rua: {infoCep.logradouro}</Text>
    <Text> Bairro: {infoCep.Bairro}</Text>
    <Text> Cidade: {infoCep.Cidade}</Text>
    <Text> Estado: {infoCep.Estado}</Text>
    <Text> Numero: {infoCep.Numero}</Text>
    <Text> Complemeto: {infoCep.Complemeto}</Text>
  

     {/* Precisa modificar o style, pq estou fazendo para criar as rotas */}



      <TouchableOpacity style={styles.botaomodal} onPress={toggle2}>
        <View >
          <Text style={styles.titulomodal}>Tipo de Conta:</Text>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visivelCPF}
        onBackButtonPress={toggle2}
        onBackdropPress={toggle2}
      >
        <View style={styles.fundomodal} value={pessoas}>
          <TouchableOpacity style={styles.selecao}>
            <Text style={styles.textomodal}  onPress={pessoaJ}>
              Profissional - Pessoa Jurídica
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selecao}>
            <Text style={styles.textomodal}  onPress={pessoaF}>
              Pessoal - Pessoa Física
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      
      
      <TextInput style={styles.campo}
        placeholder='CPF/CNPJ:'
        onChangeText={value => setCpf(value)}
        keyboardType='numeric'
        returnKeyType='done'
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
      />

      <TextInput style={styles.campo}
        placeholder='E-mail:'
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
      />

      <TextInput style={styles.campo}
        placeholder='Crie uma senha:'
        onChangeText={value => setSenha(value)}
      />

      <TextInput style={styles.descricao}
        placeholder='Descrição:'
        editable
        multiline
        numberOfLines={6}
        maxLength={200}
        onChangeText={value => onChangeText(value)}
        value={descr}
      />

      <Text style={styles.titfotodeperfil}>
        Foto de Perfil
      </Text>

      <Image style={styles.fotoperfil} source={require('../../assets/Perfil.png')}/>

      <TouchableOpacity style={styles.botaofoto}>
        <Text style={styles.txtbtn}>
          Importar Foto
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.txtbtn} onPress={rotaCadastro}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
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
    marginBottom:15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  txt:{
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
  titfotodeperfil:{
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
    marginBottom: 30
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

export default TelaCadastro;