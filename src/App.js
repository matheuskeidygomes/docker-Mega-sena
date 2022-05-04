import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [quantidade, setQuantidade] = useState(6);
  const [numeros, setNumeros] = useState(MegaSena(quantidade));

  function MegaSena(qnt, numbers = []) {

    const numeroAleatorio = parseInt(Math.random() * 60) + 1;

    if (numbers.length === qnt) {
      return numbers;
    }

    if (!numbers.includes(numeroAleatorio)) {
      return MegaSena(qnt, [...numbers, numeroAleatorio]);

    } else {
      return MegaSena(qnt, numbers);
    }

  }

  return <>

    <h1 className="titulo"> Mega Sena </h1>

    <div className="mega1">

      {numeros.map((numero) => {

        return <>

          <div className="mega2">
            {numero}
          </div>

        </>

      })}

    </div>

    <br /> 
    
    <div className="inputs">

      <input type="number" min={6} max={20} value={quantidade} onChange={(e) => setQuantidade(+e.target.value)} />

      <button onClick={() => setNumeros(MegaSena(quantidade))}>
        Gerar Aposta
      </button>

    </div>

  </>

}
