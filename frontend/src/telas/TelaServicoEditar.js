import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CurrencyInput from 'react-native-currency-input';
import { ENDERECO_API } from '../../config';
import * as ImagePicker from 'expo-image-picker';
import ImagemPadraoServico from '../componentes/ImagemPadraoServico';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const PlaceholderImage = require('../../assets/imagemInicial.png');

const TelaCriarServico = () => {

    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    const [FK_Profissionais_Servicos, setFK_Profissionais_Servicos] = useState(null)
    const [idServico, setIdServico] = useState(null)

    const [refreshing, setRefreshing] = useState(false);
    
    //RECARREGAR
    const fetchData = () => {
        setTimeout(() => {
          // Lógica para buscar os dados atualizados
  
          setIdServico(route.params.idServico)
          listarInfoServico()
          
          setRefreshing(false); 
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const route = useRoute()

    useEffect(() => {
   
        // console.log('ID do serviço passado para a tela: ' + route.params.idServico)
        setIdServico(route.params.idServico)
        // console.log('ID salvo do serviço: ' + idServico)

        listarInfoServico()

    },)

    // useEffect(() => {
    //     const obterDados = async () => {
    //       try {
    //         const valor = await AsyncStorage.getItem('idUsuario');
    //         if (valor !== null) {
    //           const FK_Profissionais_Servicos = JSON.parse(valor);
    //           setFK_Profissionais_Servicos(FK_Profissionais_Servicos);
            
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     obterDados();
    //   }, []);

    //PEGAR IMAGEM
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            aspect: [3, 2]
        });

        if (!result.canceled) {
            setImagemSelecionada(result.assets[0].uri);
        } else {
            Alert.alert("Atenção", "Você não selecionou nenhuma imagem.");
        }
    };

    //CONFIRMAR SERÇO 
    const ConfirmarServico = () => {
        Alert.alert("Tem certeza que deseja publicar este Serviço?", 'Você pode excluir ele depois', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Serviço Cancelado')
            },
            {
                text: 'Editar',
                onPress: () => alterarServicos()
            },
        ])
    }

    const [preco, setPreco] = useState(null)
    const  [titulo, setTitulo] = useState(null)
    const  [descricao, setDescricao] = useState(null)

    //ROTA DE LISTAGEM
    const listarInfoServico = () => {
        axios.get(`${ENDERECO_API}/listarServicosID/${idServico}`)
        .then(function (response){
            //console.log('Informações do serviço: ' + JSON.stringify(response.data.data))
            setTitulo(response.data.data.titulo)
            setDescricao(response.data.data.descricao)
            setPreco(response.data.data.preco)
            
        })
        .catch(function (error){
            console.log(error)
        })
    }

    const [precoMu, setPrecoMu] = useState(null)
    const  [tituloMu, setTituloMu] = useState(null)
    const  [descricaoMu, setDescricaoMu] = useState(null)


    //ROTA EDITAR SERVICO
    const alterarServicos = () => {
        axios
          .put(`${ENDERECO_API}/alterarServicos/${idServico}`, {
            preco: precoMu,
            titulo: tituloMu,
            descricao: descricaoMu,
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.fundoimagem}>
                    <ImagemPadraoServico
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
                        placeholder= {titulo}
                        maxLength={35}
                        onChangeText={tituloMu => setTituloMu(tituloMu)}
                    />
                </View>

                <View>
                    <Text style={styles.textocampo}>
                        Descrição
                    </Text>
                    <TextInput
                        style={styles.txtdescricao}
                        placeholder={descricao}
                        multiline={true}
                        numberOfLines={6}
                        maxLength={300}
                        onChangeText={descricaoMu => setDescricaoMu(descricaoMu)}

                    />
                </View>

                <View style={styles.Preco}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.preco}>
                            R$
                        </Text>

                        <TextInput
                            style={styles.colocarpreco}
                            placeholder={preco}
                            onChangeText={precoMu => setPrecoMu(precoMu)}
                        />

                    </View>
                </View>

                <TouchableOpacity style={styles.botao} onPress={ConfirmarServico}>
                    <Text style={styles.textobotao}>
                        Editar Serviço
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
        height: 270,
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
    Preco: {
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