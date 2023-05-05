import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native'

const BoxPerfil = ({item}) => {
    return (
        <View style={styles.caixa}>
            <View style={styles.caixa2}>
                <Image
                source={require('../../assets/imagem1.png')}
                style={styles.imagem}/>
            </View>
            <View style={styles.view}>
            <Text style={styles.text}>
                Exemplo de Serviço
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 75,
        borderRadius: 14,
        backgroundColor: '#9a6b99',
    },
    caixa: {
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
    caixa2: {
        alignItems: 'center'
    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})

export default BoxPerfil