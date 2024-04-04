import React, { useState, forwardRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  ScrollView } from 'react-native';
  import { supabase } from '../../../../utils/supabase'
  import MapView from 'react-native-maps';

function OfficesScreen({navigation}) {
    console.log('OfficesScreen')
    return(
      <View style={styles.container}>
           <TouchableOpacity style={{position: 'absolute', left: 15, top: 10, height: 25, width: 25}} onPress={()=>{navigation.toggleDrawer()}}>
              <Image source={require('../../../assets/icons/icon-menu.png')} style={{height: 25, width: 25}} />
            </TouchableOpacity>
         <Text>office Screen</Text>
      </View>
    )
}
export default OfficesScreen

const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#FFFFFF',
      paddingBottom: '5%'
    },
    returnIcon:{
      height: 50,
      width: 50
    },
    header__container:{
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 25,
      marginTop: 25
    },
    user__container:{
      width: '80%',
      height: 70,
      justifyContent: 'center'
    },
    name__text:{
      fontSize: 25
    },
    rate__text:{
      fontSize: 20
    },
    rate__icon:{
      width: 24,
      height: 24
    },
    avatar__container:{
      height: 70,
      width: '20%',
      alignContent: 'center',
      justifyContent: 'center'
    },
    avatar:{
      width: 48,
      height: 48
    },
    body__container:{
      width: '100%',
      marginTop: 30,
      paddingHorizontal: 20
    },
    options__container:{
      flexDirection: 'row',
      width: '100%'
    },
    option__button:{
      width: '48%',
      height: 45,
      borderWidth: 2,
      borderColor: '#000',
      justifyContent: 'center',
      borderRadius: 7,
      margin: '1%'
    },
    option__text:{
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center'
    },
    profile__button:{
      marginTop: 15,
      backgroundColor: '#000',
      justifyContent: 'center',
      height: 45,
      width: '100%',
      borderRadius: 7,
    },
    profile__text:{
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center',
      color: '#fff'
    },
    drive__button:{
      marginTop: 15,
      width: '100%',
      height: 45,
      borderWidth: 2,
      borderColor: '#000',
      justifyContent: 'center',
      borderRadius: 7,
    },
    drive__text:{
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center'
    },
    header:{
      flexDirection: 'row',
      height: 50,
    },
    map:{
        width: '100%',
        height: '100%'
    }
  })