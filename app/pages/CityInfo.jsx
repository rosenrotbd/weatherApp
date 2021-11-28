import React, { useEffect } from 'react'
//importa view de react native
import { View, Text, Image, Dimensions} from 'react-native'


export default function CityInfo(info) {

    const { width, height } = Dimensions.get('window')
    const { name, sys, weather, main, wind } = info.info;
    return (
        <>
            <View style={{
                width: width, height: height / 6 ,
                alignSelf: 'center',
                marginLeft: width / 10,
            }}>
                <Text>Ciudad: {name}</Text>
                <Text>Pais: 
        
        <Image source={{uri: `https://flagcdn.com/16x12/${sys.country.toLowerCase()}.png`}}
        style={{  width: 16, height: 12 }} /></Text>
                
                <View style={{
                    flexDirection: 'row-reverse',
                    paddingHorizontal: width / 10,
                }}><Text style={{
                    fontSize: 30,
                }}>{(main.temp - 273.15).toFixed(2)} C°</Text></View>
            </View>
        </>
    )
}
