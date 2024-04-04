import { createStackNavigator } from "@react-navigation/stack";
import PermissionsScreen from "../screens/Permissions/PermissionsScreen";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import MapScreen from "../screens/Maps/MapScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OfficesScreen from "../screens/Offices/OfficesScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import UserScreen from "../screens/User/UserScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
export type RootStackParams = {
   HomeMenu: undefined;
   LoadingScreen: undefined;
   PermissionsScreen: undefined;
   MapScreen: undefined;
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator= ()=> {
   function HomeMenu() {    
   return (
       <Drawer.Navigator>    
          <Drawer.Screen name="SignInScreen" component={SignInScreen} options={() => ({headerShown: false})}/>     
          <Drawer.Screen name="UserScreen" component={UserScreen} options={() => ({headerShown: false})} />
          <Drawer.Screen name="OfficesScreen" component={OfficesScreen} options={() => ({headerShown: false})}/>          
          <Drawer.Screen name="PermissionsScreen" component={PermissionsScreen} options={() => ({headerShown: false})}/>          
          <Drawer.Screen name="MapScreen" component={MapScreen} options={() => ({headerShown: false})}/>
          <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={() => ({headerShown: false})}/>
        </Drawer.Navigator>
      );
    }

  return (
     <Stack.Navigator>       
     <Stack.Screen name="HomeMenu" component={HomeMenu} options={() => ({headerShown: false,})} />    
     </Stack.Navigator>
  );
}