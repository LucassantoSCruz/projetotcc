import { ENDERECO_API } from '../../config';
import { StyleSheet, Text, View, Image, ScrollView, RefreshControl, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState, useReducer } from 'react';
import { BottomSheet } from 'react-native-btr';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaskInput, { Masks, createNumberMask } from 'react-native-mask-input';
import { MaskedTextInput } from 'react-native-mask-text';  // esse é outro componente para máscarar o valor inserido, vou conferir ainda qual dos dois compensa mais usar
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaServico = ({navigation}) => {

    const route = useRoute()   
    const [refreshing, setRefreshing] = useState(false);
    const [idServico, setIdServico] = useState(null)
    const [titulo, setTitulo] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [preco, setPreco] = useState(null)
    const [precoFormatado, setPrecoFormatado] = useState(null);
    const [visivel, setVisivel] = useState(false);
    // Campos para inserção do agendamento
    const [FK_Clientes_Agenda, setFK_Clientes_Agenda] = useState(null);
    const [FK_Profissionais_Agenda, setFK_Profissionais_Agenda] = useState(null);
    const [FK_Servicos_Agenda, setFK_Servicos_Agenda] = useState(null);
    const [data, setData] = useState('');
    const [horario, setHorario] = useState(null);
    const [agendamento, setAgendamento] = useState(null)
    const [valorTotal, setValorTotal] = useState(null);

    const fetchData = () => {
        setTimeout(() => {
          // Lógica para buscar os dados atualizados
          listarInfoServico(route.params.idServico)
          setRefreshing(false); 
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    useEffect(() => {
        listarInfoServico(route.params.idServico)
        obterDados()
    }, [])

    function clicou() {
        setVisivel((visivel) => !visivel)
    }

    const MascHora = createNumberMask({
        prefix: [''],
        delimitador: '.',
        separador: ',',
        precisão: 4,
    })

    const listarInfoServico = (idServico) => {
        axios.get(`${ENDERECO_API}/listarServicosID/${idServico}`)
        .then(function (response){
            setTitulo(response.data.data.titulo)
            setDescricao(response.data.data.descricao)
            setPreco(response.data.data.preco)
            setPrecoFormatado(preco.replace(".",","))
            setFK_Profissionais_Agenda(response.data.data.FK_Profissionais_Servicos)
            setFK_Servicos_Agenda(response.data.data.ID)
        })
        .catch(function (error){
            console.log(error)
        })
    }

    const enviarAgendamento = () => {
        axios.post(`${ENDERECO_API}/cadastrarAgendamento`, {
            data: agendamento, 
            FK_Servicos_Agenda, 
            FK_Clientes_Agenda, 
            FK_Profissionais_Agenda
        })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            navigation.navigate('TelaPagamento')
        })
        .catch (function (erro) {
            console.log(erro);
        })
    }

    const obterDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('idUsuario');
            if (valor !== null) {
                const idUsuario = JSON.parse(valor);
                setFK_Clientes_Agenda(idUsuario);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
                <View style={styles.container}>
                    <Image style={styles.imagem} source={require('../../assets/imagem1.png')} />
                </View>

                <View>
                    <Text style={styles.titulo1}>
                        {titulo}
                    </Text>
                </View>

                <View style={styles.avaliacao}>
                    <TouchableOpacity>
                        <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')} />
                    </TouchableOpacity>

                    <Text style={styles.textoavalaiacao}>
                        4,5
                    </Text>
                </View>

                <View style={styles.caixa}>
                    <Text style={styles.titulo2}>
                        Descrição
                    </Text>
                    <Text style={styles.texto}>
                        {descricao}
                    </Text>
                </View>

                <View style={styles.valor}>
                    <View>
                        <Text style={styles.preco}>
                            R${precoFormatado}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={clicou}>
                    <Text style={styles.textobtn}>
                        Comprar
                    </Text>
                </TouchableOpacity>

                <BottomSheet
                    visible={visivel}
                    onBackButtonPress={clicou}
                    onBackdropPress={clicou}
                >
                    <View style={styles.campo}>
                        <Text style={styles.campotitulo}>
                            Confirmar Serviço
                        </Text>

                        <View style={styles.campoformacao}>
                            <Text style={styles.campotexto}>
                                Data:
                            </Text>

                            <View style={styles.campoinserir}>
                                <MaskInput
                                    value={data}
                                    onChangeText={setData}
                                    mask={Masks.DATE_DDMMYYYY}
                                    style={styles.campotexto}
                                    keyboardType='numeric'
                                />
                            </View>

                        </View>

                        <View style={styles.campoformacao}>

                            <Text style={styles.campotexto}>
                                Hora:
                            </Text>

                            <View style={styles.campoinserir}>

                            <MaskedTextInput
                                    mask="99:99"
                                    onChangeText={(text, rawText) => {
                                        console.log(text);
                                        setHorario(text)
                                        setAgendamento(data + ' ' + horario)
                                        console.log(agendamento)
                                        // console.log(rawText);
                                    }}
                                    style={styles.campotexto}
                                    placeholder='__:__'
                                    keyboardType='numeric'
                                />

                            </View>

                        </View>

                        <TouchableOpacity style={styles.btnconfirmar} onPress={() => enviarAgendamento()}>
                            <Text style={styles.textobtn}>
                                Contratar
                            </Text>
                        </TouchableOpacity>

                    </View>


                </BottomSheet>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcbadb',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: 250,
        height: 250,
    },
    avaliacao: {
        flexDirection: 'row',
    },
    heart: {
        width: 20,
        height: 20,
        marginTop: 0,
        marginLeft: 15,
    },
    textoavalaiacao: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    caixa: {
        marginBottom: 60
    },
    titulo1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    titulo2: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15
    },
    texto: {
        color: 'grey',
        fontSize: 15,
        marginLeft: 15
    },
    incr: {
        flexDirection: 'row',
        margin: 10
    },
    mais: {
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 100,
        backgroundColor: '#9a6b99'
    },
    cont: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
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
        marginRight: 15
    },
    precototal: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#9a6b99',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
        marginLeft: 15,
        marginRight: 15
    },
    btn: {
        backgroundColor: '#9a6b99',
        padding: 10,
        borderRadius: 100,
        margin: 15
    },
    btnconfirmar: {
        width: '90%',
        backgroundColor: '#9a6b99',
        padding: 10,
        borderRadius: 100,
        margin: 15
    },
    textobtn: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    campo: {
        height: 350,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    campoformacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 7.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    campotitulo: {
        fontSize: 22,
        margin: 7.5,
        fontWeight: 'bold',
        backgroundColor: '#E8D0E8',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 15,
    },
    campotexto: {
        fontSize: 22,
        margin: 7.5,
        fontWeight: 'bold'
    },
    campoinserir: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        fontSize: 22
    }
});

export default TelaServico