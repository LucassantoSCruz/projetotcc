import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';

const BoxPerfil = () => {
    return (
    <TouchableOpacity style={styles.touchable}> 
        <Image source={require("../assets/imagemexp.png")} style={styles.image}></Image>
            <View style={styles.view}>
                <Text style={styles.text}>Exemplo de Perfil</Text>
            </View>
    </TouchableOpacity>
    )
}

styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    },
    view: {
        height: 100,
        borderRadius: 20,
        backgroundColor: "#8a8f96",
    },
    touchable: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        margin: 30
    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
})

export default BoxPerfil