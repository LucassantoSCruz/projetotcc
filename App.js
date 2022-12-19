import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaSecundaria from './TelaSecundaria';
import TelaPrimaria from './TelaPrimaria';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

function Navegacao (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrimaria">
        <Stack.Screen name="Tela Primária" component={TelaPrimaria}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegacao;