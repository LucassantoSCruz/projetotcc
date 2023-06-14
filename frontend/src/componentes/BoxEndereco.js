import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, RefreshControl } from 'react-native'
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadrao from './ImagemPadrao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { placeholder } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const BoxEndereco = (item) => {
    // const [cepEnd, setCepEnd] = useState(null);
    // const [infoCep, setInfo] = useState('');
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    // const [numero, setNumero] = useState(null);
    // const [complemento, setComplemento] = useState(null);
    // const route = useRoute();

    const getCep = async () => {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cepEnd}/json`);
        setInfo(data);
    }

    console.log(item)
    return (
        <View>
            <Text style={styles.titulo}>
                Endereço
            </Text>

            <View style={styles.alinhamentocep}>
                <TextInput
                    style={styles.campocep}
                    placeholder={'item.item.item.cep'}
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
                Estado
            </Text>
            <TextInput
                style={styles.descricao}
                placeholder={'estado'}
                multiline={true}
            // onChangeText={estadoMu => setEstadoMu(estadoMu)}
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
                Rua
            </Text>
            <TextInput
                style={styles.descricao}
                placeholder={'rua'}
                multiline={true}
            //onChangeText={ruaMu => setRuaMu(ruaMu)}
            />

            <Text style={styles.titulo2}>
                numero
            </Text>
            <TextInput
                style={styles.descricao}
                placeholder={'numero'}
                multiline={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
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
        flexDirection: 'row'
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
})

export default BoxEndereco