//react component
import React , {useState} from 'react'
import { View, Text } from 'react-native';
import uniqid from 'uniqid'

//weather api url
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'f0f8a8ff5f107bd8acf6a84fec1d4a99'

export default function CityList() {
        const [title, setTitle] = useState()//esto es temporal, es para ver los datos en el dom, despues se hara en otro componente
        const [temp, setTemp] = useState(0)
        const [ciudad, setCiudad] = useState('')
        const [listaCiudades, setListaCiudades] = useState([])
        const [editar, setEditar] = useState(false)
        const [id, setId] = useState('')
        const [error, setError] = useState(null)
    
        const addCiudad = (event) => {
            
            event.preventDefault()
            const nuevoCiudad = {
                id:uniqid(),
                name: ciudad
            }
            if(!ciudad.trim()){
                setError("El Campo esta vacio")
                return
            }
            else{setListaCiudades([...listaCiudades,nuevoCiudad])
            setCiudad('')
            setError(null)
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
    
            const editarCiudad = (e) =>{
                e.preventDefault()
                const nuevoArray = listaCiudades.map(item =>
                    item.id === id ? {id:id, name:ciudad} : item)
                    setListaCiudades(nuevoArray)
                    setEditar(false)
            }
            
            //funcion que imprima por consola el value del input
           
    
            //crea una funcion que reciba un parametro y lo busque en weather api
            const getWeather = (e) =>{

                let ciudad = e.target.value

                fetch(`${API_URL}&q=${ciudad}&appid=${API_KEY}`)
                .then(res => res.json())
                .then(data =>{
                    //convierte a data a un objeto
                    const {main:{temp}} = data
                    let aux = temp-273.15
                    setTemp(aux);
            setTitle(data.name)
                })
                .catch(err => console.log(err))
            }

    
        return(
            <>
                <View className="">
                    {title ? <Text>La temperatura en {title} es {Math.round(temp)}°</Text> : <Text>Elige una ciudad</Text>}
                <form onSubmit={editar ? editarCiudad : addCiudad} className="">
                                    <input
                                    placeholder="Ingrese la ciudad"
                                    className=""
                                    type="text"
                                    onChange={(e) => {setCiudad(e.target.value)}}
                                    value={ciudad}
                                    />
                    
                                    <input className=""
                                    type="submit" value={editar ? "e" : "+"}/>
    
                            </form>
                        <ul className="">
                          {
                              listaCiudades.map(item => 
                                <li key={item.id} className="">
                                    <button onClick={getWeather} value={item.name}>{item.name}</button>
                                    <button className=""
                                    onClick={ () => {deleteCiudad(item.id)}}>
                                        Borrar
                                    </button>
                                    <button className=""
                                    onClick={ () => {edit(item)}}>
                                        Editar
                                    </button>
                                    
                                </li> 
                                )
                          }
                        </ul >
                  
                           
                            { error != null ? (
                                    <>{error}</>
                                ):
                                    (<> </>)
                            }
                </View>
            </>
        )
    

}
