//react component
import React , {useState} from 'react'
import { View, Text, TextInput  } from 'react-native';
import { Button, ListItem} from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
//weather api url
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'f0f8a8ff5f107bd8acf6a84fec1d4a99'

export default function CityList() {
        const [uid, setUid] = useState(1)
        const [title, setTitle] = useState()//esto es temporal, es para ver los datos en el dom, despues se hara en otro componente
        const [temp, setTemp] = useState(0)
        const [ciudad, setCiudad] = useState('')
        const [listaCiudades, setListaCiudades] = useState([])
        const [editar, setEditar] = useState(false)
        const [id, setId] = useState('')
        const [error, setError] = useState(null)
    
    

        const addCiudad = (ciudad) => {
            if(ciudad !== ''){
            setListaCiudades([...listaCiudades, {id: uid, name: ciudad}])
            setUid(uid+1)
            setCiudad('')
            setError(null)}
            else{
                alert('Ingrese una ciudad')
            }

    
}
        
    
            const deleteCiudad =(id)=>{
                const nuevoArray = listaCiudades.filter(item => item.id !== id)
                setListaCiudades(nuevoArray)
            }
    
            const edit = (item) =>{
                setEditar(true)
                setCiudad(item.name)
                setId(item.id)
                
            }
    
            const editarCiudad = (ciudad) =>{
                const nuevoArray = listaCiudades.map(item =>
                    item.id === id ? {id:id, name:ciudad} : item)
                    setListaCiudades(nuevoArray)
                    setEditar(false)
                    setCiudad('')
            }
            
            
            const getWeather = (e) =>{

                let ciudad = e
                console.log(ciudad)
                fetch(`${API_URL}&q=${ciudad}&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data =>{
                    const {main:{temp}} = data
                    let aux = temp-273.15
                    setTemp(aux);
            setTitle(data.name)
                })
                .catch(err => console.log(err))
            }

        return(
            <>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            backgroundColor: '#fff',
                            borderBottomWidth: 1,
                            borderBottomColor: '#ddd'
                        }}
                    >
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            marginHorizontal: 20
                        }}
                        >
                    
                
                                    <TextInput
                                    style={{
                                        borderColor: '#000',
                                        borderWidth: 1,
                                        padding: 10,
                                        margin: 10,
                                    }}
                                    placeholder="Ingrese la ciudad"
                                    type="text"
                                    onChangeText={((value) => {setCiudad(value)} )}
                                    value={ciudad}
                                    />

                                    
                                    <Button
                                    type="submit"
                                    title={editar ? <Text>Confirmar</Text> : <Text>Agregar</Text>}
                                    buttonStyle={{
                                        width: "100%",
                                        borderRadius: 0,
                                        marginBottom: 10,
                                    }}
                                    
                                   onPress={() => {   editar ? editarCiudad(ciudad) : addCiudad(ciudad)}}


                                    />
                    
                    {title ? <Text>La temperatura en {title} es {Math.round(temp)}°</Text> : <Text>Elige una ciudad</Text>}
                          {
                              listaCiudades.map(item => 
                                <ListItem style={{
                                    marginVertical: 10,
                                }}
                                
                                key={item.id}>

                                    <View style={{flexDirection: 'row',
                                    
                                    alignItems:"stretch", width:"50%",color:"#000"}}>
                                    <Button onPress={() => getWeather(item.name)} value={item.name} title={item.name} type="outline">
                                    </Button>
                                   </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'stretch',
                                        width: "50%",
                                    }}>
                                   
                                    <Button 
                                    buttonStyle={{
                                        flexDirection: 'column',
                                        backgroundColor: '#ff0000',
                                        marginRight: 5,
                                    }}
                                    icon={<Ionicons name="md-trash" size={20} color="white" />}
                                    onPress={ () => {deleteCiudad(item.id)}}>
                                    </Button>

                                    <Button
                                    buttonStyle={{
                                        flexDirection: 'column',
                                        marginRight: 5,
                                    }}
                                    onPress={ () => {edit(item)}}
                                    icon={<Ionicons name="md-create" size={20} color="white" />}
                                    >
                                        
                                    </Button>
                                    </View>
                                    
                                    
                                </ListItem> 
                                )
                          }
                   </View>
                  { error != null ? (
                                    <Text>{error}</Text>
                                ):
                                    (<Text> </Text>)
                            }
                </View>
            </>
        )
    

}
