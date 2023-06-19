import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import TelaComunidade from './telas/TelaComunidade'
import TelaAgenda from './telas/TelaAgenda';
import TelaPerfil from './telas/TelaPerfil';
import TelaCriarServico from './telas/TelaCriarServico';
import TelaComunidadeInfo from './telas/TelaComunidadeInfo';
import TelaConfiguracoes from './telas/TelaConfiguracoes';
import TelaChat from './telas/TelaChat';
import TelaServicoProfissional from './telas/TelaServicoPro';
import TelaServicoEditar from './telas/TelaServicoEditar';
import TelaContaProfissional from './telas/TelaContaProfissional'


// Nomes das Telas
const telaComunidade = 'Comunidade';
const telaAgenda = 'Agenda';
const telaPerfil = 'Perfil';

const Tab = createBottomTabNavigator();

const RotasProfissional = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={telaAgenda}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === telaComunidade) {
              iconName = focused ? 'group' : 'group';
            } else if (rn === telaAgenda) {
              iconName = focused ? 'calendar-o' : 'calendar-o';
            } else if (rn === telaPerfil) {
              iconName = focused ? 'user' : 'user';
            }

            return <FontAwesome name={iconName} size={size} color={color} />

          },
          tabBarActiveTintColor: '#9a6b99',
          tabBarInactiveTintColor: 'gray',
        })}>

        <Tab.Screen name={telaPerfil} component={RotaPerfil} options={{ headerTitleAlign: 'center', headerShown: false }} />
        <Tab.Screen name={telaAgenda} component={RotaAgenda} options={{ headerTitleAlign: 'center' }} />
        <Tab.Screen name={telaComunidade} component={RotaComunidade} options={{ headerTitleAlign: 'center', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator();

const RotaPerfil = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={telaPerfil} component={TelaContaProfissional} options={{ headerTitleAlign: 'center', }} />
        <Stack.Screen name='TelaCriarServico' component={TelaCriarServico} options={{ title: 'Criar Serviço', headerTitleAlign: 'center' }} />
        <Stack.Screen name='TelaConfiguracoes' component={TelaConfiguracoes} options={{ title: 'Configurações', headerTitleAlign: 'center' }} />
        <Stack.Screen name='TelaChat' component={TelaChat} options={{ title: 'Chat', headerTitleAlign: 'center' }} />
        <Stack.Screen name='ServicoProfissional' component={TelaServicoProfissional} options={{ title: 'ServiçoProfissional', headerTitleAlign: 'center' }} />
        <Stack.Screen name='ServicoEditar' component={TelaServicoEditar} options={{ title: 'ServiçoEditar', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const RotaComunidade = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={telaComunidade} component={TelaComunidade} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='TelaComunidadeInfo' component={TelaComunidadeInfo} options={{ headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const RotaAgenda = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="TelaAgenda" component={TelaAgenda} options={{ headerTitleAlign: 'center', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RotasProfissional