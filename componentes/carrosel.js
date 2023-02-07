import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Data from "./Data";

const Carrosel = () => {
    return (
        <TouchableOpacity>
        <View style={styles.carrosel}>
            <Image source={require('../assets/imagem2.png')} style={styles.imagem}/>
            <View style={styles.view}>
                <Data/>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carrosel: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        borderRadius: 20
    },
    imagem: {
        maxWidth: 350,
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