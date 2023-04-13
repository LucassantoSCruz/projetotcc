import React from "react";
import { View, StyleSheet, Image } from 'react-native';

const MarcadorPessoal = () => {
    return (
        <View style={styles.bolinha}>
            <Image source={require('../../assets/iconMarcadorMapa.png')} style={styles.imagem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bolinha: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 100
    },
    imagem: {
        width: 45,
        height: 45,
        borderRadius: 100
    }
})

export default MarcadorPessoal