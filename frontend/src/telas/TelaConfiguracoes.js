import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, TouchableOpacity, Alert, RefreshControl } from 'react-native'
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadrao from '../componentes/ImagemPadrao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { placeholder } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import BoxEndereco from '../componentes/BoxEndereco';
import { ENDERECO_API } from '../../config';

const PlaceholderImage = require('../../assets/perfil2.png');

const TelaConfiguracoes = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    const [idUsuario, setIdUsuario] = useState(null)

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            aspect: [1, 1]
        });

        if (!result.canceled) {
            setImagemSelecionada(result.assets[0].uri);
        } else {
            Alert.alert("Atenção", "Você não selecionou nenhuma imagem.");
        }
    };

    const [nome, setNome] = useState(null)
    const [Descricao, setDescricao] = useState(null)
    const [endereco, setEndereco] = useState([])
    const [telefone, setTelefone] = useState(null)
    const [fkEndereco, setfkEndereco] = useState(null)
    const [refreshing, setRefreshing] = useState(false);

    const [rua, setRua] = useState(null)
    const [estado, setEstado] = useState(null)
    const [cidade, setcidade] = useState(null)
    const [numero, setNumero] = useState(null)

    const fetchData = () => {
        setTimeout(() => {
            // Lógica para buscar os dados atualizados
            obterDados();
            listarTodosDados();
            setRefreshing(false);
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    useEffect(() => {
        obterDados();
        listarTodosDados();
    }, []);

    //OBTER DADOS
    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setIdUsuario(idUsuario);
                console.log("Dados passados para tela de configuração: " + idUsuario)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const listarTodosDados = () => {
        axios.get(`${ENDERECO_API}/ListarTodaInfoProfissional/${idUsuario}`)
            .then(function (response) {
                console.log('Info Profissional: ' + JSON.stringify(response.data.data))
                setEndereco(response.data.data.tbl_Enderecos)
                console.log('Info salva: ' + JSON.stringify(endereco))
                setNome(response.data.data.nome)
                setTelefone(response.data.data.telefone)
                setDescricao(response.data.data.descricao)
                setfkEndereco(response.data.data.FK_Profissionais_Enderecos)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    //variaveis rotas de alteração
    const [nomeMu, setNomeMu] = useState(null)
    const [descricaoMu, setDescricaoMu] = useState(null)
    const [telefoneMu, setTelefoneMu] = useState(null)

    //ROTA EDITAR PROFISSIONAL
    const alterarProfissional = () => {

        axios.put(`${ENDERECO_API}/alterarProfissionais/${idUsuario}`, {
            nome: nomeMu,
            descricao: descricaoMu,
            telefone: telefoneMu
        })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //CONFIRMAR SERÇO 
    const confirmarEdicao = () => {
        Alert.alert("Tem certeza que deseja alterar seu Perfil?", 'As informações serão alteradas', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Configuração Cancelado')
            },
            {
                text: 'Editar',
                onPress: () => alterarProfissional()
            },
        ])
    }

    const toggleItem = (itemId) => {
        setEndereco((prevState) =>
            prevState.map((item) =>
                item.ID === itemId ? { ...item, selected: !item.selected } : item
            )
        );
        setSelectedItemId((prevItemId) =>
            prevItemId === itemId ? null : itemId
        );
    };

    const [selectedItemId, setSelectedItemId] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => toggleItem(item.ID)}>
            <View style={{ alignItems: 'center', padding: 10 }}>
                <Text style={styles.titulo}>Endereço</Text>
                {item.selected && <BoxEndereco endereco={item} selectedItemId={selectedItemId}/>}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.tela}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
                <Text style={styles.titulodesc}>
                    Nome
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={nome}
                    multiline={true}
                    onChangeText={nomeMu => setNomeMu(nomeMu)}
                />

                <Text style={styles.titulo}>
                    Legenda
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={Descricao}
                    multiline={true}
                    onChangeText={descricaoMu => setDescricaoMu(descricaoMu)}
                />

                <Text style={styles.titulo}>
                    Foto de Perfil
                </Text>

                <View style={styles.campofotodeperfil}>
                    <ImagemPadrao
                        placeholderImageSource={PlaceholderImage}
                        imagemSelecionada={imagemSelecionada}
                    />
                    <TouchableOpacity onPress={pickImageAsync} style={styles.botaotrocarfoto}>
                        <Text style={{ textAlign: 'center' }}>Trocar foto de perfil</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
                        <FlatList
                            
                            data={endereco}
                            renderItem={renderItem}
                            keyExtractor={item => item.ID}
                            contentContainerStyle={{ flex: 1 }}
                        />
                        
                    </ScrollView>
                </View>

                <Text style={styles.titulo}>
                    Telefone
                </Text>
                <TextInput
                    style={styles.descricao}
                    placeholder={telefone}
                    multiline={true}
                    onChangeText={telefoneMu => setTelefoneMu(telefoneMu)}
                />
                <TouchableOpacity style={styles.btnsalvar} onPress={confirmarEdicao}>
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

export default TelaConfiguracoes