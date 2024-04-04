import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import {
  View, 
  Text, 
  TextInput,
  StyleSheet } from 'react-native';


const CustomTextInput = forwardRef((props, ref) => {

  /**
   * Definición de variables
   * text: variable que contiene el texto ingresado
   * isValid: variable boolena que especifica si el valor ingresado es válido o no
   * validationMessage: variable que muestra el mensaje de error
   * required: variable booleana que especifica si el campo es requerido
   * validationType: variable que especifica el tipo de validación que tendra el campo (name, phone-number)
   * placeholderText: variable que especifica el placeholder que se mostrará 
   * inputRef: variable que almacena la referencia del componente
   * validationErrors: variable JSX que alamcena la estructura del mensaje de error
  */

  const [ text , setText ] = useState(props.textValue || '');
  const [ isValid , setIsValid ] = useState(true);
  const [ validationMessage , setValidationMessage ] = useState('');
  const [ required , setIsRequired ] = useState(props.isRequired || true);
  const [ isPassword , setisPassword ] = useState(props.isPassword || false);  
  const [ validationType , setValidationType ] = useState(props.validationTypeText || '');
  const [ placeholderText , setPlaceholderText ] = useState(props.placeholderText || 'Ingrese texto');
  
  const inputRef = useRef();

  let validationErrors = null;

  /**
   * El método useImperativeHandle permite llamar a las funciones del componente
   * en los hijos. Para usar esto se debe importar useImperativeHandle
   * Y definir previamente
   * const inputRef = useRef(ref)
   * 
   * Autor: Mowidev Desarrollo
   * Versión: 1.0
  */

  useImperativeHandle(ref, () => ({
    getText: () => {
      // console.log("text");
      // console.log(text);
      return text
    },

    getValidationType: () => {
      return validationType
    },

    validate: async (value) => {    

      let result;
      if(props.textValue && !value){
        await setText(props.textValue);
      }else{
        await setText(value);
      }
  
      // Valida el texto ingresado
      if (required && !value) {
        result = {
          isValid: false,
          message: 'El campo es requerido',
        };
      } else if (!required && !value ) {
        result = {
          isValid: true,
          message: 'El valor es válido',
        };
      } else {
        result = validateInput(validationType, value);
      }
      
        await setIsValid(result.isValid);
        await setValidationMessage(result.message);
      },

      validation: () => {
        return isValid
      },

  }));

  /*useEffect( async () => {
    validation("")
  }, []);*/
  
  /**
   * El método validate permite validar el texto ingresado según se especifique
   * 
   * Autor: Mowidev Desarrollo
   * Versión: 1.0
   * 
  */

  
  const setValue = async (value) => {
    await setText(value);
  }

  const validation = async (value) => {    

    let result;
    
    if(props.textValue && !value){
      await setText(props.textValue);
    }else{
      await setText(value);
    }

    // Valida el texto ingresado
    if (required && !value) {
      result = {
        isValid: false,
        message: 'El campo es requerido',
      };
    } else if (!required && !value ) {
      result = {
        isValid: true,
        message: 'El valor es válido',
      };
    } else {
      result = validateInput(validationType, value);
    }
    
    setIsValid(result.isValid);
    setValidationMessage(result.message);
    // console.log(result);
  }

  // Comprueba si la validación es correcta o no para mostrar el mensaje de error 

  if (!isValid) {
    validationErrors = (
      <View style={styles.validationContainer}>
        <Text style={styles.styleError}>{validationMessage}</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.customTextInputContainer}>
        <TextInput
          style={styles.customTextInput}
          value={text}
          placeholder = {props.placeholderText}
          onChangeText = { (value) => ref.current.validate(value)}
          validationType = {props.validationTypeText}
          required={props.isRequired}
          ref = {inputRef}
          secureTextEntry = {props.isPassword}
        />
      </View>
      <View>
        {validationErrors}
      </View>
    </View>
    );
})

  const styles = StyleSheet.create({

    customTextInputContainer:{
      backgroundColor: 'white',
      marginTop: 10,
      height: 50,
      width: '100%',
      paddingHorizontal: 20,
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10
    },

    customTextInput:{
      fontSize: 17
    },

    
    validationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: 10 ,
      marginTop: 5
    },
    
    styleError:{
      color:'#f24849',
      fontSize:12,
      position: 'absolute',
      left: 20
    },

  });

  export default CustomTextInput;