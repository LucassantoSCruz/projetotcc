import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl, FlatList } from 'react-native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const TelaPerfisFavoritados = () => {

    const [idUsuario, setIdUsuario] = useState(null)
    const [idProfissional, setIdProfissional] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [nomeProfissional, setNomeProfissional] = useState('')
    const [pronomes, setPronomes] = useState('')
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
        axios.get(`http://10.0.1.29:3000/listarPerfisFavoritos/${idUsuario}`)
            .then(function (response) {
                console.log(response.data.data);
                setIdProfissional(response.data.data[0].FK_Profissionais_Clientes)
                console.log("PERFIL FAVORITADO: " + idProfissional)

                axios.get(`http://10.0.1.29:3000/ListarProfissionalCNPJ/${idProfissional}`)
                    .then(function (response) {
                        console.log("PERFIS PROFISSIONAIS: " + JSON.stringify(response.data.data));
                        setDados([response.data.data]);
                        console.log("Dados da Rota: " + JSON.stringify(dados))
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    useEffect(() => {
        obterDados()
        perfisFavoritos()
    }, [])


    return (
        <View style={style.tela}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <FlatList
                    data={dados}
                    renderItem={renderItem}
                />
            </ScrollView>
        </View>
    )
}

const renderItem = ({ item }) => {
    return (
        <View style={style.container}>
            <Image style={style.imagem} source={require('../../assets/imagem5.png')} />
            <View>
                <Text style={style.pronome}>
                    {item.pronomes}
                </Text>
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
        borderTopWidth: 1
    },
    org: {
        flexDirection: "row"
    },
    imagem: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100
    },
    pronome: {
        backgroundColor: '#B987B8',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 100,
        paddingHorizontal: 40,
        alignContent: 'center',
        alignItems: 'center',
    },
    nome: {
        fontSize: 24,
        paddingHorizontal: 5
    },
    descricao: {
        fontSize: 18,
        paddingHorizontal: 5
    },
})

export default TelaPerfisFavoritados;
