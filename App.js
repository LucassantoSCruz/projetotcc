import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaSecundaria from './TelaSecundaria';
import TelaPrimaria from './TelaPrimaria';
import { Button } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Stack = createNativeStackNavigator();

function Navegacao (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrimaria">
        <Stack.Screen 
        name="Tela Inicial"
        component={TelaPrimaria}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegacao;