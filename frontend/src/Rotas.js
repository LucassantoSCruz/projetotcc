import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import TelaProfissionais from './telas/TelaProfissionais';
import TelaComunidade from './telas/TelaComunidade'
import TelaAgenda from './telas/TelaAgenda';
import TelaPerfil from './telas/TelaPerfil';
import TelaPerfilProfissional from './telas/TelaPerfilProfissional';
import TelaServico from './telas/TelaServico';
import TelaCriarServico from './telas/TelaCriarServico';
import TelaComunidadeInfo from './telas/TelaComunidadeInfo';
import TelaInformacoes from './telas/TelaInformacoes';
import TelaConfiguracoes from './telas/TelaConfiguracoes';
import TelaChat from './telas/TelaChat';
import TelaPagamento from './telas/TelaPagamento';
import TelaPerfisFavoritados from './telas/TelaPerfisFavoritos';

// Nomes das Telas
const telaProfissionais = 'Profissionais';
const telaComunidade = 'Comunidade';
const telaAgenda = 'Agenda';
const telaPerfil = 'Perfil';

const Tab = createBottomTabNavigator();

const Rotas = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={telaProfissionais}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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

            return <FontAwesome name={iconName} size={size} color={color} />

          },
          tabBarActiveTintColor: '#9a6b99',
          tabBarInactiveTintColor: 'gray',
        })}>

        <Tab.Screen name={telaProfissionais} component={RotaProfissional} options={{ headerTitleAlign: 'center', headerShown: false }} />
        <Tab.Screen name={telaComunidade} component={RotaComunidade} options={{ headerTitleAlign: 'center', headerShown: false }} />
        <Tab.Screen name={telaAgenda} component={RotaAgenda} options={{ headerTitleAlign: 'center' }} />
        <Tab.Screen name={telaPerfil} component={RotaPerfil} options={{ headerTitleAlign: 'center', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator();

const RotaProfissional = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={telaProfissionais} component={TelaProfissionais} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='PerfilProfissional' component={TelaPerfilProfissional} options={{ title: 'Perfil Profissional', headerTitleAlign: 'center' }} />
        <Stack.Screen name='Servico' component={TelaServico} options={{ title: 'Serviço', headerTitleAlign: 'center' }} />
        <Stack.Screen name='TelaPagamento' component={TelaPagamento}  options={{ title: 'Pagamento', headerTitleAlign: 'center' }}/>
        <Stack.Screen name='TelaInformacoes' component={TelaInformacoes} options={{ title: 'Informações', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const RotaPerfil = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={telaPerfil} component={TelaPerfil} options={{ headerTitleAlign: 'center', }} />
        <Stack.Screen name='TelaCriarServico' component={TelaCriarServico} options={{ title: 'Criar Serviço', headerTitleAlign: 'center' }} />
        <Stack.Screen name='TelaConfiguracoes' component={TelaConfiguracoes} options={{ title: 'Configuracoes', headerTitleAlign: 'center' }} />
        <Stack.Screen name='TelaChat' component={TelaChat} options={{ title: 'Chat', headerTitleAlign: 'center' }} />
        <Stack.Screen name='TelaPerfisFavoritados' component={TelaPerfisFavoritados} options={{ title: 'Perfis Favoritos', headerTitleAlign: 'center' }} />
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

export default Rotas