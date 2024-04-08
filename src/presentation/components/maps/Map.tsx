import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 
import { Platform } from 'react-native';

interface Props{
    markers: {
        lat: number,
        lng: number,
        title: string,
        description: string
    }[]
}

function Map() {
  return (
   <>
      <MapView
      provider={ Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{ flex:1 }}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}      
    >
        <Marker
         coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
         }}
         title='Este es el marcador'
         description='el cuerpo del marcador'
        />
    </MapView>
   </>
  )
}

export default Map