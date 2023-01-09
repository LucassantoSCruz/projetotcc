import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import BarCategoria from './componentes/barcategorais';
import BoxPerfil from './componentes/boxperfil';
import Carrosel from './componentes/carrosel';
import PerfisFav from './componentes/perfisfav'

const TelaProfissionais = () => {
    return (
        <View style={{flex: 1,}}>
            <BarCategoria/>
                <SafeAreaView style={styles.tela1}>
                    <ScrollView style={styles.tela2}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, marginStart: 15, marginTop: 15}}>Perfis em Destaque</Text>
                        <View style={{flexDirection: 'row'}}>
                            <ScrollView horizontal>
                            <Carrosel/>
                            <Carrosel/>
                            <Carrosel/>
                            <Carrosel/>
                            <Carrosel/>
                            <Carrosel/>
                            <Carrosel/>
                            <Carrosel/>
                            <Carrosel/>
                            </ScrollView>
                        </View>
                        <Text style={styles.text}>Perfis Favoritos</Text>
                        <View style={{flexDirection: 'row'}}>
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
                    <Text style={styles.text}>Recomendações</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <BoxPerfil/>
                        <BoxPerfil/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <BoxPerfil/>
                        <BoxPerfil/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <BoxPerfil/>
                        <BoxPerfil/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <BoxPerfil/>
                        <BoxPerfil/>
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
        flex: 1,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15
    }
})

export default TelaProfissionais