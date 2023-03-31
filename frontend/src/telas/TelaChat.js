import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const TelaChat = () => {
    return (
        <View style={{ flex: 1}}>
            <View style={styles.view}>
                <Text>Tela Chat</Text>
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

export default TelaChat