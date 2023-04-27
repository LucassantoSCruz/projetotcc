import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MarcadorPessoal from './EstiloMarcadorMapa';
import axios from 'axios';

const MapaExpo = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marcadores, setMarcadores] = useState([]);

    /*
    Criar um estado para os marcadores
    Chamar informações dos marcadores com o axios
    Passar informações para uma flatlist
    Percorrer flatlist e adicionar marcadores
    */

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
    }, []);

    let text = 'Buscando localização..';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const requestResponse = () => {
        axios.get('http://192.168.1.9:3000/listarEndereco')
        axios.get('http://192.168.1.7:3000/listarEndereco')
        .then(function (response) {
            setMarcadores(response.data)
            //console.log(marcadores.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const Marcador = ({item}) => (
        // console.log("Resposta Marcador: ", item)
        // <View>
        //     <Text>
        //         {item.Latitude}
        //     </Text>
        // </View>
            <Marker
                coordinate={
                    {
                        latitude: item.Latitude, 
                        longitude: item.Longitude
                    }
                }
            />
    );

    return (
        <View style={styles.tela}>
            {/* <Text>{text}</Text> */}
            {
                location &&
                <MapView
                    style={{ width: 350, height: 300}}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.00922,
                        longitudeDelta: 0.00421
                    }}
                >

                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                    >
                        <MarcadorPessoal/> 
                    </Marker>

                    <FlatList
                        data={marcadores.data}
                        renderItem={({item}) => <Marcador item={item}/>}
                        keyExtractor={item => item.ID_Endereco}
                    />

                    {/* {marcadores.data.map((marcadores, index) => (
                        <Marker
                        key={index}
                        coordinate={{
                            latitude: marcadores.data.Latitude,
                            longitude: marcadores.data.Longitude,
                        }}
                        title={marcadores.data.CEP}
                        >
                            <MarcadorPessoal/>
                        </Marker>
                    ))} */}
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