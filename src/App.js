import './App.css';
import logo_finca from './imagenes/fiinca.jpg'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import Boton_clear from './componentes/Boton_clear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregar_input = (valor) => {
    setInput(input + valor);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo_finca} className="logo" alt="Logo pagina web"/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla  input={input}/>
        <div className='fila'> 
          <Boton manejarClic = {agregar_input}>1</Boton>
          <Boton manejarClic = {agregar_input}>2</Boton>
          <Boton manejarClic = {agregar_input}>3</Boton>
          <Boton manejarClic = {agregar_input}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregar_input}>4</Boton>
          <Boton manejarClic = {agregar_input}>5</Boton>
          <Boton manejarClic = {agregar_input}>6</Boton>
          <Boton manejarClic = {agregar_input}>-</Boton>  
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregar_input}>7</Boton>
          <Boton manejarClic = {agregar_input}>8</Boton>
          <Boton manejarClic = {agregar_input}>9</Boton>
          <Boton manejarClic = {agregar_input}>*</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic = {agregar_input}>=</Boton>
          <Boton manejarClic = {agregar_input}>0</Boton>
          <Boton manejarClic = {agregar_input}>.</Boton>
          <Boton manejarClic = {agregar_input}>/</Boton>
        </div>
        <div className='fila'>
          <Boton_clear>Clear</Boton_clear>  
        </div>
      </div>
    </div>
  );
}

export default App;
