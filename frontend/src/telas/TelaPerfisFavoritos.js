import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'

const perfisFavoritos = () => {
    axios.get(`http://10.0.1.57:3000/listarPerfisFavoritos/${FK_Clientes_Profissionais}`)
}

const TelaPerfisFavoritados = () => {
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