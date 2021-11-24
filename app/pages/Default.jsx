import React from 'react'
import { View, Image, Dimensions } from 'react-native'

export default function Default() {

    //declara dimensions
    const { width, height } = Dimensions.get('window')

    return (
        <>
            <View>
               <Image source={ require('../resources/6191052.jpg')}
                style={{ width: width, height: height / 6 ,
                        alignSelf: 'center'
                }} />
            </View>
        </>
    )
}
