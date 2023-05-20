import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BoxPerfil from '../componentes/BoxPerfil';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const TelaPerfilProfissional = () => {

    const [servicos, setServicos] = useState([])

    const navigation = useNavigation()

    //Utilizar rota de listagem com o id do profissional em questão
    useEffect(() => {
        axios.get('http://192.168.10.242:3000/listarServicos')
        .then(function (response) {
            setServicos(response.data)
            console.log(servicos.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);

    return (
        <View>
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.esquerda}>
                        <Text style={styles.pronome}>Pronome: Elx</Text>
                        <Text style={styles.nome}>Nome do Perfil</Text>
                        <View style={styles.linha} />
                        <Text style={styles.legenda}>Legenda</Text>
                    </View>
                    <View style={styles.direita}>
                        <Image style={styles.fotodeperfil} source={require('../../assets/imagem5.png')} />
                    </View>
                </View>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao1}>
                        <Text style={styles.texto} onPress={() => cb.navigate('TelaInformacoes')}>INFORMAÇÕES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao2}>
                        <Text style={styles.texto}>CHAT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view2}>

                    <TouchableOpacity style={styles.boxperfil} onPress={() => navigation.navigate('Servico')}>
                        <BoxPerfil />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxperfil}>
                        <BoxPerfil />
                    </TouchableOpacity>

                </View>
                <View style={styles.view2}>

                    <TouchableOpacity style={styles.boxperfil}>
                        <BoxPerfil />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxperfil}>
                        <BoxPerfil />
                    </TouchableOpacity>
                </View>
                <View style={styles.view2}>

                    <TouchableOpacity style={styles.boxperfil}>
                        <BoxPerfil />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxperfil}>
                        <BoxPerfil />
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        marginTop: 15
    },
    view2: {
        flexDirection: 'row',
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
    pronome: {
        width: '85%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#B987B8',
        padding: 5,
        borderRadius: 20,
        marginBottom: 10,
    },
    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        maxWidth: '85%',
        marginBottom: 10,
    },
    legenda: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 10,
        width: '85%'
    },
    linha: {
        backgroundColor: 'black',
        marginBottom: 10,
        width: '85%',
        height: 2
    },
    fotodeperfil: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100,
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    botao1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#B987B8',
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 7.5,
        marginRight: 7.5
    },
    botao2: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#B987B8',
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 7.5,
        marginRight: 7.5
    },
    botao3: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#B987B8',
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 7.5,
        marginRight: 7.5
    },
    texto: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17,
    },
    boxperfil: {
        flex: 1,
    }
});

export default TelaPerfilProfissional