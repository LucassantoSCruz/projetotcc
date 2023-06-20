import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RotasCliente from './RotasCliente';
import RotasProfissional from './RotasProfissional';
import { NavigationContainer, useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const route = useRoute()

    console.log(route.params)

    const tipoConta = route.params.tipoconta

    return (
        tipoConta === 'Profissional' ? (<RotasProfissional />) : (<RotasCliente />)
    );
};

export default AppNavigator;