import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    StyleSheet,
    Alert
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Loading from '../../components/Loading';
import { CommonActions } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { supabase } from '../../../utils/supabase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigator } from '../Navigator/Navigator';

interface SignInProps {
    navigation: any;
}

const SignIn: React.FC<SignInProps> = ({ navigation: navigation }) => {
    console.log('aqui2')
    console.log(navigation)

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile       
        webClientId: process.env.EXPO_PUBLIC_WEB_CLIENTID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    });

    const emailTextInput = React.createRef();
    const passwordTextInput = React.createRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [googleAccessToken, setGoogleAccessToken] = useState('');
    /**
     * useEffect para notificaciones 
     */
    // const signIn = async () => {
    //     let userJson = {
    //                      email:"alex@prueba.com",
    //                      password: "adios",
    //                  }
    //     let result = await api.signIn(userJson)
    //   //  console.log(result)
    // }
    const signIn = async (value) => {
        console.log(value)
        console.log('signIn');
        // if((emailTextInput.current as any).getText() == "" || (passwordTextInput.current as any).getText() == ""){
        //     await (emailTextInput.current as any).validate();
        //     await (passwordTextInput.current as any).validate()
        // }         
        // if((emailTextInput.current as any).validation() && (passwordTextInput.current as any).validation()){
        setIsLoading(true);
        /*
        *   Variables
        *   userJson: contiene las credenciales del usuario ( email y password )
        *   client: contiene la respuesta del servicio
        * 
        */
        console.log('INICIA')
        let userJson = {
            email: (emailTextInput.current as any).getText(),
            password: (passwordTextInput.current as any).getText()
        }
        console.log(userJson)
        // let result = await api.signIn(userJson)
        // console.log('signIn result: ', result);
        // Permite revizar si se consumió el serviico de forma correcta o no
        // console.log(result.message)
        // if(!result.message){
        try {
            if (value == 'Facebook') {
                console.log('Facebook')
            } else if (value == 'Google') {
                console.log('Google')

            }
            else if (value == 'Apple') {
                console.log('Apple')
            }
            // console.log(result.message)
            // AsyncStorage.setItem permite guardar en el storage los datos del cliente y la sesión activa
            // await AsyncStorage.setItem('user_session',JSON.stringify(result));
            console.log("Sesion inicializada");
            //Pedimos permiso para obtener el token
            // messaging().requestPermission().then((authStatus) => {
            //     const enabled =
            //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            //     if (enabled) {
            //       console.log('Authorization status:', authStatus);
            //       getFcmToken(result.idRider)
            //     }
            // })
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                    { name: 'User' }
                    ],
                })
            );
        } catch (error) {
            console.log("Entré al catch", error);
        }

        // }else{
        //     Alert.alert("No se pudo iniciar sesión", result.message)
        // }
        setIsLoading(false);
        // }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={"padding"}
                style={styles.containerKeyboardAvoidingView}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={async () => {
                        console.log('entra')
                        try {
                            await GoogleSignin.signOut();
                            console.log('Signout')
                        } catch (e) {
                            console.log(e)
                        }
                    }
                    }>
                        <Image
                            source={require('../../assets/icon-back-button.png')}
                            style={styles.returnIcon}
                        />                      
                    </TouchableOpacity>
                    <Image
                            source={require('../../assets/icons/icon-serpost.png')}
                            style={styles.serpostLogoIcon}
                        />
                </View>
                <View style={styles.body}>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleTextContainer}>
                            <Text style={styles.titleText}>Bienvenido</Text>
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <CustomTextInput
                            placeholderText='Usuario'
                            validationTypeText='email'
                            isRequired={false}
                            ref={emailTextInput}>
                        </CustomTextInput>
                        <CustomTextInput
                            placeholderText='Contraseña'
                            validationTypeText='password'
                            isRequired={false}
                            isPassword={true}
                            ref={passwordTextInput}>
                        </CustomTextInput>
                    </View>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.forgotAction}
                        // onPress={ async () => navigation.navigate('RecoverPassword') }
                        >
                            <View style={styles.actionPasswordContainer}>
                                <Text style={styles.forgotPasswordText}>
                                    ¿Olvidaste tu contraseña?
                                </Text>
                                <Text style={styles.registerText}>
                                    Registrate
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <CustomButton label='Iniciar Sesión' action={() => { signIn('serpost') }} />
                        <View style={styles.viewTermsConds}>
                            <CheckBox
                                disabled={false}
                                value={isSelected}
                                onValueChange={(newValue) => setSelection(newValue)}
                                style={styles.checkbox}
                            />
                            <Text style={styles.TermsConditionsText}>
                                Acepta Términos y Condiciones
                            </Text>
                        </View>
                        <CustomButton id={1} style={styles.actionButtonFacebook} label='Continuar con Facebook' action={() => { signIn('Facebook') }} />
                        <CustomButton id={2} style={styles.actionButtonGoogle} label='Continuar con Google' action={async () => {
                            try {
                                console.log('entro')
                                await GoogleSignin.hasPlayServices();
                                const userInfo = await GoogleSignin.signIn();
                                console.log(JSON.stringify(userInfo, null, 2))
                                console.log('idtoken')
                                console.log(userInfo.idToken)                             
                                if (userInfo.idToken) {
                                    const { data, error } = await supabase.auth.signInWithIdToken({
                                        'provider': 'google',
                                        'token': userInfo.idToken
                                    });                               
                                    setGoogleAccessToken(userInfo.idToken)
                                    console.log(error, data)
                                    navigation.dispatch(
                                        CommonActions.reset({
                                            index: 0,
                                            routes: [
                                                { name: 'User' }
                                            ],
                                        })
                                    );
                                }
                                else {
                                    throw new Error('No idToken')
                                }
                            } catch (error: any) {
                                if (error.code) {
                                    switch (error.code) {
                                        case statusCodes.SIGN_IN_CANCELLED:
                                            console.log('CANCELADO')
                                            break;
                                        case statusCodes.IN_PROGRESS:
                                            console.log('en progreso')
                                            break;
                                        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                                            console.log('NO SERVICIOS DISPONIBLES')
                                            break;
                                        default:
                                            console.log('OTRO ERROR')
                                    }
                                } else {
                                    // an error that's not related to google sign in occurred
                                }
                            }

                        }} />
                        <CustomButton id={3} style={styles.actionButtonApple} label='Continuar con Apple' action={async () => {
                            try {
                                const { error } = await supabase.auth.signOut();

                                if (error) {
                                    console.error("Error al cerrar sesión:", error.message);
                                } else {
                                    console.log("Sesión cerrada correctamente");
                                    await AsyncStorage.clear();
                                    console.log('termina') // Limpia el almacenamiento local
                                }
                            } catch (error) {
                                console.error("Error inesperado al cerrar sesión:", error.message);
                            }
                        }} />
                    </View>
                </View>
            </KeyboardAvoidingView>
            {isLoading ? <Loading
                isLoading={isLoading}
            >
            </Loading> : null}
        </SafeAreaView>
    );

};

// const login = (navigation: any) => {
//     console.log('login!')
//     navigation.dispatch(
//         CommonActions.reset({
//             index: 0,
//             routes: [
//             { name: 'PERMS' }
//             ],
//         })
//     );  
// }



const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },

    containerKeyboardAvoidingView: {
        flex: 1
    },

    header: {      
        display: 'flex',   
        alignItems: 'center',
        marginHorizontal: 10
    },

    returnIcon: {
        height: 50,
        width: 50
    },

    serpostLogoIcon: {
       
        marginLeft: 10,
        marginTop: 10
    },

    body: {
        marginTop: 40,
        paddingHorizontal: 20,
        width: '100%'
    },

    titleContainer: {
        width: '100%',
        marginTop: 15
    },

    titleTextContainer: {
        width: '100%'
    },

    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    inputsContainer: {
        width: '100%',
        marginTop: 20
    },

    actionsContainer: {
        marginTop: 10,
        width: '100%'
    },

    actionPasswordContainer: {
        width: '100%',
        alignItems: 'flex-end'
    },

    forgotPasswordText: {
        // color: '#1D40B7',
        color: 'black',
        fontSize: 14,
        textDecorationLine: 'underline'
    },

    TermsConditionsText: {
        // color: '#1D40B7',
        color: 'black',
        fontSize: 14,
        textDecorationLine: 'underline'
    },

    registerText: {
        // color: '#1D40B7',
        color: 'black',
        fontSize: 13,
        textDecorationLine: 'underline'
    },

    signInButtonContainer: {
        marginTop: 30,
        width: '100%'
    },

    signInButton: {
        backgroundColor: 'red',
        height: 45,
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: "center"
    },

    signInButtonText: {
        color: 'red',
        fontSize: 19,
        fontWeight: 'bold'
    },

    forgotAction: {
        width: '100%',
        // marginTop: 30,
        alignItems: 'center',
        marginBottom: 10,
    },

    signUpText: {
        color: 'black',
        fontSize: 15
    },

    signUpTextAction: {
        color: '#1D40B7',
        fontSize: 15
    },

    actionButtonFacebook: {
        marginTop: 10,
    },

    actionButtonGoogle: {
        marginTop: 10,
    },

    actionButtonApple: {
        marginTop: 10,
    },

    viewTermsConds: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkbox: {
        alignSelf: 'center',
    },
});
export default SignIn;