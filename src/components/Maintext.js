import React, { useState, useEffect } from "react";
import "./Maintext.css";

function Maintext() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const textos = [
      //SOME HERE ?? OR NOT
      { texto: "¡Hola!", color: "#8f025d" },
      { texto: "¡Hola!", color: "#670381" },
      { texto: "¡Hola!", color: "#3a05ab" },
      { texto: "¡Hola!", color: "#550492" },
      { texto: "¡Hola!", color: "#880263" },
      { texto: "¡Hola!", color: "#E50AD5" },
      //SOME HERE
    ];
    let contador = 0;

    const intervalId = setInterval(() => {
      setTexto(
        <p
          href="https://www.youtube.com/watch?v=wDgQdr8ZkTw"
          target="_blank"
          style={{
            color: textos[contador].color,
            textDecoration: "none",
            transition: "1s",
          }}
        >
          {textos[contador].texto}
        </p>
      );
      contador++;
      if (contador >= textos.length) {
        contador = 0;
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p id="texto-cambiante" className="textc ">
      {texto ? texto : "¡Hola!"}
    </p>
  );
}
export default Maintext;
