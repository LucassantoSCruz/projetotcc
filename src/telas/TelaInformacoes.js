import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TelaInformacoes = () => {
    return (
        <View style={styles.tela}>
            <ScrollView>
                <Text style={styles.titulodesc}>
                    Sobre - Descrição
                </Text>
                <Text style={styles.descricao}>
                    Teste
                </Text>
                <Text style={styles.titulo}>
                    Endereço
                </Text>
                <Text style={styles.descricao}>
                    Teste
                </Text>
                <Text style={styles.titulo}>
                    Contato
                </Text>
                <Text style={styles.descricao}>
                    Teste
                </Text>
                <Text style={styles.titulo}>
                    Outras Informações
                </Text>
                <Text style={styles.descricao}>
                    Teste
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
    },
    titulodesc: {
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 15,
        marginTop: 15
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 15
    },
    descricao: {
        fontSize: 18,
        color: 'grey',
        marginHorizontal: 15,
        marginBottom: 15
    }
})

export default TelaInformacoes