import React from 'react'
//importa view de react native
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function CityInfo(info) {

    const { name, sys, weather, main, wind, coord } = info.info;
    return (
        <>
            <View>
                {console.log(info.info)}
                <Text>Ciudad: {name}</Text>
                <Text>Pais: {sys.country}</Text>
                
                <Text>Temperatura: {(main.temp - 273.15).toFixed(2)}</Text>
                <Text>Descripcion: {weather[0].description}</Text>
                <Text>Viento: {wind.speed}</Text>
            </View>
        </>
    )
}
