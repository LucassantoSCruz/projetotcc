import React from 'react';

import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const TelaPerfilCliente = () => {

    return (

        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.esquerda}>
                    <Text style={styles.pronome}>Pronome: Elx</Text>
                    <Text style={styles.nome}>Nome do Perfil</Text>
                    <View style={styles.linha} />
                </View>


                <View style={styles.direita}>
                    <Image style={styles.fotodeperfil} source={require('../../assets/Perfil.png')} />
                </View>
            </View>

            <TouchableOpacity style={styles.selecao}>
                <Text style={styles.opcoes}>Minhas Informações</Text>
                {/* <Image style={styles.seta} source={require('../../assets/Seta.png')} /> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.selecao}>
                <Text style={styles.opcoes}>Perfis Favoritos</Text>
                {/* <Image style={styles.seta} source={require('../../assets/Seta.png')} /> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.selecao}>
                <Text style={styles.opcoes}>Configurações</Text>
                {/* <Image style={styles.seta} source={require('../../assets/Seta.png')} /> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.selecao}>
                <Text style={styles.opcoes}>Opção Quatro</Text>
                {/* <Image style={styles.seta} source={require('../../assets/Seta.png')} /> */}
            </TouchableOpacity>


            <TouchableOpacity style={styles.selecao}>
                <Text style={styles.opcoes}>Opção Cinco</Text>
                {/* <Image style={styles.seta} source={require('../../assets/Seta.png')} /> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.selecao}>
                <Text style={styles.opcoes}>Sair do Aplicativo</Text>
                {/* <Image style={styles.seta} source={require('../../assets/Seta.png')} /> */}
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({

    view: {
        flexDirection: 'row',
        marginTop: 15,
    },

    esquerda: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    direita: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#f4e8f2',
    },

    titulo: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 30
    },

    campo: {
        flexDirection: 'row',
    },

    fotodeperfil: {
        width: 100,
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100,
        marginLeft: 20,
    },

    opcoes: {
        fontSize: 22,
    },

    seta: {
        width: 30,
        height: 30,
    },

    pronome: {
        width: '90%',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#B987B8',
        padding: 4,
        borderRadius: 20,
        marginBottom: 5,
    },

    nome: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    linha: {
        backgroundColor: 'black',
        marginBottom: 10,
        width: '85%',
        height: 2
    },

    selecao: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        height: 60,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        margin: 5,
        backgroundColor: 'white'
    }
})

export default TelaPerfilCliente;