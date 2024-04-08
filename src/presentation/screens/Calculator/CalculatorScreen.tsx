import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import Section from '../../components/section/CustomSection';
import Dropdown from '../../components/dropdown/Dropdown';

function CalculatorScreen({ navigation }) {
    const [selectedValue, setSelectedValue] = useState('');
    const dropdownOptions = [
        { label: 'Seleccionar destino', value: 'seleccionar_destino' },
        { label: 'Perú', value: 'Perú' },
        { label: 'Argentina', value: 'Argentina' },
    ];

    const contactDataOptions = [
        { text: 'Teléfono', onPress: () => { } },
        { text: 'Departamento', onPress: () => { } },
        { text: 'Provincia', onPress: () => { } },
        { text: 'Distrito', onPress: () => { } },
        { text: 'Dirección domiciliaria', onPress: () => { } },
        { text: 'Dirección de trabajo', onPress: () => { } },
        { text: 'Email', onPress: () => { } },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ position: 'absolute', left: 15, top: 10, height: 25, width: 25 }} onPress={() => { navigation.toggleDrawer() }}>
                    <Image source={require('../../../assets/icons/icon-menu.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.header__container}>
                <View style={styles.user__container}>
                    <Text style={styles.name__text}>Calculadora de tarifas</Text>
                </View>
                <View style={styles.avatar__container}>
                    {/* <Image style={styles.avatar} source={require('../../assets/logo.png')}></Image> */}
                </View>
            </View>
            <View>
                <Dropdown
                    options={dropdownOptions}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}                            
                />
                <Section title="Datos Personales" options={contactDataOptions} />
                {/* Aquí puedes incluir más secciones según sea necesario */}
            </View>
        </View>
    )
}

export default CalculatorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingBottom: '5%'
    },
    returnIcon: {
        height: 50,
        width: 50
    },
    header__container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 25,
        marginTop: 25
    },
    user__container: {
        flexDirection: 'row',
        width: '80%',
        height: 70,
        gap: 15,
        alignItems: 'center',
    },
    name__text: {
        fontSize: 25
    },
    rate__text: {
        fontSize: 20
    },
    rate__icon: {
        width: 45,
        height: 45
    },
    avatar__container: {
        height: 70,
        width: '20%',
        alignContent: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 48,
        height: 48
    },
    body__container: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20
    },
    options__container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    option__button: {
        width: '48%',
        height: 45,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        borderRadius: 7,
        margin: '1%'
    },
    option__text: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center'
    },
    profile__button: {
        marginTop: 15,
        backgroundColor: '#000',
        justifyContent: 'center',
        height: 45,
        width: '100%',
        borderRadius: 7,
    },
    profile__text: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff'
    },
    drive__button: {
        marginTop: 15,
        width: '100%',
        height: 45,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        borderRadius: 7,
    },
    drive__text: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center'
    },
    header: {
        flexDirection: 'row',
        height: 50,
    },
})