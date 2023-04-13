import React from "react";
import { View, StyleSheet, Image } from 'react-native';

const MarcadorPessoal = () => {
    return (
        <View style={styles.itensMarcador}>
            <View >
                <Image source={require('../../assets/iconeMarcadorMapa.jpg')} style={styles.imagem}/>
                <Image source={require('../../assets/trianguloMarcadorMapa.png')} style={styles.triangulo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itensMarcador: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bolinha: {
        width: 35,
        height: 35,
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 100
    },
    imagem: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        flex: 2,
        borderRadius: 100
    },
    triangulo: {
        width: 5,
        height: 5,
        alignSelf: 'center',
        flex: 1,
    }
})

export default MarcadorPessoal