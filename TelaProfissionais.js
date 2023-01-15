import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import BarCategoria from './componentes/barcategorais';
import BoxPerfil from './componentes/boxperfil';
import PerfisFav from './componentes/perfisfav';
import Carrosel from './componentes/carrosel';
//import ImagemSlider from './componentes/imagemslider';

const TelaProfissionais = () => {
    return (
        <View style={{flex: 1,}}>
            <BarCategoria/>
                <SafeAreaView style={styles.tela1}>
                    <ScrollView style={styles.tela2}>

                        <Text style={styles.textodestaque}>Perfis em Destaque</Text>
                        

                        <Text style={styles.texto}>Perfis Favoritos</Text>
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

                    <Text style={styles.textorecomendacoes}>Recomendações</Text>
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
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    textodestaque: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
    },
    textorecomendacoes: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
    }
})

export default TelaProfissionais