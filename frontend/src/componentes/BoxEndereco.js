import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, RefreshControl } from 'react-native'
import axios from 'axios';
import { ENDERECO_API } from '../../config'

const BoxEndereco = (endereco, selectedItemId) => {
    const [ruaMu, setRuaMu] = useState(null)
    const [estadoMu, setEstadoMu] = useState(null)
    const [cidadeMu, setcidadeMu] = useState(null)
    const [numeroMu, setNumeroMu] = useState(null)
    const [infoCep, setInfo] = useState('');
    const [cepEnd, setCepEnd] = useState(null);

    const getCep = async () => {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cepEnd}/json`);
        setInfo(data);
    }

    const enderecoSelecionado = (endereco.endereco)
    const rua = enderecoSelecionado.logradouro
    const estado = enderecoSelecionado.uf
    const cidade = enderecoSelecionado.localidadeCidade
    const bairro = enderecoSelecionado.bairro
    const numero = enderecoSelecionado.numero
    const complemento = enderecoSelecionado.complemento
    const cep = enderecoSelecionado.cep
    console.log(enderecoSelecionado)
    console.log(endereco.selectedItemId)

    const alterarEndereco = () => {
        axios.put(`${ENDERECO_API}/alterarEndereco/${enderecoSelecionado.ID}`, {
            logradouro: ruaMu,
            uf: estadoMu,
            localidadeCidade: cidadeMu,
            numero: numeroMu
        })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const confirmarEdicao = () => {
        Alert.alert("Tem certeza que deseja alterar este Endereço?", 'As informações serão alteradas', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Configuração Cancelado')
            },
            {
                text: 'Editar',
                onPress: () => alterarEndereco()
            },
        ])
    }

    const buscarCoordenadas = () => {

        const formatarEndereco = (bairro, numero, logradouro, localidade, uf) => {
            const endereco = bairro + ' ' + numero + ', ' + logradouro + ', ' + localidade + ' ' + uf + ', Brazil'
            //console.log(endereco)
            return endereco;
        }

        const enderecoCompleto = formatarEndereco(infoCep.bairro, numero, infoCep.logradouro, infoCep.localidade, infoCep.uf);

        axios.get(`${ENDERECO_API}/buscarCoordenadas`, {
            params: {
                endereco: enderecoCompleto
            }
        })
            .then((response) => {
                const local = response.data.data.results[0];
                console.log(JSON.stringify(local.geometry))
                const latitude = local.geometry.lat;
                const longitude = local.geometry.lng;
                console.log('Latitude: ', latitude);
                console.log('Longitude: ', longitude);
                //cadastrarEndereco(latitude, longitude)
            })
            .catch((error) => {
                console.error('Erro:', error.message);
            });
    }


    if (enderecoSelecionado.ID == endereco.selectedItemId) {
        return (
            <View style={styles.tela}>
                <View style={styles.alinhamentocep}>
                    <TextInput
                        style={styles.descricao}
                        placeholder={enderecoSelecionado.cep}
                    //value={cepEnd}
                    //onChangeText={text => setCepEnd(text)}
                    />

                    <TouchableOpacity style={styles.botaocep} onPress={getCep}>
                        <Text style={styles.textocep}>
                            Buscar
                        </Text>
                    </TouchableOpacity>
                </View>


                <Text style={styles.titulo2}>
                    Rua
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={'rua'}
                    multiline={true}
                //onChangeText={ruaMu => setRuaMu(ruaMu)}
                />


                <Text style={styles.titulo2}>
                    Bairro
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={'bairro'}
                    multiline={true}
                //onChangeText={ruaMu => setRuaMu(ruaMu)}
                />


                <Text style={styles.titulo2}>
                    Cidade
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={'cidade'}
                    multiline={true}
                //onChangeText={cidadeMu => setcidadeMu(cidadeMu)}
                />


                <Text style={styles.titulo2}>
                    Estado
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={'estado'}
                    multiline={true}
                // onChangeText={estadoMu => setEstadoMu(estadoMu)}
                />


                <Text style={styles.titulo2}>
                    numero
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={'numero'}
                    multiline={true}
                />


                <Text style={styles.titulo2}>
                    Complemento
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={'complemento'}
                    multiline={true}
                // onChangeText={estadoMu => setEstadoMu(estadoMu)}
                />


                <TouchableOpacity style={styles.btnsalvar} onPress={confirmarEdicao}>
                    <Text style={styles.textosalvar}>
                        Alterar Endereço
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return null;
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        width: '90%'
    },
    titulodesc: {
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 15,
        marginTop: 15
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 15,
        margin: 10
    },
    alinhamentocep: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titulo2: {
        fontWeight: 'normal',
        fontSize: 15,
        marginHorizontal: 20
    },
    descricao: {
        fontSize: 18,
        color: 'grey',
        marginHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        padding: 10,
    },
    btnsalvar: {
        padding: 10,
        margin: 15,
        backgroundColor: '#9a6b99',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textosalvar: {
        fontWeight: 'bold',
        color: 'white'
    },
    campofotodeperfil: {
        alignItems: 'center',
    },
    botaotrocarfoto: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 20,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        width: '50%',
        textAlign: 'center'
    },
    botaocep: {
        width: '25%',
        height: 50,
        backgroundColor: '#D0A3CE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: 10,
        marginBottom: 15,
        marginHorizontal: '2%'
    },
    textocep: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default BoxEndereco