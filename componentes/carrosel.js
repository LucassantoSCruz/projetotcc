import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Data from "./data";

const Carrosel = () => {
    return (
        <TouchableOpacity>
        <View style={style.carrosel}>
            <Image source={require('../assets/imagem2.png')} style={style.imagem}/>
            <View style={style.view}>
                <Data/>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    carrosel: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        borderRadius: 20
    },
    imagem: {
        maxWidth: 370,
        height: 200,
        resizeMode: 'center'
    },
    view: {
        height: 75,
        borderRadius: 20,
        backgroundColor: '#9a6b99',
        width: 350
    }
})

export default Carrosel