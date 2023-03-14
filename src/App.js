
import { useState } from "react";
import Contacto from "./componentes/Contacto/Contacto";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
import Contador from "./ejemplos/Contador/Contador";
import PokeApi from "./ejemplos/PokeApi/PokeApi";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Perfumes from "./componentes/Perfumes/Perfumes";
import Maquillajes from "./componentes/Maquillajes/Maquillajes";
import Unias from "./componentes/Unias/Unias";
import CartWidget from "./componentes/CartWidget/CartWidget";


function App() {
  const [show,setShow] =useState(true)

  const handleShow = () =>{
    setShow(!show)
  }
  
  
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/perfumes" element={<Perfumes/>}/>
        <Route path="/maquillajes" element={<Maquillajes/>}/>
        <Route path="/unias" element={<Unias/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/carWidget" element={<CartWidget/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        {/* <Route path="*" element={<Error404/>}/> */}
      </Routes>
      
      
      

      {/* <PokeApi/> */}

      {/* <button onClick={handleShow}>Mostrar Contador</button>

      {
        show ? <Contador/> : null
      } */}

      
      </BrowserRouter>
    

    
  );
}

export default App;
