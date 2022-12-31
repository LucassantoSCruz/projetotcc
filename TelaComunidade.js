import * as React from 'react';
import { Text, View } from 'react-native';
import BarCategoria from './componentes/barcategorais';

const TelaComunidade = () => {
    return (
        <View style={{ flex: 1}}>
            <BarCategoria/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela Comunidade</Text>
            </View>
        </View>
    )
}

export default TelaComunidade;