import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import cep from 'cep-promise';//biblioteca pra consultar CEP -> npm install cep-promise 

const TelaCadastro = () => {

  const [nome, setNome] = useState(null)
  const [sobrenome, setSobrenome] = useState(null)
  //const [cpf, setCpf] = useState(null)
  const [nomefantasia, setNomefantasia] = useState(null)
  const [telefone, setTelefone] = useState(null)

  //add o endereço
  const [cepEnd, setCepEnd] = useState(null);
  const [endereco, setEndereco] = useState({
    Rua: '',
    Bairro: '',
    Cidade: '',
    Estado: '',
    Numero: '',
    Complemeto: ''
  });

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [descr, onChangeText] = useState(null)
  

  const [visivelSexo, setVisivelSexo] = useState(false);
  const [visivelCPF, setVisivelCPF] = useState(false);

  function toggle1() {
    setVisivelSexo((visivelSexo) => !visivelSexo);
  }
  function toggle2() {
    setVisivelCPF((visivelCPF) => !visivelCPF);
  }


  // função modCep para conferir se o Cep está correto
  const modCep = async (cep) => {

    if(cep.length === 8){
      try{
        const resultado = await cep(cep);
        setEndereco(resultado)
      } catch(error){
        console.log(error);
      }
    }
  };


  
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
      value='{cepEnd}'
      onChangeText={text => setCepEnd(text)}
      onBlu = {() => modCep(cepEnd)}
    />
    <Text> Rua: {endereco.Rua}</Text>
    <Text> Bairro: {endereco.Bairro}</Text>
    <Text> Cidade: {endereco.Cidade}</Text>
    <Text> Estado: {endereco.Estado}</Text>
    <Text> Numero: {endereco.Numero}</Text>
    <Text> Complemeto: {endereco.Complemeto}</Text>
    <Button title='Salvar' onPress={() => console.log(endereco)} />

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
        <View style={styles.fundomodal}>
          <TouchableOpacity style={styles.selecao}>
            <Text style={styles.textomodal}>
              Profissional - Pessoa Jurídica
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selecao}>
            <Text style={styles.textomodal}>
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
        <Text style={styles.txtbtn}>
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

export default TelaCadastro