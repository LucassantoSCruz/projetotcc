import React from "react";
import { View ,Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const BoxPerfil = () => {
    return (
        <TouchableOpacity style={style.touchable}>
            <Image source={require('../assets/imagemexp.png')} style={style.imagem}/>
            <View style={style.view}>
                <Text style={style.text}>
                    Exemplo de Perfil
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const style = StyleSheet.create({
    view: {
        height: 100,
        borderRadius: 20,
        backgroundColor: "#8a8f96",
    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    touchable: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        width: deviceWidth - 100
    },
    imagem: {
        height: 200,
        width: deviceWidth - 100,
    }
})

export default BoxPerfil