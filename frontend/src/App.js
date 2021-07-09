import {LoginButton} from "./header";
import { Perfil } from "./logedHeader";
import Carrusel from "./carrusel";
import Promocion from "./promocion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Fragment } from "react";

function App() {
  return (

    <div id="usuariosinlogear">
      <LoginButton />
      <Perfil />
      <Carrusel />
      <Promocion />
    </div>


  );
}

export default App;
