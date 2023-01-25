import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import BarCategoria from './componentes/barcategorais';
import BoxPerfil from './componentes/boxperfil';
import PerfisFav from './componentes/perfisfav';
import Carrosel from './componentes/carrosel';
import ImagemSlider from './componentes/imagemslider';
import Gaveta from './componentes/gaveta';
//Esse é um componente de gaveta, vou dar uma olhada nele futuramente

const TelaProfissionais = () => {
    return (
        <View style={{flex: 1}}>

            <BarCategoria/>
                <SafeAreaView style={styles.tela1}>
                    <ScrollView style={styles.tela2}>


                    <ImagemSlider/>



                    <Text style={styles.texto}>Perfis Favoritos</Text>

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



                    <Text style={styles.textorecomendacoes}>Recomendações</Text>

                    <View style={styles.view}>
                        <BoxPerfil/>
                        <BoxPerfil/>
                    </View>
                    <View style={styles.view}>
                        <BoxPerfil/>
                        <BoxPerfil/>
                    </View>
                    <View style={styles.view}>
                        <BoxPerfil/>
                        <BoxPerfil/>
                    </View>
                    <View style={styles.view}>
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
        flex: 1
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    textodestaque: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    textorecomendacoes: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    view: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    view2: {
        flexDirection: 'row'
    }
})

export default TelaProfissionais