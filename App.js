import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaSecundaria from './TelaSecundaria';
import TelaInicial from './TelaInicial';
import MyTabs from './Tab';

const Stack = createNativeStackNavigator(
);

function Navegacao (){
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Tela de Login">

        <Stack.Screen
        name="Tela de Login"
        component={TelaInicial}
        options={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
          },
          headerTitleAlign: 'center'
        }}/>

        <Stack.Screen 
        name="TelaSecundaria"
        component={TelaSecundaria}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegacao;