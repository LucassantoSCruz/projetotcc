import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button, Alert } from 'react-native';
import { BottomSheet } from 'react-native-btr';

const Tela = () => {
    const [visivelPronome, setVisivelPronome] = useState(false);

    function toggle1() {
        setVisivelPronome((visivelPronome) => !visivelPronome);
    }

    const [eleDele, setEleDele] = useState(false);
    const [elaDela, setElaDela] = useState(false);
    const [eluDelu, setEluDelu] = useState(false)
    const [naoDizer, setNaoDizer] = useState(false)

    useEffect(() => {
    if (eleDele == true) {
        console.log('Ele/Dele'),
        setPronomes('Ele/Dele')
    }
    return () => {
        setEleDele(false)
    }
    })

    useEffect(() => {
        if (elaDela == true) {
            console.log('Ela/Dela')
            setPronomes('Ela/Dela')
        }
        return () => {
        setElaDela(false)
        }
    }
    )

    useEffect(() => {
        if (eluDelu == true) {
        console.log('Elu/Delu')
        setPronomes('Elu/Delu')
        }
        return () => {
        setEluDelu(false)
        }
    }
    )

    useEffect(() => {
        if (naoDizer == true) {
        console.log('Prefere não dizer')
        setPronomes('Prefere não dizer')
        }
        return () => {
        setNaoDizer(false)
        }
    }
    )

    const [Pronomes, setPronomes] = useState("")

    return (
        <ScrollView>
            <View>
            <TouchableOpacity style={styles.botaomodal} onPress={toggle1}>
                <View>
                    <Text style={styles.titulomodal}>
                    Pronome: {Pronomes}
                    </Text>
                </View>
            </TouchableOpacity>
            <BottomSheet
                visible={visivelPronome}
                onBackButtonPress={toggle1}
                onBackdropPress={toggle1}
            >
                <View style={styles.fundomodal}>
                    <TouchableOpacity style={styles.selecao} onPress={() => setElaDela(true)}>
                    <Text style={styles.textomodal}>
                        Ela/Dela
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selecao} onPress={() => setEleDele(true)}>
                    <Text style={styles.textomodal}>
                        Ele/Dele
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selecao} onPress={() => setEluDelu(true)}>
                    <Text style={styles.textomodal}>
                        Elu/Delu
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selecao} onPress={() => setNaoDizer(true)}>
                    <Text style={styles.textomodal}>
                        Prefere não dizer
                    </Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4e8f2',
      alignItems: 'center',
      justifyContent: 'center'
    },
    titulo: {
      fontSize: 20,
      margin: 30,
      fontWeight: 'bold',
      color: 'black '
    },
    tituloestabelecimento: {
      fontSize: 20,
      marginBottom: 30,
      marginTop: 15,
      fontWeight: 'bold',
      color: 'black '
    },
    campo: {
      width: '80%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    caixa: {
      width: '80%',
      height: 150,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    txt: {
      marginBottom: 10
    },
    check: {
      flexDirection: 'column'
    },
    descricao: {
      width: '80%',
      padding: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10
    },
    img: {
      width: '80%',
      backgroundColor: '#e8d0e8',
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      padding: 10,
      textAlign: 'center',
      fontSize: 10,
      alignContent: 'center',
      alignItems: 'center'
    },
    titfotodeperfil: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black ',
      marginTop: 15
    },
    fotoperfil: {
      width: 100,
      height: 100,
      borderRadius: 100,
      margin: 15
    },
    botaofoto: {
      width: '80%',
      height: 70,
      backgroundColor: '#D0A3CE',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderRadius: 10,
      marginBottom: 15
    },
    botao: {
      width: '80%',
      height: 70,
      backgroundColor: '#9a6b99',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderRadius: 10,
      marginBottom: 30
    },
    txtbtn: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    },
    botaomodal: {
      justifyContent: 'center',
      width: '80%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white',
    },
    titulomodal: {
      color: '#666666'
    },
    fundomodal: {
      backgroundColor: "#fff",
      height: 250,
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    selecao: {
      width: '90%',
    },
    textomodal: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      backgroundColor: '#d0a3ce',
      color: 'white',
      padding: 10,
      borderRadius: 50
    },
    fotodeperfil: {
      height: 150,
      width: 150
    }
  });