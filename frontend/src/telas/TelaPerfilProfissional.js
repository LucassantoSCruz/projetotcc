import React, { useState, useEffect } from 'react';
import { Text, View, Image, RefreshControl, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import BoxPerfil from '../componentes/BoxPerfil';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CaixaServico from '../componentes/CaixaServico';
import BoxPerfilEstatico from '../componentes/BoxPerfilEstatico';

const TelaPerfilProfissional = () => {

    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setTimeout(() => {
          // Lógica para buscar os dados atualizados
            setFkServico(route.params.fkServico)
            salvarDados()
            listarServicosProfissional()
            listarInfoProfissional()
            
            setRefreshing(false); 
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const route = useRoute();
    const [fkServico, setFkServico] = useState(null)
    const [servicos, setServicos] = useState([])
    const navigation = useNavigation()
    const [nome, setNome] = useState(null)
    const [Descricao, setDescricao,] = useState(null)
    const [pronomes, setPronomes] = useState(null)

    useEffect(() => {
        setFkServico(route.params.fkServico)
        console.log('FK salva: ' + fkServico)
        salvarDados()
        listarServicosProfissional()
        listarInfoProfissional()
    }, []);

    const listarInfoProfissional = () =>{
        axios.get(`http://192.168.1.2:3000/ListarProfissionalCNPJ/${fkServico}`)
        .then( function (response) {
            console.log(response.data.data)
            setNome(response.data.data.nomeFantasia)
            setDescricao(response.data.data.descricao)
            setPronomes(response.data.data.pronomes)
        }).catch( function (error){
            console.log(error)
        })
    }

    const listarServicosProfissional = () => {
        axios.get(`http://192.168.1.2:3000/listarServicosFK/${fkServico}`)
        .then(function (response){
            //console.log('Resposta recebida: ' + JSON.stringify(response.data.data))
            setServicos(response.data.data)
            console.log('Serviços recebidos: ' + JSON.stringify(servicos))
        }).catch(function (error){
            console.log(error)
        })
    }

    const salvarDados = async () => {
        try {
            await AsyncStorage.setItem('fkServico', JSON.stringify(route.params.fkServico))
            //console.log('FK salva com sucesso!')
        } catch (error) {
            console.log(error)
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
                        <Text style={styles.legenda}>{Descricao}</Text>
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
                {/* <View style={styles.view2}>

                    <TouchableOpacity style={styles.boxperfil} onPress={() => navigation.navigate('Servico')}>
                        <BoxPerfilEstatico />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxperfil}>
                        <BoxPerfilEstatico />
                    </TouchableOpacity>

                </View> */}
                <View style={styles.view2}>
                <FlatList
                        horizontal={true}
                        data={servicos}
                        renderItem={({ item }) => <BoxPerfil item={item} />}
                        keyExtractor={item => item.ID}
                    />
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