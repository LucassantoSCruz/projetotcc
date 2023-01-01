import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaProfissionais from './TelaProfissionais';
import TelaComunidade from './TelaComunidade'
import TelaAgenda from './TelaAgenda';
import TelaPerfil from './TelaPerfil';

const Tab = createBottomTabNavigator();

const TabNavegacao = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
              screenOptions={() => ({
                tabBarActiveTintColor: '#9a6b99',
                tabBarInactiveTintColor: 'gray',
              })}>
                <Tab.Screen name="Profissionais" component={TelaProfissionais} />
                <Tab.Screen name="Comunidade" component={TelaComunidade} />
                <Tab.Screen name="Perfi" component={TelaPerfil} />
                <Tab.Screen name="Agenda" component={TelaAgenda} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavegacao