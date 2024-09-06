import React, { createContext, useState } from "react";

export const ResultContext = createContext();

export const ContextApi = ({ children }) => {
  const [result, setResult] = useState({
    numero_de_entrada: null,
    numeros_divisores: [],
    divisores_primos: [],
  });

  const sendNumberToAPI = async (number) => {
    try {
      const response = await fetch(
        `https://localhost:7038/api/Number?numero=${number}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ number: number }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResult({
          numero_de_entrada: data.numero_de_entrada,
          numeros_divisores: data.numeros_divisores,
          divisores_primos: data.divisores_primos,
        });
      } else {
        console.error("Erro ao enviar número:", response.status);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <ResultContext.Provider value={{ result, sendNumberToAPI }}>
      {children}
    </ResultContext.Provider>
  );
};
