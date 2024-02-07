import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import {supabase } from '../utils/supabase'
  export default function Auth() {
    GoogleSignin.configure({  
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile       
        webClientId: process.env.EXPO_PUBLIC_WEB_CLIENTID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      });
      return(
        <GoogleSigninButton    
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={async() => {
            try {
                await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
                // setState({ userInfo, error: undefined });
                console.log(JSON.stringify(userInfo, null, 2))
                if(userInfo.idToken){
                  const { data, error } = await supabase.auth.signInWithIdToken({
                    'provider': 'google', 
                    'token': userInfo.idToken});
                  console.log(error, data)
                } 
                 else {
                  throw new Error('No idToken')
                }
              } catch (error:any) {
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
        }}/>
      )
  }