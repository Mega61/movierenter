import React, { Component, Fragment } from 'react'
import { useLocation, withRouter } from 'react-router-dom'
import Carrusel from './carrusel'
import MovieBodyComponent from './components/MovieBodyComponent'
import MovieComponent from './components/MovieComponent'
import LogedHeader from './logedHeader'
import Promocion from './promocion'

class bodyPageLogged extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    render() {


        var logged = this.props.location.state.logged
        var alquiladas = this.props.location.state.alquiladas
        var contador = this.props.location.state.contador
        var loggedconst = this.props.location.state.log
        var idlogged = this.props.location.state.idLogged
        var idloggedconst = this.props.location.state.loggerid
        console.log(logged);
        console.log(JSON.stringify(alquiladas));
        console.log(idlogged)
        console.log(idloggedconst)
        //this.props.history.push({namepath: "/checkout", state: {alquiladasP: alquiladas}})


            return(
                <div id="usuariologeado">
                    <LogedHeader usuarioLogeadoC={loggedconst} usuarioLogeado={logged} pelisAlquiladas={alquiladas} contadorP={contador} idUser = {idloggedconst} />
                    <Carrusel />
                    <Promocion />
                    <MovieComponent />
                    <MovieBodyComponent  usuarioLogeado={logged} idlogger = {idlogged} />
                </div>
            )
    }
}
export default withRouter(bodyPageLogged)
