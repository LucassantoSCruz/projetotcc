import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

const TelaPrimaria = ({}) => {
    return (
    <View
        style={style.view}>

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
        style={style.text3}>
            O aplicativo que acaba com a sua feiura
    </Text>

    <TouchableOpacity 
        style={style.button}>
            CRIAR UMA CONTA
    </TouchableOpacity>

    <TouchableOpacity 
        style={style.button2}>
            FAZER LOGIN
    </TouchableOpacity>

    <Image
        style={style.decoracao}
        source={require('./assets/Decoracao1.png')}
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
        fontFamily: 'Merriweather',
        fontSize: '30px',
    },
    text2: {
        color: '#9A6B99',
        fontFamily: 'Calibri',
        fontSize: '50px',
        fontWeight: 'bold'
    },
    text3: {
        color: '#9A6B99',
        fontFamily: 'Calibri',
        fontSize: '100',
        marginBottom: 20,
        textDecorationLine: 'line-through' 
    },
    image: {
        height: 200,
        width: 200
    },
    button: {
        alignItems: "center",
        color: '#ffffff',
        backgroundColor: "#9A6B99",
        fontFamily: 'Calibri',
        fontWeight: 'Bold',
        width: 200,
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    button2: {
        alignItems: "center",
        color: '#ffffff',
        backgroundColor: "#D0A3CE",
        fontFamily: 'Calibri',
        fontWeight: 'Bold',
        width: 200,
        padding: 10,
        borderRadius: 20
    },
  });

export default TelaPrimaria;