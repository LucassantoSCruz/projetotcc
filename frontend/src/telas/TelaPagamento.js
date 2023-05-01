import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";

const TelaPagamento = () => {

    const [mostraCartao, setMostraCartao] = useState(false)
    const [clicou, setClicou] = useState(0)

    useEffect(() => {
        clicou === 1
            ?
            (
                setMostraCartao(true)
            )
            :
            (
                setMostraCartao(false)
            )
    }, [clicou])


    const FormCartao = () => {
        return (
            <View>
                <Text style={styles.txtcaixa}>Nome Completo</Text>
                <TextInput
                    style={styles.caixa}
                    placeholder="Nome Completo"
                />
                <Text style={styles.txtcaixa}>Número do Cartão</Text>
                <TextInput
                    style={styles.caixa}
                    placeholder="0000 0000 0000 0000"
                />

                <Text style={styles.txtcaixa}>Data de Vencimento</Text>
                <TextInput
                    style={styles.caixa}
                    placeholder="00/00"
                />

                <Text style={styles.txtcaixa}>Cod. Segurança</Text>
                <TextInput
                    style={styles.caixa}
                    placeholder="000"
                />
                <View>
                    <TouchableOpacity style={styles.bntcon}>
                        <Text style={styles.confirmar}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return (
        <ScrollView style={{ backgroundColor: '#f4e8f2' }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.pagamento}>Pagamento</Text>
                </View>

                <View>

                    <TouchableOpacity style={styles.botao} onPress={() => setClicou(2)}>
                        <Image style={styles.imagem} source={require('../../assets/pix.png')} />
                        <Text style={styles.texto}>Pix</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}>
                        <Image style={styles.imagem} source={require('../../assets/dinheiro.png')} />
                        <Text style={styles.texto}>Dinheiro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}>
                        <Image style={styles.imagem} source={require('../../assets/boleto.png')} />
                        <Text style={styles.texto}>Boleto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => setClicou(1)}>
                        <Image style={styles.imagem} source={require('../../assets/cartao.png')} />
                        <Text style={styles.texto}>Cartão</Text>
                    </TouchableOpacity>

                    {
                        mostraCartao === true
                            ?
                            <FormCartao />
                            : <View></View>
                    }

                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 10,
        backgroundColor: '#f4e8f2',
        alignContent: 'center',
        alignItems: 'center'
    },
    pagamento: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30
    },
    botao: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        padding: 10,
        marginBottom: 10
    },
    imagem: {
        width: 50,
        height: 50,
        marginRight: 15
    },
    texto: {
        fontSize: 20,
        fontWeight: '400'
    },
    caixa: {
        width: '95%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    txtcaixa: {
        fontSize: 14,
        textAlign: 'right',
        marginRight: 10,
    },
    bntcon: {
        borderRadius: 10,
        backgroundColor: '#9a6b99',
        width: 330,
        height: 70,
        padding: 5,
        marginTop: 5,
        marginBottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmar: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default TelaPagamento