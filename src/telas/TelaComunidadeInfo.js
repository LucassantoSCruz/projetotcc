import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const TelaComunidadeInfo = () => {
    return (
        <View style={styles.container}>
            <ScrollView>

                <View>
                    <Image style={styles.img} source={require('../../assets/CasaMariaMaia.jpg')} />
                    <Text style={styles.titulo1}>Bazar Beneficiente Maria Maia</Text>
                    <Text style={styles.descricao}>Um evento totalmente voltado para arrecadação de fundos
                        para a reforma da Casa Maria Maia! Um dia super especial onde
                        teremos diversas atividades, barracas de comidas, serviços, entre outros ...
                        Venha fazer parte!
                    </Text>
                    <Text style={styles.titulo2}>Informações:</Text>
                    <Text style={styles.info}>Data:</Text>
                    <Text style={styles.info2}>DD/MM/AAAA</Text>
                    <Text style={styles.info}>Horário:</Text>
                    <Text style={styles.info2}>A partir das XX:XX horas</Text>
                    <Text style={styles.info}>Endereço:</Text>
                    <Text style={styles.info2}>Rua Eduardo Augusto Mesquita, 357 - Pq. Santa Tereza, Carapicuíba/SP.</Text>
                    <Text style={styles.info}>Telefone:</Text>
                    <Text style={styles.info2}>(**)99999-9999</Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text>
                        Lembrar-me deste evento
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f4e8f2'
    },
    img: {
        height: 200,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
    titulo1: {
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    descricao: {
        marginLeft: 20,
        marginTop: 10
    },
    titulo2: {
        marginLeft: 20,
        marginTop: 20,
        fontWeight: '700',
        fontSize: 18

    },
    info: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600',
    },
    info2: {
        marginLeft: 20,
        marginTop: 5,
        fontSize: 15,
        fontWeight: '400'
    },
    btn: {
        textAlign: 'center',
        marginTop: 30,
        marginLeft: 30,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 0,
        height: 30,
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#dcbadb'
    }


})

export default TelaComunidadeInfo