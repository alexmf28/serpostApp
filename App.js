import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import { Text, View } from "react-native";
import { Navigator } from "./src/screens/Navigator/Navigator";
import {
  NativeBaseProvider,
} from 'native-base'; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "./src/screens/Home";
// import InitialScreen from "./src/screens/InitialScreen";
import SignIn from "./src/screens/SignInScreen/SignInScreen";
// import SignUp from "./src/screens/SignUp";
// import ChangePassword from "./src/screens/User/ChangePassword";
import Profile from "./src/screens/Profile/ProfileScreen";
// import RecoverPassword from "./src/screens/User/RecoverPassword";
import User from "./src/screens/User/UserScreen";
import Offices from "./src/screens/Offices/OfficesScreen";
// import Welcome from "./src/screens/Welcome";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function HomeMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SignIn" component={SignIn} options={() => ({headerShown: false})}/>
      <Drawer.Screen name="User" component={User} options={() => ({headerShown: false})} />
      <Drawer.Screen name="Offices" component={Offices} options={() => ({headerShown: false})}/>
      <Drawer.Screen name="Profile" component={Profile} options={() => ({headerShown: false})}/>
    </Drawer.Navigator>
  );
}

// const Drawer = createDrawerNavigator();



function WelcomeStack()  {
  return (
    <Stack.Navigator>
       {/* <Stack.Screen name="Welcome" component={Welcome} options={() => ({headerShown: false})}/>
      <Stack.Screen name="InitialScreen" component={Welcome} options={() => ({headerShown: false})}/> */}
      <Stack.Screen name="SignIn" component={SignIn} options={() => ({headerShown: false,})}/>
      <Stack.Screen name="User" component={User} options={() => ({headerShown: false})}/>   
      {/* <Stack.Screen name="SignUp" component={SignUp} options={() => ({headerShown: false,})}/> 
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={() => ({headerShown: false,})}/> */}
      
      
      {/* <Stack.Screen name="AddressStack" component={AddressStack} options={() => ({headerShown: false,})}/>   */}
      {/* <Stack.Screen name="Mis envíos" component={MyServices}/>
      <Stack.Screen name="Noticias" component={NewsStack}/>
      <Stack.Screen name="Más" component={MoreDetailStack}/> */}
    </Stack.Navigator>
  );
}



function ProfileStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="User" component={User} options={() => ({headerShown: false})}/>
        {/* <Stack.Screen name="Profile" component={Profile} options={() => ({headerShown: false})}/> */}
        {/* <Stack.Screen name="ChangePassword" component={ChangePassword} options={() => ({headerShown: false})}/> */}
      </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* { <Stack.Screen name="ProfileStack" component={ProfileStack} options={() => ({headerShown: false,})}/>} */}
          {/* <Stack.Screen name="Camara" component={Camara} /> */}
          <Stack.Screen name="HomeMenu" component={HomeMenu} options={() => ({headerShown: false,})}/>
          {/* <Stack.Screen name="GalleryCameraRoll" component={GalleryCameraRoll} /> */}
          {/*<Stack.Screen name="ProfileStack" component={ProfileStack} options={() => ({headerShown: false,})}/>*/}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;