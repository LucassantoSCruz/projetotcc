import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TelaPerfil = () => {
    return (
        <View style={{ flex: 1}}>
            <View style={styles.view}>
                <Text>Tela Perfil</Text>
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

export default TelaPerfil