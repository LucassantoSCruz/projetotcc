import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const BoxProf = ( item ) => {

    //console.log('Itens do box Perfil: '+ JSON.stringify(item.item.titulo))

    const navigation = useNavigation()
    const [ imagemSelecionada, setImagemSelecionada] = useState();

    useEffect(() =>{
        console.log(imagemSelecionada)
    }, [imagemSelecionada])

    const Pressionar = async () => {
        console.log('Info do serviço clicado: ' + JSON.stringify(item.item))
        const idServico = item.item.ID 
        // console.log('ID salvo: ' + idServico)
        navigation.navigate('ServicoProfissional', {idServico})

        const imagemRecuperada = await AsyncStorage.getItem('imagemServico')
        setImagemSelecionada(imagemRecuperada)
    }

    return (
        <TouchableOpacity onPress={Pressionar} >
            <View style={styles.caixa}>
                <View style={styles.caixa2}>
                    {
                    imagemSelecionada ?
                    <Image
                    source={{uri: imagemSelecionada}}
                    style={styles.imagem}/>
                    :
                    <Image
                    source={require('../../assets/imagem1.png')}
                    style={styles.imagem}/>
                    }
                </View>
                <View style={styles.view}>
                <Text style={styles.text}>
                    {item.item.titulo}
                </Text>
                </View>
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
    caixa: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: '2%',
        flex: 1,
        marginBottom: 15,
        width: 185,
        flexGrow: 1
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

export default BoxProf;