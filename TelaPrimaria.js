import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

const TelaPrimaria = ({}) => {
    return (
    <View
        style={style.view}>

    <Image
        style={style.decoracao2}
        source={require('./assets/decoracao1.png')}
        resizeMode='cover'>
    </Image>

    <Text
        style={style.text}>
            Bem Vindo ao
    </Text>

    <Text
        style={style.text2}>
            BELEZURA
    </Text>

    <Image
        style={style.image}
        source={require('./assets/LogoBelezura.png')}
        resizeMode='contain'/>

    <Text
        adjustsFontSizeToFit style={style.text3}>
            O aplicativo que acaba com a sua feiura
    </Text>

    <TouchableOpacity 
        style={style.button}>
            <Text
                style={style.textbutton}>
                CRIAR UMA CONTA
            </Text>
    </TouchableOpacity>

    <TouchableOpacity 
        style={style.button2}>
            <Text
                style={style.textbutton}>
                FAZER LOGIN
            </Text>
    </TouchableOpacity>

    <Image
        style={style.decoracao}
        source={require('./assets/decoracao1.png')}
        resizeMode='cover'>
    </Image>

    </View>
    );
  }
  
  const style = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#9A6B99',
        fontSize: 30,
    },
    text2: {
        color: '#9A6B99',
        fontSize: 60,
        fontWeight: 'bold'
    },
    text3: {
        color: '#9A6B99',
        fontSize: 20,
        marginBottom: 20,
        textDecorationLine: 'line-through' 
    },
    image: {
        height: 270,
        width: 270
    },
    button: {
        alignItems: "center",
        backgroundColor: "#9A6B99",
        width: 200,
        padding: 10,
        marginTop: 50,
        borderRadius: 20
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#D0A3CE",
        width: 200,
        padding: 10,
        marginTop: 10,
        borderRadius: 20
    },
    textbutton: {
        color: '#ffffff',
        fontWeight: '500',
    },
    decoracao: {
        flex: 2,
        width: 420,
        height: 50,
    },
    decoracao2: {
        flex: 2,
        width: 420,
        height: 50,
        transform: [{rotate: '180deg'}]
    }
  });

export default TelaPrimaria;