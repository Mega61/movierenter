import {LoginButton} from "./header";
import { Perfil } from "./logedHeader";
import Carrusel from "./carrusel";
import Promocion from "./promocion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Fragment } from "react";
import MovieComponent from "./components/MovieComponent"
import MovieBodyComponent from "./components/MovieBodyComponent";

function App() {
  return (

    <div id="usuariosinlogear">
      <LoginButton />
      <Perfil />
      <Carrusel />
      <Promocion />
      <MovieComponent/>
      <MovieBodyComponent/>
      
    </div>


  );
}

export default App;
