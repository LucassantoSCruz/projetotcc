import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, RefreshControl } from 'react-native'
import axios from 'axios';
import { ENDERECO_API } from '../../config'

const BoxEndereco = (endereco, selectedItemId) => {
    const [ruaMu, setRuaMu] = useState(null);
    const [estadoMu, setEstadoMu] = useState(null);
    const [cidadeMu, setcidadeMu] = useState(null);
    const [bairroMu, setBairroMu] = useState(null);
    const [numeroMu, setNumeroMu] = useState(null);
    const [complementoMu, setComplementoMu] = useState(null);
    const [infoCep, setInfo] = useState('');
    const [cepEnd, setCepEnd] = useState(null);
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
            latitude: enderecoSelecionado.latitude,
            longitude: enderecoSelecionado.longitude,
            cep: enderecoSelecionado.cep,
            uf: estadoMu,
            localidadeCidade: cidadeMu,
            logradouro: ruaMu,
            bairro: bairroMu,
            numero: numeroMu,
            complemento: complementoMu
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

    if (enderecoSelecionado.ID == endereco.selectedItemId) {
        return (
            <View style={styles.tela}>
                <Text style={styles.titulo2}>
                    Rua
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={enderecoSelecionado.logradouro}
                    multiline={true}
                    onChangeText={ruaMu => {
                        if (ruaMu != null) { setRuaMu(ruaMu) }
                        else { setRuaMu(rua) }
                    }}
                />


                <Text style={styles.titulo2}>
                    Bairro
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={enderecoSelecionado.bairro}
                    multiline={true}
                    onChangeText={bairroMu => {
                        if (bairroMu != null) { setBairroMu(bairroMu) }
                        else { setBairroMu(bairro) }
                    }}
                />


                <Text style={styles.titulo2}>
                    Cidade
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={enderecoSelecionado.localidadeCidade}
                    multiline={true}
                    onChangeText={cidadeMu => {
                        if (cidadeMu != null) { setcidadeMu(cidadeMu) }
                        else { setcidadeMu(cidade) }
                    }}
                />


                <Text style={styles.titulo2}>
                    Estado
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={enderecoSelecionado.uf}
                    multiline={true}
                    onChangeText={estadoMu => {
                        if (estadoMu != null) { setEstadoMu(estadoMu) }
                        else { setEstadoMu(estado) }
                    }}
                />


                <Text style={styles.titulo2}>
                    numero
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={enderecoSelecionado.numero}
                    multiline={true}
                    onChangeText={numeroMu => {
                        if (numeroMu != null) { setNumeroMu(numeroMu) }
                        else { setNumeroMu(numero) }
                    }}
                />


                <Text style={styles.titulo2}>
                    Complemento
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={enderecoSelecionado.complemento}
                    multiline={true}
                    onChangeText={complementoMu => {
                        if (complementoMu != null) { setComplementoMu(complementoMu) }
                        else { setComplementoMu(complemento) }
                    }}
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
        width: '90%',
        alignSelf: 'center'
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