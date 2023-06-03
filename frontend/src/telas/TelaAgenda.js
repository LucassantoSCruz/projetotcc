import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl, FlatList, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import CaixaAgenda from '../componentes/CaixaAgenda';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaAgenda = () => {

  const [agendamentos, setAgendamentos] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [profissionais, setProfissionais] = useState(null)
  const [servicos, setServicos] = useState(null)
  const [clientes, setClientes] = useState(null)

  const fetchData = () => {
    setTimeout(() => {
      // Lógica para buscar os dados atualizados
      // infoAgendamentos()
      //obterDados()

      setRefreshing(false);
    }, 2000);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  useEffect(() => {
    infoAgendamentos()
    //obterDados()
  }, []);
  
  // const obterDados = async () => {
  //   try {
  //     const valor = await AsyncStorage.getItem('tipoconta');
  //     if (valor !== null) {
  //       const tipoconta = JSON.parse(valor);
  //       setTipoconta(tipoconta);
  //       console.log("Tipo de conta: " + JSON.stringify(tipoconta))
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } 

  //   if(tipoconta == 'Cliente'){
  //     try {
  //       const valor = await AsyncStorage.getItem('idUsuario');
  //       if (valor !== null) {
  //         const idUsuario = JSON.parse(valor);
  //         setIdCliente(idUsuario);
  //         console.log("Dados passados para tela (Cliente): " + JSON.stringify(idCliente))
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }else{
  //     try {
  //       const valor = await AsyncStorage.getItem('idUsuario');
  //       if (valor !== null) {
  //         const idUsuario = JSON.parse(valor);
  //         setIdProfisional(idUsuario);
  //         console.log("Dados passados para tela (Profissional): " + JSON.stringify(idProfissional))
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  const infoAgendamentos = () => {
    axios.get(`http://10.0.1.96:3000/ListarTodaInfoAgendamentos`)
    .then(function (response) {
        console.log('Agendamentos Listados: ' + JSON.stringify(response.data.data))
    }).catch(function (error) {
        console.log(error)
    })
  }

  return (
    <SafeAreaView>
      <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
        {/* <FlatList
          horizontal={false}
          data={agendamentos.data}
          renderItem={({item}) => <CaixaAgenda item={item} />}
          // keyExtractor={item => item.id}
        /> */}
      </ScrollView>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  },
  caixa: {
    width: 350,
    height: 250,
    backgroundColor: '#DCBADB',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  imgtxt: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: 340,
    height: 163,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#F4E8F2'
  },
  imagem: { 
    width: 165,
    height: 160,
    borderRadius: 10
  },
  texto: {
    width: 165,
    height: 160,
    marginLeft: 5,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 15
  },
  info: {
    marginTop: 15
  },
  botao: {
    alignItems:'center',
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: '#F4E8F2',
    borderWidth: 1,
    borderRadius: 10,
    width: 110,
    height: 60,
    marginLeft: 5,
  }
});

export default TelaAgenda