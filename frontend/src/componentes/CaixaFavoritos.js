import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CaixaFavorito = () => {
    return(
        <View style={style.tela}>
            <Image style={style.imagem} source={require('../../assets/imagem5.png')}/>
            <Text style={style.pronome}>
                Ela/Dela
            </Text>
            <Text>
                Nome
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    tela: {
     flex: 1,
     backgroundColor: 'grey',
     flexDirection: 'row'
    },
    imagem: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100
    },
    pronome: {
        backgroundColor: '#B987B8',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        height: 45,
        justifyContent: 'center',
        borderRadius: 100,
        paddingHorizontal: 10
    },
})

export default CaixaFavorito