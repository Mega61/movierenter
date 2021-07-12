import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import movieService from '../services/movieService'
import './MovieBodyComponent.css'

class MovieBodyComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            moviesAlquiladas: [],
            log: this.props.usuarioLogeado,
            idlog: this.props.idlogger
        }
    }

    componentDidMount() {
        movieService.getMovies().then((response) => {

            this.setState({ movies: response.data })

        });

    }

    agregarAlquilada(id, titulo, precio){
        console.log(id + " " + titulo + " " + precio);

        const laPeliAlquilada = {idArray: id, tituloArray: titulo, precioArray: precio}

        // console.log(JSON.stringify(laPeliAlquilada));

        this.setState({
            moviesAlquiladas: this.state.moviesAlquiladas.concat(laPeliAlquilada)
        })

        // console.log(JSON.stringify(this.state.moviesAlquiladas));
        console.log(JSON.stringify(this.state.log));
        console.log(this.state.idlog);

        this.props.history.push({pathname: '/logged', state: {alquiladas: this.state.moviesAlquiladas, contador: this.state.moviesAlquiladas.length, log: this.state.log, loggerid: this.state.idlog}})

    }



    render() {
        return (
            <div id="Cuadrcula_de_repeticin_1">
                {this.state.movies.map(
                    movie =>
                        <div id="Grupo_11">
                            <svg class="Rectngulo_7_ci">
                                <rect id="Rectngulo_7_ci" rx="16" ry="16" x="0" y="0" width="292" height="56">
                                </rect>
                            </svg>
                            <svg class="Rectngulo_4_cj">
                                <rect id="Rectngulo_4_cj" rx="0" ry="0" x="0" y="0" width="292" height="558">
                                </rect>
                            </svg>
                            <img id="Imagen_1_ck" src={process.env.PUBLIC_URL + "/assets/" + movie.imagen + ".png"} />
                            <div id="Lorem_ipsum_dolor_sit_amet_con_cl">
                                <span>{movie.descripcion}</span>
                            </div>
                            <svg class="Rectngulo_5_cm">
                                <rect id="Rectngulo_5_cm" rx="15" ry="15" x="0" y="0" width="122" height="30">
                                </rect>
                            </svg>
                            <button onClick = {() => this.agregarAlquilada(movie.idPelicula, movie.titulo, movie.precio)}>
                                <div id="ALQUILAR_cn">
                                    <span>ALQUILAR</span>
                                </div>
                                <svg class="Rectngulo_6_co">
                                    <rect id="Rectngulo_6_co" rx="0" ry="0" x="0" y="0" width="292" height="40">
                                    </rect>
                                </svg>
                            </button>
                            <div id="ID16000_COP_cp">
                                <span>{movie.precio} COP</span>
                            </div>
                            <div id="TITANIC_cq">
                                <span>{movie.titulo}</span>
                            </div>
                        </div>

                )}

            </div>
        )
    }
}
export default withRouter(MovieBodyComponent)
