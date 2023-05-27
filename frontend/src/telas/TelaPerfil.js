import React, { useEffect, useState } from 'react';
import { Text, View, Image, RefreshControl, StyleSheet, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import BoxPerfil from '../componentes/BoxPerfil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CaixaServico from '../componentes/CaixaServico';
import { useNavigation } from '@react-navigation/native';

const TelaPerfil = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setTimeout(() => {
            // Lógica para buscar os dados atualizados
            obterDados();
            listarDadosPerfil();

            setRefreshing(false);
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const [CPF_CNPJ, setCPF_CNPJ] = useState(null)
    const [idUsuario, setIdUsuario] = useState(null)
    const [tipoconta, setTipoconta] = useState('')
    const [dadosPerfil, setDadosPerfil] = useState(null)
    const [nome, setNome] = useState(null)
    const [Descricao, setDescricao] = useState(null)
    const [pronomes, setPronomes] = useState(null)
    const [servicos, setServicos] = useState([])

    useEffect(() => {
        obterDados();
        listarDadosPerfil();
    }, []);

    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setIdUsuario(idUsuario);
                console.log("Dados passados para tela de perfil: " + idUsuario)
            }
        } catch (error) {
            console.error(error);
        }
        try {
            const valor = await AsyncStorage.getItem('tipoconta');
            if (valor !== null) {
                const tipoconta = JSON.parse(valor);
                setTipoconta(tipoconta);
                console.log("Tipo de conta: " + JSON.stringify(tipoconta))
            }
        } catch (error) {
            console.error(error);
        }
    };

    const listarDadosPerfil = () => {
        if (tipoconta == 'Profissional') {
            axios.get(`http://192.168.10.242:3000/ListarProfissionalCNPJ/${idUsuario}`)
                .then(function (response) {

                    console.log(response.data.data)
                    setNome(response.data.data.nomeFantasia)
                    setDescricao(response.data.data.descricao)
                    setPronomes(response.data.data.pronomes)

                })
                .catch(function (error) {
                    console.log(error);
                })

            axios.get(`http://192.168.10.242:3000/listarServicosFK/${idUsuario}`)
                .then(function (response) {
                    setServicos(response.data.data)
                    console.log(servicos)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        else {
            console.log('Não é possível ver os serviços de uma conta cliente')

        }
    }


    return (
        <View>
            {
                tipoconta == "Profissional"
                    ? <TelaPerfilP /> : <TelaPerfilC />
            }
        </View>
    )

};

const TelaPerfilP = () => {

    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setTimeout(() => {
            // Lógica para buscar os dados atualizados
            obterDados();
            listarDadosPerfil();

            setRefreshing(false);
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const [CPF_CNPJ, setCPF_CNPJ] = useState(null)
    const [idUsuario, setIdUsuario] = useState(null)
    const [tipoconta, setTipoconta] = useState('')
    const [dadosPerfil, setDadosPerfil] = useState(null)
    const [nome, setNome] = useState(null)
    const [Descricao, setDescricao] = useState(null)
    const [pronomes, setPronomes] = useState(null)
    const [servicos, setServicos] = useState([])

    useEffect(() => {
        obterDados();
        listarDadosPerfil();
    }, []);

    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setIdUsuario(idUsuario);
                console.log("Dados passados para tela de perfil: " + idUsuario)
            }
        } catch (error) {
            console.error(error);
        }
        try {
            const valor = await AsyncStorage.getItem('tipoconta');
            if (valor !== null) {
                const tipoconta = JSON.parse(valor);
                setTipoconta(tipoconta);
                console.log("Tipo de conta: " + JSON.stringify(tipoconta))
            }
        } catch (error) {
            console.error(error);
        }
    };

    const listarDadosPerfil = () => {
        if (tipoconta == 'Profissional') {
            axios.get(`http://192.168.10.242:3000/ListarProfissionalCNPJ/${idUsuario}`)
                .then(function (response) {

                    console.log(response.data.data)
                    setNome(response.data.data.nomeFantasia)
                    setDescricao(response.data.data.descricao)
                    setPronomes(response.data.data.pronomes)

                })
                .catch(function (error) {
                    console.log(error);
                })

            axios.get(`http://192.168.10.242:3000/listarServicosFK/${idUsuario}`)
                .then(function (response) {
                    setServicos(response.data.data)
                    console.log(servicos)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        else {
            console.log('Não é possível ver os serviços de uma conta cliente')

        }
    }

    const navigation = useNavigation();

    return (
        <View>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
                <View style={styles.view}>
                    <View style={styles.esquerda}>
                        <Text style={styles.pronome}>{pronomes}</Text>
                        <Text style={styles.nome}>{nome}</Text>
                        <View style={styles.linha} />
                        <Text style={styles.legenda}>{Descricao}</Text>
                    </View>
                    <View style={styles.direita}>
                        <Image style={styles.fotodeperfil} source={require('../../assets/imagem5.png')} />
                    </View>
                </View>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao1}>
                        <Text style={styles.texto} onPress={() => navigation.navigate('TelaConfiguracoes')}>CONFIGURAÇÕES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('TelaChat')}>
                        <Text style={styles.texto}>CHAT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao3} onPress={() => navigation.navigate('TelaCriarServico')}>
                        <Text style={styles.texto}>NOVO</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.view2}>
                    <BoxPerfil />
                    <BoxPerfil />
                </View> */}
                <View style={styles.view2}>
                    <FlatList
                        horizontal={true}
                        data={servicos}
                        renderItem={({ item }) => <BoxPerfil item={(item)} />}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const TelaPerfilC = () => {

    const [idUsuario, setIdUsuario] = useState(null)

    const [nomeCliente, setNomeCliente] = useState(null)
    const [pronomesCliente, setPronomesCliente] = useState(null)

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {

            obterDados();
            listarDadosPerfilCliente();

            setRefreshing(false);
        }, 2000);
    }

    useEffect(() => {
        obterDados();
        listarDadosPerfilCliente();
    }, []);

    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setIdUsuario(idUsuario);
                console.log("Dados passados para tela de perfil: " + idUsuario)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const listarDadosPerfilCliente = () => {
        axios.get(`http://192.168.10.242:3000/listarClienteCPF/${idUsuario}`)
            .then(function (response) {

                console.log(response.data.data)

                setNomeCliente(response.data.data.nome)
                setPronomesCliente(response.data.data.pronomes)

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <View>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.Perfilview}>
                    <View style={styles.Perfilesquerda}>
                        <Text style={styles.Perfilpronome}>{pronomesCliente}</Text>
                        <Text style={styles.Perfilnome}>{nomeCliente}</Text>
                        <View style={styles.Perfillinha} />
                    </View>


                    <View style={styles.Perfildireita}>
                        <Image style={styles.fotodeperfil} source={require('../../assets/Perfil.png')} />
                    </View>
                </View>

                <TouchableOpacity style={styles.Perfilselecao}>
                    <Text style={styles.Perfilopcoes}>Minhas Informações</Text>
                    <Image style={styles.Perfilseta} source={require('../../assets/Seta.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Perfilselecao}>
                    <Text style={styles.Perfilopcoes}>Perfis Favoritos</Text>
                    <Image style={styles.Perfilseta} source={require('../../assets/Seta.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Perfilselecao}>
                    <Text style={styles.Perfilopcoes}>Configurações</Text>
                    <Image style={styles.Perfilseta} source={require('../../assets/Seta.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Perfilselecao}>
                    <Text style={styles.Perfilopcoes}>Sair do Aplicativo</Text>
                    <Image style={styles.Perfilseta} source={require('../../assets/Seta.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>

    )
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
        flex: 2,
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
    Perfilview: {
        flexDirection: 'row',
        marginTop: 15,
    },
    Perfilesquerda: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Perfildireita: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Perfilcontainer: {
        flex: 1,
        backgroundColor: '#f4e8f2',
    },
    Perfiltitulo: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 30
    },
    Perfilcampo: {
        flexDirection: 'row',
    },
    Perfilfotodeperfil: {
        width: 100,
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100,
        marginLeft: 20,
    },
    Perfilopcoes: {
        fontSize: 22,
    },
    Perfilseta: {
        width: 30,
        height: 30,
    },
    Perfilpronome: {
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
    Perfilnome: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    Perfillinha: {
        backgroundColor: 'black',
        marginBottom: 10,
        width: '85%',
        height: 2
    },
    Perfilselecao: {
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
});

export default TelaPerfil