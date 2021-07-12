import React, { Component, Fragment } from 'react'
import Carrusel from "./carrusel";
import Promocion from "./promocion";
import MovieComponent from "./components/MovieComponent"
import MovieBodyComponent from "./components/MovieBodyComponent";

export default class bodyPage extends Component {
    render() {
        return (
            <Fragment>
                <Carrusel />
                <Promocion />
                <MovieComponent />
                <MovieBodyComponent />
            </Fragment>
        )
    }
}
