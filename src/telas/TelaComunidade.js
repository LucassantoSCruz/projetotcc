import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


const TelaComunidade = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>

                <View>
                    <Text style={styles.descricao}>Aqui, na nossa plataforma, contamos com o apoio de vocês,
                        clientes e profissionais, para levar e proporcionar a pessoas
                        mais carentes, um dia especial de serviços de cuidado pessoal. 
                        No nosso mural temos registros de alguns de nossos eventos:

                    </Text>
                </View>

                <View>
                    <Text style={styles.titulo1}>Mural de Eventos</Text>
                </View>

                <View style={styles.mural}>
                </View>

                <View>
                    <Text style={styles.titulo2}>Próximos Eventos:</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.mural2}>
                        <Image style={styles.img} source={require('../../assets/CasaMariaMaia.jpg')} />
                        <Text style={styles.txt}>Bazar Casa Maria Maia</Text>
                        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('TelaComunidadeInfo')}>
                            <Text>
                                + Informações
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mural2}>
                    </View>
                </View>

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
    descricao: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
        fontWeight: '400'
    },
    titulo1: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,

    },
    mural: {
        textAlign: 'center',
        height: 250,
        borderColor: '#9a6b99',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
    titulo2: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 30,
        marginBottom: 10
    },
    mural2: {
        height: 200,
        width: 225,
        borderColor: '#9a6b99',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
    img: {
        height: 80,
        width: 170,
        marginLeft: 25,
        marginTop: 10
    },
    txt: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10
    },
    btn: {
        textAlign: 'center',
        marginTop: 30,
        marginLeft: 40,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        height: 30,
        width: 150,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#dcbadb'
    }
})

export default TelaComunidade;