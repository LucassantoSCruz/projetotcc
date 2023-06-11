import { ENDERECO_API } from '../../config';
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaPerfisFavoritados = () => {

    const [idUsuario, setIdUsuario] = useState(null)

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
    axios.get(`${ENDERECO_API}/listarPerfisFavoritos/${idUsuario}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });

}

useEffect(() => {
    obterDados(),
        perfisFavoritos()
})

    return (
        <View style={style.tela}>
            <Text>
                Tela Perfis Favoritados
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