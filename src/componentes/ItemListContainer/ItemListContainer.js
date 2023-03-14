import { useEffect, useState } from "react"
import "./ItemListContainer.scss"
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";

// protocolo  |    dominio      |endpoints|parametro
// URL: https://www.coderhouse.com/alumnos?id=1

// query params || GET || curso = string | number || limit = number
// URL: https://www.coderhouse.com/alumnos?curso=reactjs&limit=20

// url params: GET
// URL: https://www.coderhouse.com/alumnos/{id}/{curso}
// URL: https://www.coderhouse.com/alumnos/1234/reactjs

//fetch(url)
    // .then()
    // .catch()
    // .finaly()


const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    //console.log(productos);
    const [loading, setLoading] = useState(true)

    
    useEffect( () => {

        pedirDatos()
            .then((response) => {
                setProductos(response)
                
            })
            .catch((error) =>{
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [])

    

    return(
        <div className="contenedor">
            {
                loading 
                    ? <h2>Cargando..</h2>
                    : <ItemList items={productos}/>
            }
            
        </div>
    );
};

export default ItemListContainer;




    /**
    // const promesa = new Promise( (resolve, reject) => {
    //     //Cuerpo de la promesa
    //     setTimeout(() => {
    //         //resolve("Promesa resuleta")
    //         reject("Promesa rechazda")

    //     }, 2000);
    // })

    const pedirDatos = (bool) =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(() => {
                if(bool) {
                    resolve("Promesa Resuelta")
                }else {
                    reject("Promesa Rechazada")
                }
            },2000)
        })
    }

    pedirDatos(false)
        .then((response) => {
            console.log(response)
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally(() =>{
            console.log("Fin del Proceso")
        })

    // promesa.catch(() => {
    //     console.log("Hola Mundo!!")
    // })
    
     */