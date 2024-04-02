import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { PermissionsContext } from '../../context/PermissionsContext'

function PermissionsScreen() {

  const { permissions, askLocationPermission }= useContext( PermissionsContext );
 console.log(permissions)
  return (
    <View style={styles.container}>
      <Text>sda</Text>
      <Button 
      title='permiso'      
      onPress={askLocationPermission}       
      />
    <Text>{ JSON.stringify(permissions, null, 5) }</Text>
    </View>
  )
}
export default PermissionsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  })