import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const BelezuraCard = () => {
    return (
        <View style={style.view}>

            <Image
            source={require('./assets/salao.png')}
            style={style.image}
            ></Image>

            <Text
            style={style.text1}>
                Criação de "Card"
            </Text>

            <Text
            style={style.text2}>
                O próximo passo é dar uma organizada no código e colocar uma imagem nesse card. Já estou me sentindo maluco 🤪
            </Text>

        </View>
    )
}

const telaWidht = (Dimensions.get('window').width)

const style = StyleSheet.create({
    view: {
        width: telaWidht - 30,
        backgroundColor: 'white',
        height: 300,
        borderRadius: 20,
        padding: 20,
        margin: 20
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 25
    },
    image: {
        widht: telaWidht - 30,
        height: 150,
        borderRadius: 10
    },
})

export default BelezuraCard;