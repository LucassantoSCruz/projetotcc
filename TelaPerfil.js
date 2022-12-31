import * as React from 'react';
import { Text, View, } from 'react-native';
import BarCategoria from './componentes/barcategorais';

const TelaPerfil = () => {
    return (
        <View style={{ flex: 1}}>
            <BarCategoria/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela Perfil</Text>
            </View>
        </View>
    )
}

export default TelaPerfil