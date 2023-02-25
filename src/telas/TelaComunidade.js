import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BarCategoria from '../componentes/BarCategoria';

const TelaComunidade = () => {
    return (
        <View style={{ flex: 1}}>
            <BarCategoria/>
            <View style={styles.view}>
                <Text>Tela Comunidade</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TelaComunidade;