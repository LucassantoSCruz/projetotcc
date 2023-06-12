import { StyleSheet, Text, View, Image, ScrollView, RefreshControl, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, { useEffect, useState, useReducer } from 'react';
import { BottomSheet } from 'react-native-btr';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaskInput, { Masks, createNumberMask } from 'react-native-mask-input';
import { MaskedTextInput } from 'react-native-mask-text';  // esse é outro componente para máscarar o valor inserido, vou conferir ainda qual dos dois compensa mais usar
import axios from 'axios';



const TelaServicoProfissional = ({navigation}) => {




    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setTimeout(() => {
        // Lógica para buscar os dados atualizados
  
          setIdServico(route.params.idServico)
          console.log(idServico)
          listarInfoServico()
          
          setRefreshing(false); 
        }, 2000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const route = useRoute()

    const [idServico, setIdServico] = useState(null)
    const [titulo, setTitulo] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [preco, setPreco] = useState(null)

  
    useEffect(() => {
   
        // console.log('ID do serviço passado para a tela: ' + route.params.idServico)
        setIdServico(route.params.idServico)
        console.log('ID salvo do serviço: ' + idServico)

        listarInfoServico()

    },[])

   

    const [visivel, setVisivel] = useState(false);

    function clicou() {
        setVisivel((visivel) => !visivel)
    }

    const ConfirmarServico = () => {
        Alert.alert("Tem certeza que deseja excluir este Serviço?", "O serviço será excluido!" ,[  
            {
                text: 'Cancelar',
                onPress: () => console.log('Serviço Cancelado')
            },
            {
                text: 'Excluir',
                onPress: () => excluirServicos()
            },
        ])
    }
    


    //ROTA EXCLUIR SERVICO
    const excluirServicos = () => {

        // console.log(`http://192.168.15.6:3000/excluirServicos/${idServico}`)

    axios.delete(`http://192.168.15.6:3000/excluirServicos/${idServico}`)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error, "erro ao excluir");
        }); 
    }


    //LISTAR SERVIÇO
    const listarInfoServico = () => {
        axios.get(`http://192.168.15.6:3000/listarServicosID/${idServico}`)
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

                    <Text style={styles.precototal}>
                        R${preco}
                    </Text>
                </View>



                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ServicoEditar', {idServico})}>
                    <Text style={styles.textobtn}>
                        Editar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn1} onPress={ConfirmarServico}>
                    <Text style={styles.textobtn}>
                        Excluir
                    </Text>
                </TouchableOpacity>

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
        backgroundColor: '#8fbc8f',
        padding: 10,
        borderRadius: 50,
        margin: 5
    },
    btn1: {
        backgroundColor: '#cd5c5c',
        padding: 10,
        borderRadius: 50,
        margin: 5
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

export default TelaServicoProfissional