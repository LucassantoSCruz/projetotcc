import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Data from "./Data";

const BoxPerfil = () => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <View style={styles.view2}>
                <Image
                source={require('../../assets/imagem1.png')}
                style={styles.imagem}/>
            </View>
            <View style={styles.view}>
            <Data/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 75,
        borderRadius: 14,
        backgroundColor: '#9a6b99',
    },
    touchable: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        flex: 1,
        marginLeft: 7.5,
        marginRight: 7.5,
        marginBottom: 15
    },
    imagem: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    view2: {
        alignItems: 'center'
    },
})

export default BoxPerfil