import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import ImagemPadrao from '../componentes/ImagemPadrao';

const PlaceholderImage = require('../../assets/perfil2.png');

const TelaConfiguracoes = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImagemSelecionada(result.assets[0].uri);
        } else {
            Alert.alert("Atenção", "Você não selecionou nenhuma imagem.");
        }
    };

    return (
        <View style={styles.tela}>
            <ScrollView>
                <Text style={styles.titulodesc}>
                    Nome
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder=''
                    multiline={true}
                />

                <Text style={styles.titulo}>
                    Legenda
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder=''
                    multiline={true}
                />

                <Text style={styles.titulo}>
                    Foto de Perfil
                </Text>
                <View style={styles.campofotodeperfil}>

                    <TouchableOpacity onPress={pickImageAsync} style={styles.botaotrocarfoto}>
                        <Text>Trocar foto de perfil</Text>
                    </TouchableOpacity>

                    <View style={styles.fotodeperfil}>
                        <ImagemPadrao
                            styles={{ padding: 200 }}
                            placeholderImageSource={PlaceholderImage}
                            imagemSelecionada={imagemSelecionada} />
                    </View>

                </View>
                <Text style={styles.titulo}>
                    Sobre - Descrição
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder=''
                    multiline={true}
                />

                <Text style={styles.titulo}>
                    Endereço
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder=''
                    multiline={true}
                />

                <Text style={styles.titulo}>
                    Contato
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder=''
                    multiline={true}
                />

                <Text style={styles.titulo}>
                    Outras Informações
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder=''
                    multiline={true}
                />

                <TouchableOpacity style={styles.btnsalvar}>
                    <Text style={styles.textosalvar}>
                        Salvar
                    </Text>
                </TouchableOpacity>

            </ScrollView>
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
        marginHorizontal: 15
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 165
    },
    botaotrocarfoto: {
        marginBottom: 15,
        borderWidth: 1,
        padding: 15,
        marginLeft: 15,
        marginTop: 15,
        borderRadius: 20,
        height: 50,
        justifyContent: 'center'
    },
    fotodeperfil: {
        flex: 1,
        borderRadius: 100,
        maxHeight: 150,
        maxWidth: 150,
        marginRight: 15,
        marginTop: 15,
    }
})

export default TelaConfiguracoes