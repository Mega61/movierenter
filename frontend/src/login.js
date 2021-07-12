import React, { Component } from 'react'
import './login.css'


export default class login extends Component {
    render() {
        return (
            <div id="Login">
                <div id="ContenedorLogin">
                    <svg class="Rectngulo_12">
                        <rect id="Rectngulo_12" rx="0" ry="16" x="0" y="0" width="653" height="85">
                        </rect>
                    </svg>
                    <svg class="Rectngulo_11">
                        <rect id="Rectngulo_11" rx="0" ry="0" x="0" y="0" width="653" height="761">
                        </rect>
                    </svg>
                </div>
                <div id="grupoRegister">
                    <div id="No_tienes_cuenta">
                        <span>No tienes cuenta?</span>
                    </div>
                    <div id="Registrate">
                        <span>Registrate</span>
                    </div>
                </div>
                <form>
                    <button id="botonLogin">
                        <svg class="rectaLogin">
                            <rect id="rectaLogin" rx="16" ry="16" x="0" y="0" width="122" height="36">
                            </rect>
                        </svg>
                        <div id="Login_r">
                            <span>Login</span>
                        </div>
                    </button>
                    <input id="InputContra" placeholder = "Contraseña">
                        {/* <svg class="rectaContra">
                            <rect id="rectaContra" rx="16" ry="16" x="0" y="0" width="446" height="45">
                            </rect>
                        </svg>
                        <div id="Contrasea">
                            <span>Contraseña</span>
                        </div> */}
                    </input>
                    <input id="InputCorreo" placeholder = "Correo">
                        {/* <svg class="rectaCorreo">
                            <rect id="rectaCorreo" rx="16" ry="16" x="0" y="0" width="446" height="45">
                            </rect>
                        </svg>
                        <div id="Correo">
                            <span>Correo</span>
                        </div> */}
                    </input>
                </form>
                <div id="iconoPersona">
                    <svg class="Elipse_1">
                        <ellipse id="Elipse_1" rx="79.5" ry="79.5" cx="79.5" cy="79.5">
                        </ellipse>
                    </svg>
                    <svg class="Icon_ionic-md-person" viewBox="4.5 4.5 100.023 100.023">
                        <path id="Icon_ionic-md-person" d="M 54.51147842407227 54.51147842407227 C 68.26594543457031 54.51147842407227 79.51722717285156 43.25864028930664 79.51722717285156 29.50574111938477 C 79.51722717285156 15.75284099578857 68.26594543457031 4.499999046325684 54.51147842407227 4.499999046325684 C 40.75701904296875 4.499999046325684 29.50574111938477 15.75284099578857 29.50574111938477 29.50574111938477 C 29.50574111938477 43.25864028930664 40.75701904296875 54.51147842407227 54.51147842407227 54.51147842407227 Z M 54.51147842407227 67.01435089111328 C 37.94569396972656 67.01435089111328 4.499999046325684 75.45431518554688 4.499999046325684 92.02008819580078 L 4.499999046325684 104.5229568481445 L 104.5229568481445 104.5229568481445 L 104.5229568481445 92.02008819580078 C 104.5229568481445 75.45431518554688 71.07726287841797 67.01435089111328 54.51147842407227 67.01435089111328 Z">
                        </path>
                    </svg>
                </div>
                <div id="LogopaginaLogin">
                    <svg class="Icon_material-movieLogin" viewBox="3 6 67.614 54.091">
                        <path id="Icon_material-movieLogin" d="M 57.09101867675781 5.999999046325684 L 63.85239410400391 19.52275276184082 L 53.7103271484375 19.52275276184082 L 46.94895172119141 5.999999046325684 L 40.18757629394531 5.999999046325684 L 46.94895172119141 19.52275276184082 L 36.806884765625 19.52275276184082 L 30.04550743103027 5.999999046325684 L 23.28412818908691 5.999999046325684 L 30.04550743103027 19.52275276184082 L 19.9034423828125 19.52275276184082 L 13.14206600189209 5.999999046325684 L 9.76137638092041 5.999999046325684 C 6.042619228363037 5.999999046325684 3.033806800842285 9.042618751525879 3.033806800842285 12.76137542724609 L 2.999999523162842 53.32963943481445 C 2.999999523162842 57.04838943481445 6.042619228363037 60.09101486206055 9.76137638092041 60.09101486206055 L 63.85239410400391 60.09101486206055 C 67.57115173339844 60.09101486206055 70.61376953125 57.04838943481445 70.61376953125 53.32963943481445 L 70.61376953125 5.999999046325684 L 57.09101867675781 5.999999046325684 Z">
                        </path>
                    </svg>
                    <div id="MovieLogin">
                        <span>Movie</span>
                    </div>
                    <div id="RenterLogin">
                        <span>Renter</span>
                    </div>
                </div>
            </div>
        )
    }
}
