import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CaixaFavorito from "../componentes/CaixaFavoritos";

const TelaPerfisFavoritados = () => {

    const [idUsuario, setIdUsuario] = useState(null)

    const [idProfissional, setIdProfissional] = useState(null)

    const [refreshing, setRefreshing] = useState(false);

    const [nomeProfissional, setNomeProfissional] = useState('')

    const [pronomes, setPronomes] = useState('')

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
        axios.get(`http://10.0.1.103:3000/listarPerfisFavoritos/${idUsuario}`)
            .then(function (response) {

                console.log(response.data.data);
                setIdProfissional(response.data.data[0].FK_Profissionais_Clientes)
                console.log("PERFIL FAVORITADO: " + idProfissional)

                axios.get(`http://10.0.1.103:3000/ListarProfissionalCNPJ/${idProfissional}`)
                    .then(function (response) {

                        console.log("PERFIS PROFISSIONAIS: " + JSON.stringify(response.data.data));

                        setPronomes(response.data.data.pronomes)

                        setNomeProfissional(response.data.data.nome)

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
    }, [])

    return (
        <View style={style.tela}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Text>
                    Tela Perfis Favoritados
                </Text>
                <Text>
                    {idProfissional}
                </Text>
                <Text>
                    Pronome do Profissional: {pronomes}
                </Text>
                <Text>
                    Nome do Profissional: {nomeProfissional}
                </Text>
                <CaixaFavorito/>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    tela: {
        flex: 1
    }
})

export default TelaPerfisFavoritados