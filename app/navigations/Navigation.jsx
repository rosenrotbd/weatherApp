import * as React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Icon } from 'react-native-elements'

import HomeStack from './HomeStack'
import CityListStack from './CityListStack'
import AboutStack from './AboutStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{inactiveTintColor: '#6464',
            activeTintColor: '#00a680',
            style: {backgroundColor: '#000'}}}


            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)})}
            >
                <Tab.Screen name="Home" component={HomeStack} options={{title: "Inicio"}}/>
                <Tab.Screen name="CityList" component={CityListStack} options={{title: "Ciudades"}}/>
                <Tab.Screen name="About" component={AboutStack} options={{title: "Acerca de..."}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case 'Home':
            iconName = 'compass-outline';
            break;
        case 'CityList':
            iconName = 'magnify';
            break;
        case 'About':
            iconName = 'star-outline';
            break;
        default:
            iconName = 'mark';}

    return <Icon type="material-community" name={iconName}  size={22} color={color}/>}