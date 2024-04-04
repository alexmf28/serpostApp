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

function ProfileScreen({navigation}) {
    console.log('ProfileScreen')
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={{position: 'absolute', left: 15, top: 10, height: 25, width: 25}} onPress={()=>{navigation.toggleDrawer()}}>
              <Image source={require('../../../assets/icons/icon-menu.png')} style={{height: 25, width: 25}} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
                      <TouchableOpacity onPress={async() => {
                        console.log('entra')
                        const { error } = await supabase.auth.signOut()
                        console.log(error)
                        if(error){
                          console.log(error)
                        } else {
                          console.log('error navigator')
                          navigation.navigate('SignIn')
                        }
                      }}>
                      <Image
                          source={require('../../../assets/icons/icon-back-button.png')}
                          style={styles.returnIcon}
                          />
                      </TouchableOpacity>
                  </View>
        <View style={styles.header__container}>
          <View style={styles.user__container}>
           <Image style={styles.rate__icon} source={require('../../../assets/icons/avatar-men.png')}></Image>
            <Text style={styles.name__text}>Mi Perfil</Text>
          </View>
          <View style={styles.avatar__container}>
            {/* <Image style={styles.avatar} source={require('../../assets/logo.png')}></Image> */}
          </View>
        </View>
        <View style={styles.body__container}>
        <Text style={styles.name__text}>Datos Personales</Text>
          <View style={styles.options__container}>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Nombres</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Apellidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Fecha de Nacimiento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Género</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Tipo de Documento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Numero de Documento</Text>
            </TouchableOpacity>       
          </View>
          <Text style={styles.name__text}>Datos de contacto</Text>
          <View style={styles.options__container}>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Teléfono</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Departamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Provincia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Distrito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Dirección domiciliaria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>Dirección de trabajo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option__button}>
              <Text style={styles.option__text}>email</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.profile__button} onPress={async() => navigation.navigate('Profile')}>
            <Text style={styles.profile__text}>EDITAR PERFIL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drive__button} onPress={async()=>navigation.navigate('Offices')}>
            <Text style={styles.drive__text}>Oficinas Cercanas</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default ProfileScreen

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
      flexDirection: 'row',
      width: '80%',
      height: 70,
      gap: 15,
      alignItems: 'center',      
    },
    name__text:{
      fontSize: 25
    },
    rate__text:{
      fontSize: 20
    },
    rate__icon:{
      width: 45,
      height: 45
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
      flexWrap: 'wrap',
      display: 'flex',  
      justifyContent: 'space-between',
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
  })