import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Telas
import TelaProfissionais from './TelaProfissionais';
import TelaComunidade from './TelaComunidade'
import TelaAgenda from './TelaAgenda';
import TelaPerfil from './TelaPerfil';

// Nomes das Telas
const telaProfissionais = 'Profissionais';
const telaComunidade = 'Comunidade';
const telaAgenda = 'Agenda';
const telaPerfil = 'Perfil';

const Tab = createBottomTabNavigator();

const TabNavegacao = () => {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
        initialRouteName={telaProfissionais}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === telaProfissionais) {
              iconName = focused ? 'star' : 'star';
            } else if (rn === telaComunidade) {
              iconName = focused ? 'group' : 'group';
            } else if (rn === telaAgenda) {
              iconName = focused ? 'calendar-o' : 'calendar-o';
            } else if (rn === telaPerfil) {
              iconName = focused ? 'user' : 'user';
            } 

            return <FontAwesome name={iconName} size={size} color={color}/>

          },
          tabBarActiveTintColor: '#9a6b99',
          tabBarInactiveTintColor: 'gray', 
        })}>
          
          <Tab.Screen name={telaProfissionais} component={TelaProfissionais} options={{headerTitleAlign: 'center'}}/>
          <Tab.Screen name={telaComunidade} component={TelaComunidade} options={{headerTitleAlign: 'center'}}/>
          <Tab.Screen name={telaAgenda} component={TelaAgenda} options={{headerTitleAlign: 'center'}}/>
          <Tab.Screen name={telaPerfil} component={TelaPerfil} options={{headerTitleAlign: 'center'}}/>
                  
          </Tab.Navigator>
        </NavigationContainer>
      )
  }

export default TabNavegacao