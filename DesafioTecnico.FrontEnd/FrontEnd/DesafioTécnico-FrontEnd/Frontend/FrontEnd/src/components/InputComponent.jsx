import React, { useContext, useState } from "react";
import { ResultContext } from "../context/ContextApi";
import "./InputComponent.css";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const { result, sendNumberToAPI } = useContext(ResultContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue) {
      sendNumberToAPI(inputValue);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite um número"
      />
      <button onClick={handleClick}>Enviar</button>

      {result.numero_de_entrada !== null && (
        <div>
          <h2>Número de Entrada: {result.numero_de_entrada}</h2>

          <h2>Divisores:</h2>
          <ul className="inline-list">
            {(result.numeros_divisores || []).map((divisor, index) => (
              <li key={index}>{divisor}</li>
            ))}
          </ul>

          <h2>Divisores Primos:</h2>
          <ul className="inline-list">
            {(result.divisores_primos || []).map((divisorPrimo, index) => (
              <li key={index}>{divisorPrimo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
