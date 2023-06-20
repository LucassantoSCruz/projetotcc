import { ENDERECO_API } from "../../config";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const BoxPerfil = (item) => {

    //console.log('Itens do box Perfil: '+ JSON.stringify(item.item.titulo))

    const navigation = useNavigation()
    const [imagemServico, setImagemServico] = useState(null)

    useEffect(() => {
        setImagemServico(item.item.imagem.replace('public\\uploads', '/uploads'))
        console.log('Imagem: ' + imagemServico)
    }, [])

    const Pressionar = () => {
        console.log('Info do serviço clicado: ' + JSON.stringify(item.item))
        const idServico = item.item.ID
        // console.log('ID salvo: ' + idServico)
        navigation.navigate('Servico', { idServico })
    }

    return (
        <TouchableOpacity onPress={Pressionar} >
            <View style={styles.fundo}>
                <View style={styles.fundoimagem}>
                    {
                        imagemServico ?
                        <Image
                            source={{ uri: `${ENDERECO_API}/${imagemServico}` }}
                            style={styles.imagem} 
                        />
                        :
                        <Image
                            source={require('../../assets/imagem1.png')}
                            style={styles.imagem} 
                        />
                    }
                </View>
                <View style={styles.fundonome}>
                    <Text style={styles.texto}>
                        {item.item.titulo}
                    </Text>
                    <Text style={styles.textopreco}>
                        R$ {item.item.preco.replace('.', ',')}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    textocampo: {
        fontSize: 32,
    },
    fundonome: {
        borderRadius: 14,
        width: '100%',
        backgroundColor: '#9a6b99',
    },
    fundo: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: '2%',
        flex: 1,
        marginBottom: 15,
        width: 185,
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imagem: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },
    fundoimagem: {
        alignItems: 'center'
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        padding: 10
    },
    textopreco: {
        fontSize: 18,
        color: 'white',
        padding: 10
    }
})

export default BoxPerfil