import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TelaCadastro = () => {

  const [nome, setNome] = useState(null)
  const [sobrenome, setSobrenome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [nomefantasia, setNomefantasia] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [descr, onChangeText] = useState(null)

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
      
      <View style={styles.caixa}>
        <Text style={styles.txt}>
          Sexo:
        </Text>
          <BouncyCheckbox
            style={{marginLeft:10}}
            fillColor="#9a6b99"
            text='Feminino'
          />
          <BouncyCheckbox
            style={{marginLeft:10}}
            fillColor="#9a6b99"
            text='Masculino'
          />
          <BouncyCheckbox
            style={{marginLeft:10}}
            fillColor="#9a6b99"
            text='Prefiro não dizer'
          />            
      </View>

      <View style={styles.caixa}>
        <Text style={styles.txt}>
          Tipo de conta:
        </Text>
        <View style={styles.check}>
        <BouncyCheckbox
            style={{marginLeft:10}}
            fillColor="#9a6b99"
            text='Física'
          /> 
          <BouncyCheckbox
            style={{marginLeft:10}}
            fillColor="#9a6b99"
            text='Jurídica'
          /> 
        </View>
      </View>

      <TextInput style={styles.campo}
        placeholder='Cpf/Cnpj:'
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
        maxLength={40}
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
});

export default TelaCadastro