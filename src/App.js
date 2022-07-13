import './App.css';
//import FreeCodeCampLogo from './img/freecodecamp-logo.png';
import Pantalla from './Componentes/Pantalla';
import Boton from './Componentes/Boton';
import BotonClear from './Componentes/BotonClear';
//Import Stado
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {


  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {

    }
  };

  return (

    <div className="App">
      <div className='freecodecamp-logo-contenedor'>

        <h1 className='textHeader'>Mi Calculadora Inteligente</h1>

        {/* <img
          src={FreeCodeCampLogo}
          className="freecodecamp-logo"
          alt='Logo'
        /> */}

      </div>

      <div className='contenedor-calculadora'>

        <Pantalla
          input={input}
        />

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>
    </div>

  );
}

export default App;
