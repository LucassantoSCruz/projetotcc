import * as React from 'react';
import { Text, View} from 'react-native';
import BarCategoria from './componentes/barcategorais';

const TelaAgenda = () => {
    return (
        <View style={{ flex: 1}}>
            <BarCategoria/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Tela Agenda</Text>
            </View>
        </View>
    )
}

export default TelaAgenda