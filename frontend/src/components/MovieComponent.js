import React, { Component, Fragment } from 'react'
import Select from 'react-select'
import movieService from '../services/movieService'
import './MovieComponent.css'

class MovieComponent extends Component {

    /* const options = [
        {value: 'Romance', label: 'Romance'}
    ] */

    /* const SelectComponent = () => (
        <Select options = {} />
    ) */

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }

        this.state2 = {
            moviesSimple: []
        }
    }

    componentDidMount() {
        movieService.getFourMovies().then((response) => {

            this.setState({ movies: response.data })

        });

        movieService.getMovies().then((response) => {

            this.setState({moviesSimple : response.data})

        });

        
    }

  /*   componentDidMount(){
        movieService.getFourMovies().then((response) => {

            this.setState({moviesSimple : response.data})

        });
    } */




    render() {

        return (
            <Fragment>
                <div id="peliculaspromocion">
                    {this.state.movies.map((
                        movie) => (
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
                            <button id="botonAlquilar">
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
                            <div id="ID16000_COP_Promocion">
                                <span>{movie.precio} COP</span>
                            </div>
                            <div id="TITANIC">
                                <span>{movie.titulo}</span>
                            </div>
                        </div>
                    )
                    )
                    }
                </div>

                <div id="Elige_de_nuestro_catalogo">
                    <span>Elige de nuestro catalogo</span>
                </div>

                <div id="categoria">
                    <select class="Rectngulo_10">
                        {/* <rect id="Rectngulo_10" rx="16" ry="16" x="0" y="0" width="294" height="52">
                        </rect> */}
                        <option id="CATEGORIA_g">Romance</option>
                        <option id="CATEGORIA_g">Suspenso</option>
                        <option id="CATEGORIA_g">Psicologico</option>
                        <option id="CATEGORIA_g">Terror</option>
                    </select>
                    {/* <div id="CATEGORIA_g">
                        <span>CATEGORIA</span>
                    </div> */}
                    <svg class="Icon_ionic-ios-arrow-dropdown-" viewBox="3.375 3.375 29.25 29.25">
                        <path id="Icon_ionic-ios-arrow-dropdown-" d="M 3.375 18 C 3.375 26.07890701293945 9.921093940734863 32.625 18 32.625 C 26.07890701293945 32.625 32.625 26.07890701293945 32.625 18 C 32.625 9.921093940734863 26.07890701293945 3.375 18 3.375 C 9.921092987060547 3.375 3.375 9.921093940734863 3.375 18 Z M 23.70234298706055 14.94843769073486 C 24.22968673706055 14.42109394073486 25.09453010559082 14.42109394073486 25.62187385559082 14.94843769073486 C 25.88906097412109 15.21562480926514 26.01562309265137 15.56015682220459 26.01562309265137 15.90468788146973 C 26.01562309265137 16.24921989440918 25.88202857971191 16.60078239440918 25.61484146118164 16.86796951293945 L 18.98437309265137 23.47734451293945 C 18.44999885559082 23.96250152587891 17.62734222412109 23.94843864440918 17.11406135559082 23.43515777587891 L 10.38515472412109 16.72734451293945 C 9.857810974121094 16.20000076293945 9.85077953338623 15.34218788146973 10.38515472412109 14.80781364440918 C 10.91249847412109 14.28046989440918 11.77031135559082 14.27343845367432 12.30468559265137 14.80781364440918 L 18.00703048706055 20.56640625 L 23.70234298706055 14.94843769073486 Z">
                        </path>
                    </svg>
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
