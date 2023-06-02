import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaPerfisFavoritados = () => {

    const [idUsuario, setIdUsuario] = useState(null)

    const [idProfissional, setIdProfissional] = useState(null)

    const [dadosProfissional, setdadosProfissional] = useState(null)

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
        obterDados(),
        perfisFavoritos()
    },[])

    return (
        <View style={style.tela}>
            <Text>
                Tela Perfis Favoritados
            </Text>
            <Text>
                {idProfissional}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TelaPerfisFavoritados