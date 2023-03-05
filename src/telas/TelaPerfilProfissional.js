import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TelaPerfilProfissional = () => {
    return (
        <View style={{ flex: 1}}>
            <View style={styles.view}>
                <Text>Tela Perfil Profissional</Text>
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


export default TelaPerfilProfissional