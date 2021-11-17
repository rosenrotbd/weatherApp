//react component
import React , {useState} from 'react'
import { FlatList, View } from 'react-native';
import uniqid from 'uniqid'


export default function CityList() {


        const [nombre, setNombre] = useState('')
        const [listaNombre, setListaNombre] = useState([])
        const [editar, setEditar] = useState(false)
        const [id, setId] = useState('')
        const [error, setError] = useState(null)
    
        const addNombre = (event) => {
            
            event.preventDefault()
            const nuevoNombre = {
                id:uniqid(),
                name: nombre
            }
            if(!nombre.trim()){
                setError("El Campo esta vacio")
                return
            }
            else{setListaNombre([...listaNombre,nuevoNombre])
            setNombre('')
            setError(null)
    }
            
        }
    
            const deleteNombre =(id)=>{
                const nuevoArray = listaNombre.filter(item => item.id !== id)
                setListaNombre(nuevoArray)
            }
    
            const edit = (item) =>{
                setEditar(true)
                setNombre(item.name)
                setId(item.id)
            }
    
            const editarNombre = (e) =>{
                e.preventDefault()
                const nuevoArray = listaNombre.map(item =>
                    item.id === id ? {id:id, name:nombre} : item)
                    setListaNombre(nuevoArray)
                    setEditar(false)
            }
            
            //funcion que imprima por consola el value del input
            const verValor = (e) =>{
                console.log(e.target.value)
            }
    
    
        return(
            <>
                <View className="">
                   
                        <ul className="">
                          {
                              listaNombre.map(item => 
                                <li key={item.id} className="">
                                    <button onClick={verValor} value={item.name}>{item.name}</button>
                                    <button className=""
                                    onClick={ () => {deleteNombre(item.id)}}>
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
                  
                            <form onSubmit={editar ? editarNombre : addNombre} className="">
                                    <input
                                    placeholder="Ingrese el Ciudad"
                                    className=""
                                    type="text"
                                    onChange={(e) => {setNombre(e.target.value)}}
                                    value={nombre}
                                    />
                    
                                    <input className=""
                                    type="submit" value={editar ? "EDITAR Ciudad" : "REGISTRAR Ciudad"}/>
    
                            </form>
                            { error != null ? (
                                    <>{error}</>
                                ):
                                    (<> </>)
                            }
                </View>
            </>
        )
    

}
