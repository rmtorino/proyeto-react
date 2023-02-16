

/*
export const Presentacion = (props) =>{
    //Props es un objeto
    //console.log(props)

    //const {nombre, rol, edad} = props
    
    return(
        <article>
            <h2>Nombre: {props.nombre}</h2>
            <p>Rol: {props.rol} </p>
            <p>Edad: {props.edad} </p>
            <hr/>

        </article>
    )
}
*/


export const Presentacion = ({nombre, rol, edad}) =>{
    //console.log(nombre, rol, edad)
    

    return(
        <article>
            <h2>Nombre: {nombre}</h2>
            <p>Rol: {rol} </p>
            <p>Edad: {edad} </p>
            <hr/>

        </article>
    )
}