import React, {forwardRef, useState} from 'react';
import {
    TouchableOpacity, 
    Text, 
    StyleSheet,
    View,
     } from 'react-native';
const CustomButton = forwardRef((props, ref) => {
    console.log('aqui')
    console.log(props)
    const [ label , setLabel ] = useState(props.label || '');
    const [ width , setWidth ] = useState(props.width || '100%');
    // const [ action , setAction ] = useState(props.action);
    const [ negative , setNegative ] = useState(props.negative) || false;
    // const []

    return (
        <View style={props.style ? props.style : {}}>
            <TouchableOpacity   
                style={props.negative ? styles(props).negativeButton : styles(props).baseButton}
                onPress={() => {props.action()}}
            >
                <Text style={props.negative ? styles(props).negativeButtonText : styles(props).baseButtonText}>{props.label}</Text>
            </TouchableOpacity>
        </View>
        );
})

export default CustomButton

const styles = (props) => StyleSheet.create({  
    baseButton:{
        backgroundColor: props.id === 1 ? '#3b5998' : props.id === 2 ? '#edf2f4' : props.id === 3 ? 'black' : 'red',
        height: 45,
        width: props.width,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center",
        // marginHorizontal: 5     
    },

    baseButtonText:{
        color: props.id === 2 ? 'black' : 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

    negativeButton:{
        height: 45,
        width: props.width,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        // marginHorizontal: 5
    },

    negativeButtonText:{
        fontSize: 15,
        fontWeight: 'bold',
    },

});