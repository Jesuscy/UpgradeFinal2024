import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Meeting = (props) => {
  const port = props.port;

  return (
    <>
      <div>Meeting</div>
      <p>Este es el contenido de la reunión.</p>
      <p>Aquí puedes poner más detalles sobre la reunión.</p>
    </>
  );
};
