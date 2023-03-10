import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useReducer } from 'react';

const initialState = { count: 1, valor: 40, valorTotal: 40 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1,
        valor: state.valor,
        valorTotal: (state.count + 1) * state.valor
    };
    case "decrement":
      return { count: state.count - 1,
        valor: state.valor,
        valorTotal: (state.count - 1) * state.valor
    };    
    case "reset":
      return { count: 1 };
    case "final":
      return { count: action.valorTotal };
    default:
      throw new Error();
  }
}

const TelaServico = () => {
    const [contador, setContador] = useState()
    const [valor, setValor] = useState(40)
    const [botao, setBotao] = useState(false)
    //const [valorTotal, setvalorTotal] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        setValor(state.valorTotal)
    },[state])

    // useEffect(()=>{
    //     if (botao == true) {
    //         incrementar
    //         setBotao(false)
    //     }
    //     else {
    //         decrementar
    //         setBotao(true)
    //     }
    // },[botao])

    function incrementar() {
        setContador(contador + 1)
        //setValor(contador * valor)
    }

    function decrementar() {
        setContador(contador - 1)
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView>
            <View style={styles.container}>
                <Image style={styles.imagem} source={require('../../assets/imagem1.png')}/>
            </View>

            <View>
                <Text style={styles.titulo1}>
                    Corte Simples
                </Text>
            </View>

            <View style={styles.avaliacao}>
                <TouchableOpacity>
                    <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.heart} source={require('../../assets/iconsbelezura/coracao3.png')}/>
                </TouchableOpacity>

                <Text>
                    4,5
                </Text>
            </View>

        <View style={styles.caixa}>
            <Text style={styles.titulo2}>
                Descri????o
            </Text>
            <Text style={styles.texto}>
                Um corte simples e acabou minha criatividade!
            </Text>
        </View>

        <View style={styles.incr}>

            <TouchableOpacity onPress={() => { dispatch({ type: "decrement" }); console.log(state.count); console.log(state.valorTotal)}}>
                <Image style={styles.mais} source={require('../../assets/botaomenos.png')}/>    
            </TouchableOpacity>

            <Text style={styles.cont}>
                {state.count}
            </Text>

            <TouchableOpacity onPress={() => { dispatch({ type: "increment" }); console.log(state.count); console.log(state.valorTotal)}}>         
                <Image style={styles.mais} source={require('../../assets/botaomais.png')}/>
            </TouchableOpacity>

        </View>

        <View style={styles.valor}>
            <View>
                <Text style={styles.preco}>
                    R${state.valor},00
                </Text>
            </View>

            <View>
                <Text style={styles.precototal}>
                    R${state.valorTotal},00
                </Text>
            </View>
        </View>

        <TouchableOpacity style={styles.btn}>
            <Text style={styles.textobtn}>            
                Comprar
            </Text>
        </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#dcbadb',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: 250,
        height: 250,
    },
    avaliacao: {
        flexDirection:'row',
    },
    heart: {
        width: 20,
        height: 20,
        marginTop: 0,
        marginLeft: 15,
    },
    caixa: {
        marginBottom: 60
    },
    titulo1: {
        fontSize: 30,
        fontWeight:'bold',
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
        backgroundColor:'#9a6b99'
    },
    cont: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    }, 
    valor: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    preco: {
        fontSize: 30,
        fontWeight:'bold',
        color: '#9a6b99',
        padding: 5,
        marginLeft: 15,
        marginRight: 15
    },
    precototal: {
        fontSize: 30,
        fontWeight:'bold',
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
    textobtn: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});

export default TelaServico