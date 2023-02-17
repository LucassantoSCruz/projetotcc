import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaProfissionais from './TelaProfissionais';
import TelaComunidade from './TelaComunidade'
import TelaAgenda from './TelaAgenda';
import TelaPerfil from './TelaPerfil';
import TelaInicial from './TelaInicial';
import TelaLogin from './TelaLogin';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavegacao = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
        tabBarActiveTintColor: '#9a6b99',
        tabBarInactiveTintColor: 'gray', 
        })}>

          <Tab.Screen
            name="Inicio"
            component={TelaInicial} 
            options={{
              headerTitleAlign: 'center',
              tabBarIcon: () => {
                return <AntDesign name='home' size={24} color="#9a6b99" />
              }
            }}/>

          <Tab.Screen
            name="Login"
            component={TelaLogin} 
            options={{
              headerTitleAlign: 'center',
              tabBarIcon: () => {
                return <AntDesign name='login' size={24} color="#9a6b99" />
              }
            }}/>

          <Tab.Screen
            name="Profissionais"
            component={TelaProfissionais} 
            options={{
              headerTitleAlign: 'center',
              tabBarIcon: () => {
                return <FontAwesome name='star' size={24} color="#9a6b99" />
              }
            }}/>

          <Tab.Screen
            name="Comunidade"
            component={TelaComunidade} 
            options={{
              headerTitleAlign: 'center',
              tabBarIcon: () => {
                return <FontAwesome name='group' size={24} color="#9a6b99" />
              }
            }}/>

            <Tab.Screen
              name="Agenda"
              component={TelaAgenda} 
              options={{
                headerTitleAlign: 'center',
                tabBarIcon: () => {
                  return <FontAwesome name='calendar-o' size={24} color="#9a6b99" />
                }
              }}/>

            <Tab.Screen
              name="Perfil"
              component={TelaPerfil} 
              options={{
                headerTitleAlign: 'center',
                tabBarIcon: () => {
                  return <FontAwesome name='user' size={24} color="#9a6b99" />
                }
              }}/>
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavegacao;
