import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import BelezuraCard from './Components';

const TelaSecundaria = ({}) => {
  return (
    <View
      style={style.view}>
      
    <TouchableOpacity>
      <Image
      style={style.image2}
      source={require('./assets/lupa1.png')}
      />
    </TouchableOpacity>

    <Image
      style={style.image}
      source={require('./assets/img1.png')}/>

    <Text
      style={style.text2}>
        Cabeleireiro 
    </Text>

    <Text
      style={style.text2}>
        Manicure 
    </Text>

    <Text
      style={style.text2}>
        Maquiador 
    </Text>

    <BelezuraCard/>

    <BelezuraCard/>

    <BelezuraCard/>

    <BelezuraCard/>

    </View>
  );
}

const style = StyleSheet.create({
  view: {
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    padding: 10,
    flexDirection: "row"
  },
  image: {
    flex: 0.4,
    height: 50,
    width: 350, 
  },
  image2: {
    height: 20,
    width: 20 
    },
  text2: {
    color: '#ffffff',
    flexDirection: "row",
    padding: 5
    }
});

export default TelaSecundaria;