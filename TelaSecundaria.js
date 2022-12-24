import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import BelezuraCard from './Components';
import MyTabs from './Tab';

const TelaSecundaria = ({}) => {
  return (
    <View
      style={style.view}>

<ScrollView>

    <BelezuraCard/>

    <BelezuraCard/>

    <MyTabs style={style.tab}/>

    </ScrollView>

    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex:1,
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
    },
  tab : {
    flex:1
  }
});

export default TelaSecundaria;