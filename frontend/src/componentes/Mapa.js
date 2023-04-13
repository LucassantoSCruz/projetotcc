import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import MarcadorPessoal from './EstiloMarcadorMapa';

const MapaExpo = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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
    }, []);

    let text = 'Buscando localização..';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.tela}>
            {/* <Text>{text}</Text> */}
            {
                location &&
                <MapView
                    style={{ width: 300, height: 250}}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >

                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        // image={require('../../assets/iconMarcadorMapa.png')}

                    >
                        <MarcadorPessoal/>
                    </Marker>

                </MapView>
            }
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