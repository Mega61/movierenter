import React, { Component, Fragment } from 'react'
import movieService from '../services/movieService'
import './MovieComponent.css'

class MovieComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        movieService.getMovies().then((response) => {

            this.setState({ movies: response.data })

        });
    }

    render() {
        return (
            <Fragment>
                <div id="peliculaspromocion">
                    {this.state.movies.map(
                        movie =>
                            <div id="Grupo_4" key={movie.idpelicula}>
                                <svg class="Rectngulo_7">
                                    <rect id="Rectngulo_7" rx="16" ry="16" x="0" y="0" width="292" height="56">
                                    </rect>
                                </svg>
                                <svg class="Rectngulo_4">
                                    <rect id="Rectngulo_4" rx="0" ry="0" x="0" y="0" width="292" height="558">
                                    </rect>
                                </svg>
                                <img id="Imagen_1" src={process.env.PUBLIC_URL + "/assets/" + movie.imagen + ".png"}></img>
                                <div id="Lorem_ipsum_dolor_sit_amet_con">
                                    <span>{movie.descripcion}</span>
                                </div>
                                <button id = "botonAlquilar">
                                    <svg class="Rectngulo_5">
                                        <rect id="Rectngulo_5" rx="15" ry="15" x="0" y="0" width="122" height="30">
                                        </rect>
                                    </svg>
                                    <div id="ALQUILAR">
                                        <span>ALQUILAR</span>
                                    </div>
                                </button>
                                <svg class="Rectngulo_6">
                                    <rect id="Rectngulo_6" rx="0" ry="0" x="0" y="0" width="292" height="40">
                                    </rect>
                                </svg>
                                <div id="ID16000_COP">
                                    <span>{movie.precio} COP</span>
                                </div>
                                <div id="TITANIC">
                                    <span>{movie.titulo}</span>
                                </div>
                            </div>
                    )
                    }

                </div>

                {/* <div>
                    <h1>Peliculas</h1>
                    <table>
                        <thead>
                            <tr>
                                <td>Titulo</td>
                                <td>Precio</td>
                                <td>Disponibilidad</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.movies.map(
                                    movie =>
                                        <tr key={movie.idPelicula}>
                                            <td>{movie.titulo}</td>
                                            <td>{movie.precio}</td>
                                            <td>{movie.disponibilidad}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div> */}
            </Fragment>


        )
    }
}

export default MovieComponent
