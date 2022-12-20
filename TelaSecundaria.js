import { StyleSheet, Text, View, Image } from 'react-native';
import BelezuraCard from './Components';

const TelaSecundaria = ({}) => {
  return (
    <View
      style={style.view}>

    <Image
      style={style.image}
      source={require('./assets/img1.png')}/>

    <Text
      style={style.text}>
        Corte Simples
    </Text>
    
    <BelezuraCard>
    </BelezuraCard>

    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff'
  },
  image: {
  flex: 0.4,
  height: 50,
  width: 350
  }
});

export default TelaSecundaria;