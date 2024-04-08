import React, { PropsWithChildren, useEffect, useState } from 'react'
import { AppState } from 'react-native'
import { usePermissionStore } from '../store/permissions/usePermissionStore'
import { CommonActions, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNavigator';

export const PermissionsChecker = ({ children }: PropsWithChildren) => {
    const { locationStatus, checkLocationPermission } = usePermissionStore();
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        if (initializing) {
            console.log('incializando')
            console.log(initializing)         
            setInitializing(false);
            }
        else {          
            if (locationStatus === 'granted') {
                console.log('redirige a map')
                navigation.reset({
                    routes: [{ name: 'HomeMenu' }],
                })
            }
            else if (locationStatus !== 'undetermined') {
                navigation.reset({
                    routes: [{ name: 'PermissionsScreen' }],
                })
            }
        }
    }, [locationStatus])

    //Para verificarlo cuando el componente se monta
    useEffect(() => {
        checkLocationPermission();
    }, [])

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'active') {
                checkLocationPermission()
            }
        });

        return () => {
            subscription.remove();
        }
    }, [])

    return (
        <>{children}</>
    )
}
