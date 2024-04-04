import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Dimensions } from 'react-native';

const Loading = ( props ) => {
    const [ isLoading, setIsLoading ] = useState( props.isLoading || true)
    return (
        <ActivityIndicator 
            animating = {props.isLoading}
            color = '#FFFFFF'
            size = "large"
            style = {props.isLoading ? styles.activityIndicatorOn : styles.activityIndicatorOff }/>
    )
};

export default Loading;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    activityIndicatorOff:{
        position: 'absolute',
        //backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: windowHeight,
    },

    activityIndicatorOn:{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: windowHeight,
    },
});