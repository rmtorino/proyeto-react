import {useState, useEffect} from "react";

const Contador = () => {

    
    const [counter, setCounter] = useState(0);
    //console.log(counter);
    const [hola, setHola] = useState(true)

    const handleClick = () => {
        setCounter(counter + 1);
       
    }

    const handleHola = () => {
        // if(hola === true){
        //     setHola(false);
        // }else {
        //     setHola(true);
        // }
        setHola(!hola);
    } 

    //console.log("Componente montado")

    useEffect(() =>{
        //efecto de montaje
        console.log("Componente montado");

        return () => {
            //Efecto desmontaje
            console.log("Componente Desmontado")
        }
    }, []);

    useEffect(() =>{
        //efecto de montaje
        
        console.log("Estado Actualizado");
    }, [counter, hola]);

    return(
        <div>
            <button onClick = {handleClick}>Click Me!!</button>
            <p>Clics: {counter}</p>
            <hr/>
            <p>FyH: {new Date().toLocaleTimeString()}</p>

            <hr/>
            <button onClick = {handleHola}>
                {hola ? "Hola Mundo!!" : "Chau Mundo!!"}
            </button>
        </div>
    )
}

export default Contador;