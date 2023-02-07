import * as React from 'react';
import { Text, View } from 'react-native';
import BarCategoria from './componentes/BarCategoria';

const TelaComunidade = () => {
    return (
        <View style={{ flex: 1}}>
            <BarCategoria/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Slider/>
            </View>
        </View>
    )
}

export default TelaComunidade;