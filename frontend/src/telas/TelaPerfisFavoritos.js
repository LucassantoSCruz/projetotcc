import React, { startTransition, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl, FlatList } from 'react-native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaPerfisFavoritados = () => {
    const [idUsuario, setIdUsuario] = useState(null)
    const [idProfissional, setIdProfissional] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [dados, setDados] = useState([])

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            obterDados();
            perfisFavoritos();
            setRefreshing(false);
        }, 2000);
    }

    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setIdUsuario(idUsuario);
                console.log("Dados passados para tela de perfil: " + idUsuario)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const perfisFavoritos = () => {
        axios.get(`http://192.168.10.242:3000/listarPerfisFavoritos/${idUsuario}`)
            .then(function (response) {
                if (response.data && response.data.data && response.data.data.length > 0) {
                    console.log(response.data.data);
                    setIdProfissional(response.data.data[0].FK_Profissionais_Clientes)
                    console.log("PERFIL FAVORITADO: " + idProfissional)

                    axios.get(`http://192.168.10.242:3000/ListarProfissionalCNPJ/${idProfissional}`)
                        .then(function (response) {
                            if (response.data && response.data.data) {
                                console.log("PERFIS PROFISSIONAIS: " + JSON.stringify(response.data.data));
                                setDados([response.data.data]);
                                console.log("Dados da Rota: " + JSON.stringify(dados))
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }


    useEffect(() => {
        obterDados()
        perfisFavoritos()
    }, [])

    const renderItem = ({ item }) => {

        if (!item || !item.pronomes) {
            return '';
        }

        if (!item || !item.nome) {
            return '';
        }

        if (!item || !item.descricao) {
            return '';
        }

        return (
            <View style={style.container}>
                <Image style={style.imagem} source={require('../../assets/imagem5.png')} />
                <View style={style.informacoes}>
                    <View style={style.caixapronome}>
                        <Text style={style.pronome}>
                            {item.pronomes}
                        </Text>
                    </View>
                    <Text style={style.nome}>
                        {item.nome}
                    </Text>
                    <Text style={style.descricao}>
                        {item.descricao}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={style.tela}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
                    <FlatList
                        data={dados}
                        renderItem={renderItem}
                    />
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    tela: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    informacoes: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    imagem: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100
    },
    caixapronome: {
        width: '100%',
        backgroundColor: '#B987B8',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 100,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    pronome: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    nome: {
        fontSize: 30,
        paddingHorizontal: 5
    },
    descricao: {
        fontSize: 20,
        paddingHorizontal: 5
    },
});

export default TelaPerfisFavoritados;