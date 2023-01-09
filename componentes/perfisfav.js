import React from 'react';
import { View, Image ,StyleSheet } from 'react-native';

const PerfisFav = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Perfil/>
        </View>
    )
}

const Perfil = () => {
    return (
        <View style={style.perfil}>
            <Image source={require('../assets/imagem5.png')} style={style.imagem}/>
        </View>
    )
}

const style = StyleSheet.create({
    perfil: {
        flexDirection: 'row',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        width: 75,
        height: 75,
        margin: 15,
        backgroundColor: '#9a6b99'
    },
    imagem: {
        borderRadius: 50,
        width: 75,
        height: 75,
    }
})

export default PerfisFav