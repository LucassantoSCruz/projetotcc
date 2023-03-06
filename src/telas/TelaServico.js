import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const TelaServico = () => {
    return (
        <View style={styles.view}>
            <Text>
                Tela Serviços
            </Text>
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

export default TelaServico