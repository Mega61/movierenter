import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './checkOut.css'
import rentarService from './services/rentarService'

class checkOut extends Component {

    constructor(props) {
        super(props)
        let dateFunction = new Date()
        this.state = {
            mAlquiladas: this.props.location.state.alquiladasM,
            precioTotal: 0,
            date: dateFunction.getDate() + "/" + dateFunction.getMonth() + "/" + dateFunction.getFullYear(),
            id: this.props.location.state.userID,
            rentas: []
        }
    }

    componentDidMount() {
        this.setState({ mAlquiladas: this.props.location.state.alquiladasM })

        //this.setState({ date: dateFunction.getDate() + "/" + dateFunction.getMonth() + "/" + dateFunction.getFullYear() })
        console.log(JSON.stringify(this.state.mAlquiladas))
        console.log(this.state.date)

    }

    populateSendInfo(rent) {
        let Renta = {
            idcliente: this.state.id,
            idpelicula: rent.idArray,
            fechaalquiler: this.state.date,
            fechadevolucion: ''
        }
        // this.state.rentas.concat(Renta)
        //this.setState({ rentas: Renta })
        console.log(Renta)
        rentarService.addRenta(Renta);

    }

    addRentasTotales = (e) => {


        this.state.mAlquiladas.map(
            (rent) =>
                this.populateSendInfo(rent)
        )


        this.props.history.push({ pathname: '/logged', state: { logged: this.props.location.state.loggedU } });
        //console.log(Renta);
    }


    render() {
        console.log(JSON.stringify(this.props.location.state.alquiladasM));
        let precioC = 0;
        return (

            <div id="CheckOut">
                {this.state.mAlquiladas.map(
                    precio =>
                        precioC = precioC + precio.precioArray
                )}
                <div id="contenedorCheckOut">
                    <svg class="Rectngulo_12CheckOut">
                        <rect id="Rectngulo_12CheckOut" rx="0" ry="0" x="0" y="0" width="653" height="98">
                        </rect>
                    </svg>
                    <svg class="Rectngulo_11CheckOut">
                        <rect id="Rectngulo_11CheckOut" rx="0" ry="0" x="0" y="0" width="653" height="878">
                        </rect>
                    </svg>
                </div>

                <button id="BotonSignupCheckOut" onClick={this.addRentasTotales}>
                    <svg class="rectaSignUpCheckOut">
                        <rect id="rectaSignUpCheckOut" rx="16" ry="16" x="0" y="0" width="160" height="36">
                        </rect>
                    </svg>
                    <div id="CheckOut_p">
                        <span>CheckOut</span>
                    </div>
                </button>

                <div id="Gracias_por_alquilar_con_nosot">
                    <span>Gracias por alquilar con nosotros!!</span>
                </div>
                <div id="LogopaginaCheckOut">
                    <svg class="Icon_material-movieCheckOut" viewBox="3 6 67.614 54.091">
                        <path id="Icon_material-movieCheckOut" d="M 57.09101867675781 5.999999046325684 L 63.85239410400391 19.52275276184082 L 53.7103271484375 19.52275276184082 L 46.94895172119141 5.999999046325684 L 40.18757629394531 5.999999046325684 L 46.94895172119141 19.52275276184082 L 36.806884765625 19.52275276184082 L 30.04550743103027 5.999999046325684 L 23.28412818908691 5.999999046325684 L 30.04550743103027 19.52275276184082 L 19.9034423828125 19.52275276184082 L 13.14206600189209 5.999999046325684 L 9.76137638092041 5.999999046325684 C 6.042619228363037 5.999999046325684 3.033806800842285 9.042618751525879 3.033806800842285 12.76137542724609 L 2.999999523162842 53.32963943481445 C 2.999999523162842 57.04838943481445 6.042619228363037 60.09101486206055 9.76137638092041 60.09101486206055 L 63.85239410400391 60.09101486206055 C 67.57115173339844 60.09101486206055 70.61376953125 57.04838943481445 70.61376953125 53.32963943481445 L 70.61376953125 5.999999046325684 L 57.09101867675781 5.999999046325684 Z">
                        </path>
                    </svg>
                    <div id="MovieCheckOut">
                        <span>Movie</span>
                    </div>
                    <div id="RenterCheckOut">
                        <span>Renter</span>
                    </div>
                </div>
                {this.state.mAlquiladas.map(
                    alqui => (

                        <div id="Alquilada">

                            <div id="Titulo_de_la_peli">
                                <span>{alqui.tituloArray}</span>
                            </div>
                            <div id="ID16000_COP">
                                <span>{alqui.precioArray} COP</span>
                            </div>
                            <svg class="Separador" viewBox="0 0 568 1">
                                <path id="Separador" d="M 0 0 L 568 0">
                                </path>
                            </svg>
                        </div>
                    )
                )}
                <div id="Total">
                    <div id="Total_">
                        <span>Total</span>
                    </div>
                    <div id="ID16000_COP_">
                        <span>{precioC}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(checkOut)