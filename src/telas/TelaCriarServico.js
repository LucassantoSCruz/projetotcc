import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ImagemPadrao from '../componentes/ImagemPadrao';

const PlaceholderImage = require('../../assets/imagemInicial.png');

const TelaCriarServico = () => {
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

    const ConfirmarServico = () => {
        Alert.alert("Tem certeza que deseja publicar este Serviço?", 'Você pode excluir ele depois', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Serviço Cancelado')
            },
            {
                text: 'Publicar',
                onPress: () => console.log('Publicado')
            },
        ])
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.fundoimagem}>
                    <ImagemPadrao
                        placeholderImageSource={PlaceholderImage}
                        imagemSelecionada={imagemSelecionada} />
                    <TouchableOpacity style={styles.botaoimagem} onPress={pickImageAsync}>
                        <Text>
                            Trocar/Imagem
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.textonome}>
                        Nome do Serviço
                    </Text>
                    <TextInput style={styles.nomeservico}
                        placeholder='Digite o nome do serviço'
                        maxLength={35}
                    />
                </View>

                <View>
                    <Text style={styles.textocampo}>
                        Descrição
                    </Text>
                    <TextInput
                        style={styles.txtdescricao}
                        placeholder='Coloque uma descrição do serviço'
                        multiline={true}
                        numberOfLines={6}
                        maxLength={300}
                    />
                </View>

                <View style={styles.valor}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.preco}>
                            R$
                        </Text>
                        <TextInput
                            style={styles.colocarpreco}
                            placeholder='00,00'
                            maxLength={6}
                            keyboardType='numeric'
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.botao} onPress={ConfirmarServico}>
                    <Text style={styles.textobotao}>
                        Publicar Serviço
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    fundoimagem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dcbadb',
        height: 250,
    },
    botaoimagem: {
        marginHorizontal: 15,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'black',
        padding: 20,
        borderRadius: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity: '50%',
        position: 'absolute',
        opacity: 0.75
    },
    nomeservico: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 15,
        padding: 15,
        borderRadius: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textonome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
    },
    textocampo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
    txtdescricao: {
        color: 'grey',
        fontSize: 15,
        margin: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        padding: 15
    },
    valor: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    preco: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#9a6b99',
        padding: 5,
        marginLeft: 15,
    },
    colocarpreco: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#9a6b99',
        padding: 5,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#9a6b99',
        borderRadius: 20
    },
    botao: {
        backgroundColor: '#9a6b99',
        padding: 10,
        borderRadius: 100,
        margin: 15
    },
    textobotao: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});

export default TelaCriarServico