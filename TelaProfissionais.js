import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import BarCategoria from './componentes/barcategorais';
import BoxPerfil from './componentes/boxperfil';

const TelaProfissionais = () => {
    return (
        <View style={{flex: 1}}>
            <BarCategoria/>
                <SafeAreaView style={styles.tela1}>
                    <ScrollView style={styles.tela2}>
                    <BoxPerfil/>
                    <BoxPerfil/>
                    <BoxPerfil/>
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
    }
})

export default TelaProfissionais