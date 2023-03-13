import { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { 
    requestBackgroundPermissionsAsync, 
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,
    LocationAccuracy
} from 'expo-location'



export default function App(){

    //definição de tipagem de estado
    const [location, setLocation] = useState<LocationObject | null>(null);

    const mapRef = useRef<MapView>(null);


    async function requestLocationPermissions(){
        
        //estado de permissão
        const { granted } = await requestBackgroundPermissionsAsync();
    
        if(granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            
            //usando a localização atual do usuario, imprimida no console
            //console.log("Localização atual =>", currentPosition)
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) =>{

           // console.log("Nova localização", response) -> Dados capturados em real time
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch: 10,//coloca o mapa em angulos diferentes
                center: response.coords,

            })
        });
    }, []);

    return(

        <View style = {styles.container}>

        { 
            location && 
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
                <Marker
                    coordinate={{
                        latitude:  location.coords.latitude ,
                        longitude: location.coords.longitude,
                }}
            />
           
            </MapView>
        }
        </View>
    );
}
    

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