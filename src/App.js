import './App.css';
import freeCodeCampLogo from '../src/imagenes/fcc_primary_large.svg'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {
const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () =>{
    setNumClics(0);
  }
  
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='Clic'
        esBotonClick={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonClick={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
