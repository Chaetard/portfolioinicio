import React from "react";
function Button() {
    function handleClick() {
        alert('Este es un mensaje de alerta');
    }
  
    return (
      <button onClick={handleClick}>
        Clic aquí
      </button>
    );
  }
export default Button;  