import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RotasCliente from './RotasCliente';
import RotasProfissional from './RotasProfissional';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const [tipoConta, setTipoConta] = useState('');

    useEffect(() => {
        verificarTipoConta();

    }, []);

    const verificarTipoConta = async () => {
        try {
            const tipoContaArmazenado = await AsyncStorage.getItem('tipoConta');
            if (tipoContaArmazenado) {
                setTipoConta(tipoContaArmazenado);
                console.log('Tipo de conta salvo com sucesso!')
                console.log(tipoConta)
            }
        } catch (error) {
            console.error('Erro ao obter tipo de conta do AsyncStorage: ', error);
        }
    };

    return (
        tipoConta === 'Profissional' ? (<RotasProfissional />) : (<RotasCliente />)
    );
};

export default AppNavigator;