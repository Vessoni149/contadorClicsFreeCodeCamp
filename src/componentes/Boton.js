import React from "react";
import '../hojas-de-estilo/Boton.css';
function Boton({ texto, esBotonClick, manejarClic }){
  return(
    <button
    className={esBotonClick ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
      {texto}
    </button>
  );
}
//la funcion manejarclick es la que va a aumentar el contador. Va a ser creada en el componenete que renderize al boton, el padre, ya que va a actualizar el estado de otro componente, el contador. Y el número de clics va a estar en otro componente.
export default Boton;                 //con la exportación por defecto solo podemos exportar 1 componente.

