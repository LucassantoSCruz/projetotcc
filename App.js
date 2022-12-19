import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaSecundaria from './TelaSecundaria';
import TelaInicial from './TelaInicial';
import { Button } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Stack = createNativeStackNavigator();

function Navegacao (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Inicial">
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Tela Secundaria" component={TelaSecundaria}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegacao;