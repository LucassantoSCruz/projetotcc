//Este componente serve para criar uma "Imagem Slider", por algum motivo está funcionando somente no expo de celular, vejo isso dps
//https://github.com/leecade/react-native-swiper#autoplay

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Swiper from 'react-native-swiper/src'

const ImagemSlider = () => {
    return (
            <Swiper style={styles.wrapper} 
            showsButtons={false}
            autoplay={false}
            activeDotColor='#9a6b99'>
                <View style={styles.slide1}>
                    <Image source={require('../assets/logo.png')} style={styles.logo}/>
                    <Text style={styles.text}>Bem Vindo ao Belezura</Text>
                </View>
                <View style={styles.slide1}>
                    <Image source={require('../assets/imagem1.png')} style={styles.imagem}/>
                </View>
                <View style={styles.slide1}>
                    <Image source={require('../assets/imagem2.png')} style={styles.imagem}/>
                </View>
            </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 250,
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e8d0e8'
    },
    text: {
      color: '#9a6b99',
      fontSize: 30,
      fontWeight: 'bold'
    },
    logo: {
        resizeMode: 'center',
        height: 100,
        widht: 100,
        margin: 10
    },
    imagem: {
        resizeMode: 'center',
        height: 250
    },
    pagina: {
        color: 'black',
        backgroundColor: 'black'
    }
})

export default ImagemSlider