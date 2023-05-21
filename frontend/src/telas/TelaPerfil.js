import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import BoxPerfil from '../componentes/BoxPerfil';

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import CaixaServico from '../componentes/CaixaServico';

const TelaPerfil = ({ navigation }) => {

    const [CPF_CNPJ, setCPF_CNPJ] = useState(null)

    const [idUsuario, setIdUsuario] = useState(null)

    const [tipoconta, setTipoconta] = useState('')

    const [dadosPerfil, setDadosPerfil] = useState(null)

    const [nome, setNome] = useState(null)

    const [Descricao, setDescricao] = useState(null)

    const [pronomes, setPronomes] = useState(null)

    const [servicos, setServicos] = useState([])

    useEffect(() => {
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
        obterDados();
      }, []);

      useEffect(() => {

        if(tipoconta == 'Profissional') {
            axios.get(`http://192.168.1.6:3000/ListarProfissionalCNPJ/${idUsuario}`)
            .then(function (response) {

                console.log(response.data.data)

                setNome(response.data.data.nomeFantasia)
                console.log("Nome do Usuário " + nome)

                setDescricao(response.data.data.descricao)
                console.log("Legenda do Usuário " + Descricao)

                setPronomes(response.data.data.pronomes)
                console.log("Pronome do Usuário " + pronomes)

            })
            .catch(function (error) {
                console.log(error);
            })

            axios.get(`http://192.168.1.6:3000/listarServicosFK/${idUsuario}`)
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
    }, []);

    return (
        <View>
            <ScrollView>
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
                        renderItem={({ item }) => <CaixaServico item={(item)} />}
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
    }
});

export default TelaPerfil