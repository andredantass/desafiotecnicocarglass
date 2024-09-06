import React, { useContext, useState } from "react";
import { ResultContext } from "../context/ContextApi";
import "./InputComponent.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const { result, sendNumberToAPI } = useContext(ResultContext);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clean = () => {
        setInputValue("");
    }
    const handleClick = () => {
        if (inputValue) {
            sendNumberToAPI(inputValue);
        }
    };

    return (
        <div>
            <div class="container p-3">
                <div class="card mx-2 mt-n3 shadow-lg formuser">
                    <div class="card-body">
                        <h5 class="card-title mb-3 text-primary text-uppercase">DESAFIO TECNICO</h5>
                        <div class="row">
                            <div class="col">
                                <div class="form-content mb-3">
                                    <h4 for="password">Digite um numero: </h4>
                                    <input type="number"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" class="btn btn-primary" onClick={handleClick}>Enviar</button>
                        <button type="button" class="btn btn-danger" onClick={clean}>Apagar</button>
                    </div>
                </div>
            </div>
            {/*<input*/}
            {/*    type="number"*/}
            {/*    value={inputValue}*/}
            {/*    onChange={handleInputChange}*/}
            {/*    placeholder="Digite um número"*/}
            {/*/>*/}
            {/*<button onClick={handleClick}>Enviar</button>*/}

            <div class="container p-3">
                <div class="card mx-2 mt-n3 shadow-lg formuser">
                    <div class="card-body">
                        <h5 class="card-title mb-3 text-primary text-uppercase">RESULTADO</h5>
                        {result.numero_de_entrada !== null && (
                            <div>
                                <h3>Numero de Entrada: {result.numero_de_entrada}</h3>

                                <h3>Divisores:</h3>
                                <ul className="inline-list">
                                    {(result.numeros_divisores || []).map((divisor, index) => (
                                        <li key={index}>{divisor}</li>
                                    ))}
                                </ul>

                                <h3>Divisores Primos:</h3>
                                <ul className="inline-list">
                                    {(result.divisores_primos || []).map((divisorPrimo, index) => (
                                        <li key={index}>{divisorPrimo}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputComponent;
