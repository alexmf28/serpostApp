import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/presentation/navigation/StackNavigator";
import {
  NativeBaseProvider,
} from 'native-base'; 

import { PermissionsChecker } from "./src/presentation/providers/PermissionsChecker";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <PermissionsChecker>
         <StackNavigator />
        </PermissionsChecker>
      </NavigationContainer>    
    </NativeBaseProvider>
  );
};

export default App;