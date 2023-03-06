import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Carrosel = () => {
    return (
        <TouchableOpacity style={styles.touchable}>
                <View>
                    <Image
                    source={require('../../assets/imagem2.png')}
                    style={styles.imagem}/>
                </View>
                <View style={styles.view}>
                <Text style={styles.text}>
                    Exemplo de Serviço
                </Text>
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
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    imagem: {
        height: 200,
        maxWidth: 330,
        resizeMode: 'contain'
    },
    view2: {
        alignItems: 'center'
    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})

export default Carrosel