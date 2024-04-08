import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import Map from '../../components/maps/Map';
//AGREGAR ID DEL PAQUETE EN LAS RESTRICCIONES DE MAPS DE GCP antes de desplegarlo
function MapScreen({navigation}) {
  return (
    <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity style={{position: 'absolute', left: 15, top: 10, height: 25, width: 25}} onPress={()=>{navigation.toggleDrawer()}}>
              <Image source={require('../../../assets/icons/icon-menu.png')} style={{height: 25, width: 25}} />
            </TouchableOpacity>
          </View>
      <Map />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,  
  },
  header:{
    flexDirection: 'row',
    height: 50,
  },
 });
export default MapScreen

