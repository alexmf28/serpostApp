import { PERMISSIONS, PermissionStatus as RNPermissionStatus, check, openSettings, request } from "react-native-permissions"
import type { PermissionStatus } from "../../infraestructure/interfaces/permissions"
import { Platform } from "react-native";
import { err } from "react-native-svg";

export const requestLocationPermission = async():Promise<PermissionStatus> => {
    let status: PermissionStatus = 'unavailable';

    if(Platform.OS === 'ios'){
        status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android'){
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    } else {
        throw new Error( 'Unsupported platform')
    }

    if ( status === 'blocked'){
        await openSettings();
        return await checkLocationPermission();
    }
    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
         granted: 'granted',
         denied: 'denied',
         blocked: 'blocked',
         unavailable: 'unavailable',
         limited: 'limited'
    };
    return permissionMapper[status] ?? 'unavailable';
}

export const checkLocationPermission = async():Promise<PermissionStatus> => {

    let status: PermissionStatus = 'unavailable';

    if(Platform.OS === 'ios'){
        status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android'){
        status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    } else {
        throw new Error( 'Unsupported platform')
    }
    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        unavailable: 'unavailable',
        limited: 'limited'
   };
   return permissionMapper[status] ?? 'unavailable';
}