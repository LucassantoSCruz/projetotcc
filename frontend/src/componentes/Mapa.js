import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Callout } from 'react-native-maps'
import MarcadorPessoal from './EstiloMarcadorMapa';
import CustomCallout from './Callout'
import axios from 'axios';

const MapaExpo = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marcadores, setMarcadores] = useState([]);

    const requestResponse = () => {
        axios.get('http://192.168.1.10:3000/listarEndereco')
            .then(function (response) {
                setMarcadores(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar o local foi negada.');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location.coords)
        })();
        requestResponse();
        console.log(marcadores.data)
    }, []);

    let text = 'Buscando localização..';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.tela}>
            {location && marcadores.data.length > 0 && (
                <MapView
                    style={{ width: 350, height: 300 }}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.00922,
                        longitudeDelta: 0.00421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                    >
                        <MarcadorPessoal />
                    </Marker>

                    {marcadores.data.map((marcador, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: marcador.latitude,
                                longitude: marcador.longitude,
                            }}
                            pinColor={'#9a6b99'}
                        >
                            <Callout>
                                <CustomCallout
                                    title="Bolha Customizada"
                                    description="Este é um componente customizado."
                                    image={require('../../assets/iconeMarcadorMapa.jpg')}
                                />
                            </Callout>
                            {/* <MarcadorPessoal/> */}
                        </Marker>
                    ))}
                </MapView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({

    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MapaExpo