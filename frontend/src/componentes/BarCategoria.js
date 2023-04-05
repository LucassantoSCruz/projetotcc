import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { BottomSheet } from "react-native-btr";
import MapView from "react-native-maps";
import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions'

const BarCategoria = () =>{

  const [mapa , setMapa] = useState(null)
  const [ locationResult, setLocation ] = useState( null )
  const [ mapRegion, setRegion ] = useState( null )
  const [ hasLocationPermissions, setLocationPermission ] = useState( false )

    useEffect( () => {
        const getLocationAsync = async () => {
            let { status } = await Permissions.askAsync( Permissions.LOCATION )
            if ( 'granted' !== status ) {
                setLocation( 'Permission to access location was denied' )
            } else {
                setLocationPermission( true );
            }

            let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({})
            setLocation( JSON.stringify( { latitude, longitude } ) )
            
            // Center the map on the location we just fetched.
            setRegion( { latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } );
        }

        getLocationAsync()
      })

    if ( locationResult === null ) {
      return <Text>Finding your current location...</Text>
  }

  if ( hasLocationPermissions === false ) {
      return <Text>Location permissions are not granted.</Text>
  }

  if ( mapRegion === null ) {
      return <Text>Map region doesn't exist.</Text>
  }


    

function alternar() {
  setMapa((mapa) => !mapa);
}

  return (
    <View style={styles.tela}>

      <TouchableOpacity>
        <Text style={styles.texto}>Cabeleireiro</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto}>Manicure</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto}>Maquiador</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto}>Mais Opções</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../../assets/iconsbelezura/calendario.png")} style={styles.imagem}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={alternar}>
        <Image source={require("../../assets/iconsbelezura/marcador.png")} style={styles.imagem}/>
        <BottomSheet
          visible={mapa}
          onBackButtonPress={alternar}
          onBackdropPress={alternar}
          >
  
          <MapView
            style={ styles.container }
            region={ mapRegion }
            initialRegion={{
              "latitude": 39.97343096953564,
              "latitudeDelta": 0.0922,
              "longitude": -75.12520805829233,
              "longitudeDelta": 0.0421,
          }}
            onRegionChange={ region => setRegion( region )}
          >
          <MapView.Marker
            title="YIKES, Inc."
            description="Web Design and Development"
            coordinate={{"latitude":39.969183,"longitude":-75.133308}}
          />
        </MapView>
      </BottomSheet>
    </TouchableOpacity>

  </View>
  )
} 

// MapScreen.navigationOptions = {
//     header: null
// }




const styles = StyleSheet.create({
  tela: {
    flex: 0.075,
    backgroundColor: '#ffffff',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  texto: {
    color: '#000000'
  },
  imagem: {
    height: 25,
    width: 25,
    color: '#000000'
  },
  fundomodal: {
    backgroundColor: "#fff",
    height: '50%',
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mapa: {
    flex: 2,
    width: '100%',
    height: '75%',
    justifyContent: 'flex-start'
  },
  textomapa: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 15
  }
})

export default BarCategoria