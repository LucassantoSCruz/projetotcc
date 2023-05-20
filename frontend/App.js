import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telas/TelaInicial';
import TelaLogin from './src/telas/TelaLogin';
import TabNavegacao from './src/Rotas';
import TelaCadastroProfissional from './src/telas/TelaCadastroProfissional';
import TelaCadastroCliente from './src/telas/TelaCadastroCliente';
import Mapa from './src/componentes/Mapa';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicial} options={{headerTitleAlign: 'center', title: 'Início'}}/>
        <Stack.Screen name="Login" component={TelaLogin} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="CadastroProfissional" component={TelaCadastroProfissional} options={{headerTitleAlign: 'center', title: 'Cadastro de Profissionais'}}/>
        <Stack.Screen name="CadastroCliente" component={TelaCadastroCliente} options={{headerTitleAlign: 'center', title: 'Cadastro de Clientes' }}/>
        <Stack.Screen name="Profissionais" component={TabNavegacao} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App