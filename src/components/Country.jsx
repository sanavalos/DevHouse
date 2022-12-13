import React from "react";
import { useParams } from "react-router-dom";

function Country() {
  const { pais } = useParams();
  return (
    <>
      <h2>Foro de {pais.toUpperCase()}</h2>
      <h3>Usuarios</h3>
      <p>Se encuentran X usuarios</p>
      <h3>Posteos</h3>
      <ul>
        <li>Posteo 1</li>
        <li>Posteo 2</li>
        <li>Posteo 3</li>
        <li>Posteo 4</li>
      </ul>
    </>
  );
}

export default Country;
