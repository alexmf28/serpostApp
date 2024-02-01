import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { Maps } from '../User/Maps';
// import { Perms } from '../User/Perms';
// import Home from '../Home';
import SignIn from '../SignInScreen/SignInScreen';
// import InitialScreen from '../InitialScreen';
// import Welcome from '../Welcome';
// import ChangePassword from '../User/ChangePassword';
// import MyAddress from '../User/MyAddress';
// import Profile from '../User/Profile';
// import RecoverPassword from '../User/RecoverPassword';
import User from '../User/UserScreen';

const Stack = createStackNavigator();

export const Navigator= ()=> {
  return (
     <Stack.Navigator   
     initialRouteName="User"
     screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="User" component={User} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
       {/* <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="MyAddress" component={MyAddress} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Perms" component={Perms} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Initial" component={InitialScreen} /> */}
     </Stack.Navigator>
  );
}