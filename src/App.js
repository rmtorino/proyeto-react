//import Noticias from "./componentes/Noticias";
import {Noticias} from "./componentes/Noticias/Noticias";
import { Presentacion } from "./componentes/Presentacion";
import { Tutores } from "./componentes/Tutores/Tutores";

function App() {
  
  
  
  return (
    <div>

      <Noticias>
        <h2>Hola Mundo</h2>
        <hr/>
        <Tutores/>

      </Noticias>

      
      
    
      {/* <Presentacion nombre= "Ricardo Torino" rol= "Alumno" edad="35"/>
      <Presentacion nombre= "Carlos" rol= "Alumno" edad="23"/>
      <Presentacion nombre= "Rodrigo" rol= "Alumno" edad="33"/> */}

      
      
      
    </div>
  );
}

export default App;
