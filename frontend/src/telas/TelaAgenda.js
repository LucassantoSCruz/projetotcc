import { ENDERECO_API } from '../../config';
import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl, FlatList, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import CaixaAgendaProfissional from '../componentes/CaixaAgendaProfissional';
import CaixaAgendaCliente from '../componentes/CaixaAgendaCliente';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaAgenda = () => {

  const [agendamentos, setAgendamentos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [idUsuario, setIdUsuario] = useState(null);
  const [tipoconta, setTipoconta] = useState(null);
  const [rotaBusca, setRotaBusca] = useState('');

  const fetchData = () => {
    setTimeout(() => {
      // Lógica para buscar os dados atualizados
      obterDados();
      definirRota();
      infoAgendamentos();

      setRefreshing(false);
    }, 2000);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  useEffect(() => {
    obterDados();
    definirRota();
    infoAgendamentos();
  }, []);

  const definirRota = () => {
    if (tipoconta == 'Profissional') {
      setRotaBusca('ListarAgendamentosProfissional')
      console.log('Rota: ' + rotaBusca)
    } else {
      setRotaBusca('ListarAgendamentosCliente')
      console.log('Rota: ' + rotaBusca)
    }
  }

  const infoAgendamentos = () => {
    axios.get(`${ENDERECO_API}/${rotaBusca}/${idUsuario}`)
      .then(function (response) {
        //console.log('Agendamentos Listados: ' + JSON.stringify(response.data.data))
        setAgendamentos(response.data.data)
        //console.log(agendamentos)
      }).catch(function (error) {
        console.log(error)
      })
  }

  const obterDados = async () => {
    try {
      const valor = await AsyncStorage.getItem('idUsuario');
      if (valor !== null) {
        const idUsuario = JSON.parse(valor);
        setIdUsuario(idUsuario);
        console.log("ID passado para Agenda: " + idUsuario)
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const valor = await AsyncStorage.getItem('tipoconta');
      if (valor !== null) {
        const tipoconta = JSON.parse(valor);
        setTipoconta(tipoconta);
        console.log("Tipo de conta: " + JSON.stringify(tipoconta))
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (tipoconta == 'Profissional') {
    return (
      <View>
        <SafeAreaView>
          <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
            <View>
              <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
                <View>
                  <Text> </Text>
                </View>
                <FlatList
                  horizontal={false}
                  data={agendamentos}
                  renderItem={(item) => <CaixaAgendaProfissional agendamentos={item} />}
                  keyExtractor={item => item.ID}
                  contentContainerStyle={{ flex: 1 }}
                />
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <View>
        <SafeAreaView>
          <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
            <View>
              <Text></Text>
            </View>

            <View>
              <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
                <FlatList
                  horizontal={false}
                  data={agendamentos}
                  renderItem={(item) => <CaixaAgendaCliente agendamentos={item} />}
                  keyExtractor={item => item.ID}
                  contentContainerStyle={{ flex: 1 }}
                />
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
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
    alignItems: 'center',
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