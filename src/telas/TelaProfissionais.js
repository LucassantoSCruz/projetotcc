import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import BarCategoria from '../componentes/BarCategoria';
import BoxPerfil from '../componentes/BoxPerfil';
import PerfisFav from '../componentes/PerfisFav';
import Carrosel from '../componentes/Carrosel';

const TelaProfissionais = ({navigation}) => {
    return (
        <View style={{flex: 1}}>

            <BarCategoria/>
                <SafeAreaView style={styles.tela1}>
                    <ScrollView style={styles.tela2}>

                    <ScrollView horizontal>
                        <Carrosel/>
                        <Carrosel/>
                        <Carrosel/>
                        <Carrosel/>
                    </ScrollView>

                    <View style={styles.view3}>
                        <Text style={styles.texto}>Perfis Favoritos</Text>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Ver Todos</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view2}>
                            <ScrollView horizontal>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                            </ScrollView>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.texto}>Recomendações</Text>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Ver Todos</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view}>
                        <TouchableOpacity style={styles.boxperfil} onPress={()=>navigation.navigate('PerfilProfissional')}>
                            <BoxPerfil/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxperfil}>
                            <BoxPerfil/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view}>

                        <TouchableOpacity style={styles.boxperfil}>
                            <BoxPerfil/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boxperfil}>
                            <BoxPerfil/>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.view}>

                        <TouchableOpacity style={styles.boxperfil}>
                            <BoxPerfil/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boxperfil}>
                            <BoxPerfil/>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.view}>

                        <TouchableOpacity style={styles.boxperfil}>
                            <BoxPerfil/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boxperfil}>
                            <BoxPerfil/>
                        </TouchableOpacity>
                        
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    tela1: {
        flex: 1,
        alignContent: 'center'
    },
    tela2: {
        flex: 1
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    texto2: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        textDecorationLine: 'underline',
    },
    textodestaque: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    view: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    view2: {
        flexDirection: 'row'
    },
    view3: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    boxperfil: {
        flex: 1,
    }
})

export default TelaProfissionais