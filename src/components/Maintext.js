import React, { useState, useEffect } from "react";
import "./Maintext.css";

function Maintext() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const textos = [
      { texto: "Jesus" },
      { texto: "Jesu" },
      { texto: "Jes" },
      { texto: "Je" },
      { texto: "J" },
      { texto: "" },
      { texto: "S" },
      { texto: "Sa" },
      { texto: "San" },
      { texto: "Sant" },
      { texto: "Santo" },
      { texto: "Santos" },
      { texto: "Santos" },
      { texto: "Santo" },
      { texto: "Sant" },
      { texto: "San" },
      { texto: "Sa" },
      { texto: "S" },
      { texto: "" },
      { texto: "J" },
      { texto: "Je" },
      { texto: "Jes" },
      { texto: "Jesu" },
      { texto: "Jesus" },
      { texto: "Jesus S" },
      { texto: "Jesus Sa" },
      { texto: "Jesus San" },
      { texto: "Jesus Sant" },
      { texto: "Jesus Santo" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santos" },
      { texto: "Jesus Santo" },
      { texto: "Jesus Sant" },
      { texto: "Jesus San" },
      { texto: "Jesus Sa" },
      { texto: "Jesus S" },
      { texto: "Jesus" },
      { texto: "Jesu" },
      { texto: "Jes" },
      { texto: "Je" },
      { texto: "J" },
      { texto: "" },
      { texto: "J" },
      { texto: "Je" },
      { texto: "Jes" },
      { texto: "Jesu" },
      { texto: "Jesus" },
    ];
    let contador = 0;

    const intervalId = setInterval(() => {
      setTexto(
        <span style={{ color: textos[contador].color }}>
          {textos[contador].texto}
        </span>
      );
      contador++;
      if (contador >= textos.length) {
        contador = 0;
      }
    }, 450);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p id="texto-cambiante" className="textc">
      {texto}
    </p>
  );
}
export default Maintext;
