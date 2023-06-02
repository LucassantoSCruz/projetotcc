import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground, RefreshControl, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import BoxPerfil from '../componentes/BoxPerfil';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CaixaServico from '../componentes/CaixaServico';
import BoxPerfilEstatico from '../componentes/BoxPerfilEstatico';

const TelaPerfilProfissional = () => {

    const navigation = useNavigation()
    const route = useRoute();
    const [refreshing, setRefreshing] = useState(false);
    const [idProfissional, setIdProfissional] = useState(null)
    const [perfil, setPerfil] = useState(null)
    const [favoritar, setFavoritar] = useState(false)
    const [servicos, setServicos] = useState(null)
    const [nome, setNome] = useState(null)
    const [descricao, setDescricao,] = useState(null)
    const [pronomes, setPronomes] = useState(null)
    const [idUsuario, setIdUsuario] = useState(null)

    const fetchData = () => {
        setTimeout(() => {
            // Lógica para buscar os dados atualizados
            setIdProfissional(route.params.fkServico)
            listarPerfilProfissional(route.params.fkServico)
            obterDados()
            setRefreshing(false);
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    useEffect(() => {
        setIdProfissional(route.params.fkServico)
        listarPerfilProfissional(route.params.fkServico)
        obterDados()
    }, []);

    const listarPerfilProfissional = (idProfissional) => {
        axios.get(`http://10.0.1.29:3000/ListarPerfilProfissional/${idProfissional}`)
        .then(function (response) {
            setPerfil(response.data.data)
            setServicos(response.data.data.tbl_Servicos)
            setNome(response.data.data.nome)
            setDescricao(response.data.data.descricao)
            setPronomes(response.data.data.pronomes)
        }).catch(function (error) {
            console.log(error)
        })
    }

    const botaoFavoritar = () => {
        if (favoritar) {
            setFavoritar(false),
                console.log('DESfavoritado')
        } else {
            setFavoritar(true)
            console.log('favoritado')
            console.log('Perfil do Profissional: ' + idProfissional)
            console.log('Perfil do Cliente: ' + idUsuario)
            FavoritarPerfil()
        }
    }

    const FavoritarPerfil = () => {
        axios.post('http://10.0.1.29:3000/cadastrarPerfilFavorito',
            {
                FK_Profissionais_Clientes: idProfissional,
                FK_Clientes_Profissionais: idUsuario
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setIdUsuario(idUsuario);
                console.log("Dados passados para tela: " + JSON.stringify(idUsuario))
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
                <View style={styles.view}>
                    <View style={styles.esquerda}>
                        <Text style={styles.pronome}>{pronomes}</Text>
                        <Text style={styles.nome}>{nome}</Text>
                        <View style={styles.linha} />
                        <Text style={styles.legenda}>{descricao}</Text>
                    </View>
                    <View style={styles.direita}>
                        <ImageBackground style={styles.fotodeperfil} source={require('../../assets/imagem5.png')} >
                            {
                                favoritar == false
                                    ? <TouchableOpacity style={styles.botaofavoritar} onPress={botaoFavoritar}>
                                        <Image style={styles.botaofavoritarimagem} source={require('../../assets/iconsbelezura/botaofavoritar.png')} />
                                    </TouchableOpacity>
                                    : <TouchableOpacity style={styles.botaofavoritar} onPress={botaoFavoritar}>
                                        <Image style={styles.botaofavoritarimagem} source={require('../../assets/iconsbelezura/botaofavoritarselecionado.png')} />
                                    </TouchableOpacity>
                            }
                        </ImageBackground>
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
                    <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
                        <FlatList
                            horizontal={false}
                            data={servicos}
                            numColumns={2}
                            renderItem={({ item }) => <BoxPerfil item={item} />}
                            keyExtractor={item => item.ID}
                            contentContainerStyle={{ flex: 1 }}
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        </View >
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
    botaofavoritar: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    botaofavoritarimagem: {
        width: 50,
        height: 50
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