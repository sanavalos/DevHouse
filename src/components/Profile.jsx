import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { nombre } = useParams();
  return <div>Perfil de {nombre}</div>;
}

export default Profile;
