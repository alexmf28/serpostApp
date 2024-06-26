import React from 'react'
import { ActivityIndicator, View } from 'react-native'

function LoadingScreen() {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <ActivityIndicator
            size={40}
            color="black"/>
    </View>
  )
}

export default LoadingScreen