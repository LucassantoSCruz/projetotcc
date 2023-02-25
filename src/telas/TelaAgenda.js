import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const TelaAgenda = () => {
    return (
        <View style={{ flex: 1}}>
            <View style={styles.view}>
                <Text>Tela Agenda</Text>
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
    


export default TelaAgenda