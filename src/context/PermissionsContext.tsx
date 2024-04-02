import React, { createContext, useEffect, useState } from "react";
import { AppState, Platform } from "react-native";
import { PERMISSIONS, PermissionStatus, check, request } from "react-native-permissions";

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children} : any) => {

    const [ permissions, setPermissions ] = useState(permissionInitState);

    useEffect(() => {
        AppState.addEventListener('change', state => {
            if(state !== 'active') return;
            checkLocationPermission();
        })
    }, [])

    const askLocationPermission = async() => {
        let permissionStatus : PermissionStatus
        if(Platform.OS === 'ios'){         
          permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)      
        } else {         
            console.log('entra')
          permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
          console.log(permissionStatus)
        } 
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }

    const checkLocationPermission = async() => {
      let permissionStatus : PermissionStatus
      if(Platform.OS === 'ios'){
        permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)                     
      } else {
        console.log('entra check')
        permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)      
        console.log(permissionStatus)    
      } 
      setPermissions({
          ...permissions,
          locationStatus: permissionStatus
      })
    }      
      

    return(
    <PermissionsContext.Provider value={{
        permissions,
        askLocationPermission,
        checkLocationPermission
    }}>
        {children}
    </PermissionsContext.Provider>
)
}