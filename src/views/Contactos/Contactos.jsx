import React from "react";
import "./Contactos.css";

const Contactos = () => {
  return (
    <div>
      <h1> Cuentanos en que te podemos ayudar </h1>

      <h4>Correo</h4>
      <input className="input" type="text" placeholder="Ingresar E-mail" />
      <h4>Descripcion</h4>
      <input
        className="input2"
        type="text"
        placeholder="Ingresar descripcion"
      />
      <div>
        <button className="button"> enviar</button>
      </div>
    </div>
  );
};

export default Contactos;
