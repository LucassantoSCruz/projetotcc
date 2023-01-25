import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Data from "./data";

const BoxPerfil = () => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Image source={require('../assets/imagem1.png')} style={styles.imagem}/>
            <View style={styles.view}>
                <Data/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 75,
        borderRadius: 20,
        backgroundColor: '#9a6b99',
    },
    touchable: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        flex: 1,
        margin: 15,
    },
    imagem: {
        resizeMode: 'center',
        width: 150,
        height: 115
    }
})

export default BoxPerfil