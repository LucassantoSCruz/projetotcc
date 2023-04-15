import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import cadastro from '../telas/TelaCadastro'

const Mapa = () => {

    //definição de tipagem de estado
    const [location, setLocation] = useState<LocationObject | null>(null);

    const mapRef = useRef<MapView>(null);

    const [ coordenadas, setCoordenadas ] = useState({latitude:0, longitude:0})

    const [errorMsg,  setErrorMsg ] = useState(null);

    
    async function requestLocationPermissions(){
        
        //estado de permissão
        const { granted } = await requestBackgroundPermissionsAsync();
    
        if(granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            
            //usando a localização atual do usuario, imprimida no console
            console.log("Localização atual =>", currentPosition)
        }
    }

    useEffect(() => {
        requestLocationPermissions();
        //codigo add com o gpt
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg('Deu errro na permissão')
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })()
    }, []);

    //mapa com as configuraçõe do video
    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) =>{

            console.log("Nova localização", response) //-> Dados capturados em real time
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch: 10,//coloca o mapa em angulos diferentes
                center: response.coords,

            })
        });
    }, []);


    //obtendo as coordenadas do endereco
    //geocoder ta no Back-End, é uma biblioteca do Node.js
    const coordenadasEnd = async (endereco) =>{
        const res = await geocoder.geocode(endereco);
        const {latitude, longitude} = res[0];
        setCoordenadas({latitude, longitude})
    };

    return(

        <View style = {styles.container}>

        { 
            location ? ( 
                <MapView
                    ref={mapRef}
                    style={styles.mapa}
                    initialRegion={{ 
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude:  coordenadas.latitude ,
                            longitude: coordenadas.longitude,
                    }}
                    title={endereco}
                />
                </MapView>
            ): ( 
                <Text> Procurando...</Text>
            )}    
        </View>
    );
};
    

//estilo
const styles = StyleSheet.create({
    container: {
      flex: 0.075,
      backgroundColor: '#ffffff',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"
    },
    mapa:{
        flex: 2,
        width: '100%',
        height: '75%',
        justifyContent: 'flex-start'
    }
});

export default Mapa;