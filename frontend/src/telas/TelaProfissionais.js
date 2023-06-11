import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl, SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import BarCategoria from '../componentes/BarCategoria';
import PerfisFav from '../componentes/PerfisFav';
import Carrosel from '../componentes/Carrosel';
import axios from 'axios';
import CaixaServico from '../componentes/CaixaServico';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaProfissionais = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setTimeout(() => {
            // Lógica para buscar os dados atualizados
            listarServicos();
            obterDados();

            setRefreshing(false);
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const [idUsuario, setIdUsuario] = useState(null)

    const [tipoconta, setTipoconta] = useState('')

    const [servicos, setServicos] = useState([])

    useEffect(() => {
        listarServicos();
        obterDados();
    }, []);

    const listarServicos = () => {
        axios.get('http://192.168.1.10:3000/listarServicos')
        .then(function (response) {
            setServicos(response.data)
            console.log('Serviços recebidos: ' + JSON.stringify(servicos.data))
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }

    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setIdUsuario(idUsuario);
                console.log("Dados passados para tela: " + JSON.stringify(idUsuario))
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


    return (
        <View style={{ flex: 1 }}>

            <BarCategoria />
            <SafeAreaView style={styles.tela1}>
                <ScrollView style={styles.tela2}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>

                    <ScrollView horizontal>
                        <Carrosel />
                        <Carrosel />
                        <Carrosel />
                        <Carrosel />
                    </ScrollView>

                    <View style={styles.view3}>
                        <Text style={styles.texto}>Perfis Favoritos</Text>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Ver Todos</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view2}>
                        <ScrollView horizontal>
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                            <PerfisFav />
                        </ScrollView>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.texto}>Recomendações</Text>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Ver Todos</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <ScrollView horizontal={true} contentContainerStyle={{flex: 1}}>
                            <FlatList
                                horizontal={false}
                                data={servicos.data}
                                numColumns={2}
                                renderItem={({ item }) => <CaixaServico item={item} />}
                                keyExtractor={item => item.ID}
                                contentContainerStyle={{flex: 1}}
                            />
                        </ScrollView>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    tela1: {
        flex: 1,
        alignContent: 'center'
    },
    tela2: {
        flex: 1
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    texto2: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        textDecorationLine: 'underline',
    },
    textodestaque: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    view2: {
        flexDirection: 'row'
    },
    view3: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    boxperfil: {
        flex: 1,
    }
})

export default TelaProfissionais