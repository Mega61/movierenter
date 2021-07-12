import React, { Component, Fragment } from 'react'
import { useLocation, withRouter } from 'react-router-dom'
import Carrusel from './carrusel'
import MovieBodyComponent from './components/MovieBodyComponent'
import MovieComponent from './components/MovieComponent'
import LogedHeader from './logedHeader'
import Promocion from './promocion'

class bodyPageLogged extends Component {
    render() {

          var logged = this.props.location.state.logged
          console.log(logged);

        return (
            <div id="usuariologeado">
                <LogedHeader usuarioLogeado = {logged}/>
                <Carrusel />
                <Promocion />
                <MovieComponent />
                <MovieBodyComponent />
            </div>
        )
    }
}
export default withRouter(bodyPageLogged)
