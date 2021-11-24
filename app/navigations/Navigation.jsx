import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home'
import CityList from '../pages/CityList'
import About from '../pages/About'

const Tab = createBottomTabNavigator();
const  TAB_ICON = {
    Home: "home",
    CityList: "list",
    About: "star"
}



const createScreenOptions = ({ route }) => {
     const iconName = TAB_ICON[route.name];
        return {
            tabBarIcon: ({ color, size }) => {
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
}
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={ createScreenOptions }
            >
                <Tab.Screen name="Home" component={Home} options={{title: "Inicio"}}/>
                <Tab.Screen name="CityList" component={CityList} options={{title: "Ciudades"}}/>
                <Tab.Screen name="About" component={About} options={{title: "Acerca de..."}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}