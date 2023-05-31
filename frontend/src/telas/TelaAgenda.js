import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl, FlatList, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import CaixaAgenda from '../componentes/CaixaAgenda';
import axios from 'axios';

const TelaAgenda = () => {

    const [agendamentos, setAgendamentos] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setTimeout(() => {
            // Lógica para buscar os dados atualizados
            infoAgendamentos()

            setRefreshing(false);
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    useEffect(() => {
        infoAgendamentos()
    }, []);

    const infoAgendamentos = () => {
      axios.get('http://192.168.1.11:3000/listagemAgendamentos')
        .then(function (response) {
            setAgendamentos(response.data)
            //console.log(agendamentos.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const infoProfissionais = () => {

    }

    const infoServicos = () => {

    }

    return (
        <SafeAreaView>
          <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
            <FlatList
                horizontal={false}
                data={agendamentos.data}
                renderItem={({item}) => <CaixaAgenda item={item} />}
                // keyExtractor={item => item.id}
            />
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