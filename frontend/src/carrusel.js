import React, { Component, Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
import "./carrusel.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import peli1 from './img/peli1.jpg'
import peli2 from './img/peli2.jpg'
import peli3 from './img/peli3.jpg'

export default class carrusel extends Component {
    render() {
        return (
            <Fragment>
                <div id="carrusel">
                    <Carousel>
                        <Carousel.Item>
                            <img src={peli1} height="500" width="1920" alt="Peli1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={peli2} height="500" width="1920" alt="Peli1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={peli3} height="500" width="1920" alt="Peli1" />
                        </Carousel.Item>
                    </Carousel>
                    <div id="Grupo_2">
                        <svg class="Lnea_1" viewBox="0 0 122.5 5">
                            <path id="Lnea_1" d="M 0 0 L 122.5 0">
                            </path>
                        </svg>
                        <svg class="Lnea_2" viewBox="0 0 122.5 5">
                            <path id="Lnea_2" d="M 0 0 L 122.5 0">
                            </path>
                        </svg>
                        <svg class="Lnea_3" viewBox="0 0 122.5 5">
                            <path id="Lnea_3" d="M 0 0 L 122.5 0">
                            </path>
                        </svg>
                    </div>
                    <div id="Mira_las_ultimas_tendencias">
                        <span>Mira las ultimas tendencias</span>
                    </div>
                    <svg class="subheader">
                        <rect id="subheader" rx="0" ry="0" x="0" y="0" width="1920" height="100">
                        </rect>
                    </svg>
                </div>
                <div id="Te_recomendamos_estas_pelculas">
                    <span>Te recomendamos estas películas!!</span>
                </div>
            </Fragment>


        )
    }
}
