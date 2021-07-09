import React, { Component, Fragment } from 'react'
import "./header.css"

export default class header extends Component {
    render() {
        return (
            <Fragment>
                <svg class="header">
                    <rect id="header" rx="0" ry="0" x="0" y="0" width="1920" height="110">
                    </rect>
                </svg>
                <div id="Logopagina">
                    <svg class="Icon_material-movie" viewBox="3 6 104.22 83.376">
                        <path id="Icon_material-movie" d="M 86.37636566162109 5.999999046325684 L 96.79840850830078 26.84408950805664 L 81.16533660888672 26.84408950805664 L 70.74329376220703 5.999999046325684 L 60.32124710083008 5.999999046325684 L 70.74329376220703 26.84408950805664 L 55.11022186279297 26.84408950805664 L 44.68817901611328 5.999999046325684 L 34.26613235473633 5.999999046325684 L 44.68817901611328 26.84408950805664 L 29.05511283874512 26.84408950805664 L 18.6330680847168 5.999999046325684 L 13.42204475402832 5.999999046325684 C 7.689919948577881 5.999999046325684 3.052110195159912 10.68991947174072 3.052110195159912 16.42204284667969 L 2.999999523162842 78.95431518554688 C 2.999999523162842 84.68643188476563 7.689919948577881 89.37635803222656 13.42204475402832 89.37635803222656 L 96.79840850830078 89.37635803222656 C 102.5305328369141 89.37635803222656 107.2204513549805 84.68643188476563 107.2204513549805 78.95431518554688 L 107.2204513549805 5.999999046325684 L 86.37636566162109 5.999999046325684 Z">
                        </path>
                    </svg>
                    <div id="Movie">
                        <span>Movie</span>
                    </div>
                    <div id="Renter">
                        <span>Renter</span>
                    </div>
                </div>
                <button id="categoria">
                    <svg class="Rectngulo_10">
                        <rect id="Rectngulo_10" rx="16" ry="16" x="0" y="0" width="174" height="52">
                        </rect>
                    </svg>
                    <div id="Login">
                        <span>Login</span>
                    </div>
                </button>
                {/* <div id="categoria">
                    <svg class="Rectngulo_10">
                        <rect id="Rectngulo_10" rx="16" ry="16" x="0" y="0" width="174" height="52">
                        </rect>
                    </svg>
                    <div id="Login">
                        <span>Login</span>
                    </div>
                </div> */}
                <button id="categoria_gs">
                    <svg class="Rectngulo_10_gt">
                        <rect id="Rectngulo_10_gt" rx="16" ry="16" x="0" y="0" width="174" height="52">
                        </rect>
                    </svg>
                    <div id="SignUp">
                        <span>SignUp</span>
                    </div>
                </button>
                {/* <div id="categoria_gs">
                    <svg class="Rectngulo_10_gt">
                        <rect id="Rectngulo_10_gt" rx="16" ry="16" x="0" y="0" width="174" height="52">
                        </rect>
                    </svg>
                    <div id="SignUp">
                        <span>SignUp</span>
                    </div>
                </div> */}


            </Fragment>
        )
    }
}
