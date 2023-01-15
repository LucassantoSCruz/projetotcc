import React from 'react';

import { View, Image ,StyleSheet, TouchableOpacity } from 'react-native';

const PerfisFav = () => {
    return (
        <TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
            <Perfil/>
        </View>
        </TouchableOpacity>
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
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#9a6b99'
    },
    imagem: {
        borderRadius: 50,
        width: 75,
        height: 75,
    }
})

export default PerfisFav