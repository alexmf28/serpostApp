import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
// import { PermissionsContext } from '../../context/PermissionsContext'
import { usePermissionStore } from '../../store/permissions/usePermissionStore';

function PermissionsScreen({navigation}) {
  const { locationStatus, requestLocationPermission } = usePermissionStore(); 
 
  return (
    <View style={styles.container}>
      <Text>sda</Text>
      <Pressable
      style={styles.btnPrimary} 
      onPress={requestLocationPermission}
      >
        <Text style={{color: 'white'}}>Habilitar</Text>
      </Pressable>      
      <Text>Estado actual: { locationStatus }</Text>
    </View>
  )
}
export default PermissionsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnPrimary: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  }
  })