import React, { Component, Fragment } from 'react'
import Carrusel from "./carrusel";
import Promocion from "./promocion";
import MovieComponent from "./components/MovieComponent"
import MovieBodyComponent from "./components/MovieBodyComponent";
import { LoginButton } from './header';
import { withRouter } from 'react-router-dom';

class bodyPage extends Component {
    render() {
        return (
            <div id="usuariosinlogear">
                <LoginButton />
                <Carrusel />
                <Promocion />
                <MovieComponent />
                <MovieBodyComponent />
            </div>

        )
    }
}
export default withRouter(bodyPage)
