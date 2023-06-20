import { ENDERECO_API } from "../../config";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const BoxProf = (item) => {

    //console.log('Itens do box Perfil: '+ JSON.stringify(item.item.titulo))

    const navigation = useNavigation()
    const [imagemServico, setImagemServico] = useState(null)

    useEffect(() => {
        setImagemServico(item.item.imagem)
        console.log('Imagem: ' + imagemServico)
    }, [])

    const Pressionar = async () => {
        console.log('Info do serviço clicado: ' + JSON.stringify(item.item))
        const idServico = item.item.ID
        // console.log('ID salvo: ' + idServico)
        navigation.navigate('ServicoProfissional', { idServico })
    }

    return (
        <TouchableOpacity onPress={Pressionar} >
            <View style={styles.caixa}>
                <View style={styles.caixa2}>
                    {
                        imagemServico ?
                            <Image
                                source={{ uri: `${ENDERECO_API}/${imagemServico.replace('public\\uploads', '/uploads')}` }}
                                style={styles.imagem} />
                            :
                            <Image
                                source={require('../../assets/imagem1.png')}
                                style={styles.imagem} />
                    }
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        {item.item.titulo}
                    </Text>
                    <Text style={styles.textopreco}>
                        R$ {item.item.preco.replace('.', ',')}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        backgroundColor: '#9a6b99',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14
    },
    caixa: {
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
        resizeMode: 'cover',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14
    },
    caixa2: {
        alignItems: 'center'
    },
    text: {
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

export default BoxProf;