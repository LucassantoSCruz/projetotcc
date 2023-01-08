import React from "react";
import { View ,Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Data from "./data";

const BoxPerfil = () => {
    return (
        <TouchableOpacity style={style.touchable}>
            <Image source={require('../assets/imagemexp.png')} style={style.imagem}/>
            <View style={style.view}>
                <Data/>
            </View>
        </TouchableOpacity>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const style = StyleSheet.create({
    view: {
        height: 75,
        borderRadius: 20,
        backgroundColor: "#8a8f96",
    },
    touchable: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        width: deviceWidth - 100,
        marginEnd: 10,
        marginTop: 10,
    },
    imagem: {
        height: 200,
        width: deviceWidth - 100,
    }
})

export default BoxPerfil