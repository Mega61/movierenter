import React, { Component } from 'react'
import { useHistory as history } from 'react-router';
import clientService from './services/clientService';
import './signUp.css'

export default class signUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            correo: '',
            contrasegna: ''

        }

        this.contrasegnaHandler = this.contrasegnaHandler.bind(this);
        this.correoHandler = this.correoHandler.bind(this);
        this.nombreHanlder = this.nombreHanlder.bind(this);
        this.addUsuario = this.addUsuario.bind(this);
    }

    contrasegnaHandler = (event) => {
        this.setState({ contrasegna: event.target.value });
    }

    correoHandler = (event) => {
        this.setState({ correo: event.target.value })
    }

    nombreHanlder = (event) => {
        this.setState({ nombre: event.target.value })
    }

    addUsuario = (e) => {
        e.preventDefault();

        let cliente = { nombre: this.state.nombre, correo: this.state.correo, contrasegna: this.state.contrasegna };
        console.log('cliente => ' + JSON.stringify(cliente));

        clientService.addUsers(cliente).then(response => {
            this.props.history.push('/');
        });


    }

    render() {
        return (
            <div id="SignUp">
                <div id="contenedorRegister">
                    <svg class="Rectngulo_12">
                        <rect id="Rectngulo_12" rx="0" ry="16" x="0" y="0" width="653" height="85">
                        </rect>
                    </svg>
                    <svg class="Rectngulo_11">
                        <rect id="Rectngulo_11" rx="0" ry="0" x="0" y="0" width="653" height="761">
                        </rect>
                    </svg>
                </div>
                <div id="TerminosCondiciones">
                    <svg class="CheckBox">
                        <rect id="CheckBox" rx="0" ry="0" x="0" y="0" width="14" height="14">
                        </rect>
                    </svg>
                    <div id="Acepto_los_trminos_y_condicion">
                        <span>Acepto los términos y condiciones</span>
                    </div>
                </div>
                <form>

                    <input id="inputContraSign" placeholder="Contraseña" value={this.state.contrasegna} onChange={this.contrasegnaHandler} />

                    <input id="inputCorreoSign" placeholder="Correo" value={this.state.correo} onChange={this.correoHandler} />

                    <input id="inputNombreSign" placeholder="Nombre" value={this.state.nombre} onChange={this.nombreHanlder} />

                    <button id="BotonSignup" onClick={this.addUsuario}>
                        <svg class="rectaSignUp">
                            <rect id="rectaSignUp" rx="16" ry="16" x="0" y="0" width="160" height="36">
                            </rect>
                        </svg>
                        <div id="SignUp_r">
                            <span>SignUp</span>
                        </div>
                    </button>
                </form>
                <div id="nete_a_nuestra_plataforma">
                    <span>Únete a nuestra plataforma!</span>
                </div>
                <div id="LogopaginaSingup">
                    <svg class="Icon_material-movieSingup" viewBox="3 6 67.614 54.091">
                        <path id="Icon_material-movieSingup" d="M 57.09101867675781 5.999999046325684 L 63.85239410400391 19.52275276184082 L 53.7103271484375 19.52275276184082 L 46.94895172119141 5.999999046325684 L 40.18757629394531 5.999999046325684 L 46.94895172119141 19.52275276184082 L 36.806884765625 19.52275276184082 L 30.04550743103027 5.999999046325684 L 23.28412818908691 5.999999046325684 L 30.04550743103027 19.52275276184082 L 19.9034423828125 19.52275276184082 L 13.14206600189209 5.999999046325684 L 9.76137638092041 5.999999046325684 C 6.042619228363037 5.999999046325684 3.033806800842285 9.042618751525879 3.033806800842285 12.76137542724609 L 2.999999523162842 53.32963943481445 C 2.999999523162842 57.04838943481445 6.042619228363037 60.09101486206055 9.76137638092041 60.09101486206055 L 63.85239410400391 60.09101486206055 C 67.57115173339844 60.09101486206055 70.61376953125 57.04838943481445 70.61376953125 53.32963943481445 L 70.61376953125 5.999999046325684 L 57.09101867675781 5.999999046325684 Z">
                        </path>
                    </svg>
                    <div id="MovieSingup">
                        <span>Movie</span>
                    </div>
                    <div id="RenterSingup">
                        <span>Renter</span>
                    </div>
                </div>
            </div>
        )
    }
}
