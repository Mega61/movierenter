import React, { Component } from 'react'
import './logedHeader.css'
import { useAuth0 } from '@auth0/auth0-react'

export const Perfil = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        isAuthenticated && (
            <div>
                <svg class="header">
                    <rect id="header" rx="0" ry="0" x="0" y="0" width="1920" height="100">
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
                <div id="headerusuario">
                    <div id="Grupo_1">
                        <svg class="Elipse_1">
                            <ellipse id="Elipse_1" rx="22.5" ry="22.5" cx="22.5" cy="22.5">
                            </ellipse>
                        </svg>
                        <svg class="Icon_ionic-md-person" viewBox="4.5 4.5 28.397 28.397">
                            <path id="Icon_ionic-md-person" d="M 18.69868850708008 18.69868850708008 C 22.60370063781738 18.69868850708008 25.79803657531738 15.50391101837158 25.79803657531738 11.59934425354004 C 25.79803657531738 7.694777965545654 22.60370063781738 4.499999523162842 18.69868850708008 4.499999523162842 C 14.79367923736572 4.499999523162842 11.59934425354004 7.694777965545654 11.59934425354004 11.59934425354004 C 11.59934425354004 15.50391101837158 14.79367923736572 18.69868850708008 18.69868850708008 18.69868850708008 Z M 18.69868850708008 22.24836158752441 C 13.99551963806152 22.24836158752441 4.499999523162842 24.64454078674316 4.499999523162842 29.34770584106445 L 4.499999523162842 32.89737701416016 L 32.89737701416016 32.89737701416016 L 32.89737701416016 29.34770584106445 C 32.89737701416016 24.64454078674316 23.40185737609863 22.24836158752441 18.69868850708008 22.24836158752441 Z">
                            </path>
                        </svg>
                    </div>
                    <div id="Usuario">
                        <span>{user.name}</span>
                    </div>
                    <div id="Carritocompras">
                        <svg class="Icon_awesome-shopping-cart" viewBox="0 0 45.765 40.68">
                            <path id="Icon_awesome-shopping-cart" d="M 41.96039962768555 23.94051742553711 L 45.71635818481445 7.414418697357178 C 45.98752593994141 6.22120189666748 45.0805778503418 5.084953784942627 43.85692977905273 5.084953784942627 L 12.64945697784424 5.084953784942627 L 11.92119598388672 1.524691462516785 C 11.73972797393799 0.6372877359390259 10.95886898040771 0 10.05303192138672 0 L 1.906857490539551 0 C 0.8537160158157349 0 0 0.8537160158157349 0 1.906857490539551 L 0 3.178096055984497 C 0 4.231237411499023 0.8537160158157349 5.084953784942627 1.906857490539551 5.084953784942627 L 7.459229469299316 5.084953784942627 L 13.04060077667236 32.37168884277344 C 11.70532417297363 33.13959503173828 10.80552577972412 34.57942962646484 10.80552577972412 36.23029327392578 C 10.80552577972412 38.68759918212891 12.79755687713623 40.67963027954102 15.25485992431641 40.67963027954102 C 17.7121639251709 40.67963027954102 19.70419502258301 38.68759918212891 19.70419502258301 36.23029327392578 C 19.70419502258301 34.98495864868164 19.19196510314941 33.85982894897461 18.36748695373535 33.05219650268555 L 35.02444458007813 33.05219650268555 C 34.20004653930664 33.85983276367188 33.68781661987305 34.98495864868164 33.68781661987305 36.23029327392578 C 33.68781661987305 38.68759918212891 35.67984390258789 40.67963027954102 38.13714981079102 40.67963027954102 C 40.59445571899414 40.67963027954102 42.58648681640625 38.68759918212891 42.58648681640625 36.23029327392578 C 42.58648681640625 34.46867370605469 41.5625 32.94636535644531 40.07745742797852 32.22549438476563 L 40.51579666137695 30.29670906066895 C 40.78696441650391 29.10349082946777 39.8800163269043 27.96724510192871 38.6563720703125 27.96724510192871 L 17.32991790771484 27.96724510192871 L 16.80990219116211 25.42476844787598 L 40.10097503662109 25.42476844787598 C 40.9913215637207 25.42476844787598 41.76311874389648 24.80869293212891 41.96039962768555 23.94051742553711 Z">
                            </path>
                        </svg>
                        <svg class="Elipse_2">
                            <ellipse id="Elipse_2" rx="11.5" ry="11.5" cx="11.5" cy="11.5">
                            </ellipse>
                        </svg>
                        <div id="ID1">
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );


}

export default class logedHeader extends Component {
    render() {
        return (
            <div>
                <svg class="header">
                    <rect id="header" rx="0" ry="0" x="0" y="0" width="1920" height="100">
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
                <div id="headerusuario">
                    <div id="Grupo_1">
                        <svg class="Elipse_1">
                            <ellipse id="Elipse_1" rx="22.5" ry="22.5" cx="22.5" cy="22.5">
                            </ellipse>
                        </svg>
                        <svg class="Icon_ionic-md-person" viewBox="4.5 4.5 28.397 28.397">
                            <path id="Icon_ionic-md-person" d="M 18.69868850708008 18.69868850708008 C 22.60370063781738 18.69868850708008 25.79803657531738 15.50391101837158 25.79803657531738 11.59934425354004 C 25.79803657531738 7.694777965545654 22.60370063781738 4.499999523162842 18.69868850708008 4.499999523162842 C 14.79367923736572 4.499999523162842 11.59934425354004 7.694777965545654 11.59934425354004 11.59934425354004 C 11.59934425354004 15.50391101837158 14.79367923736572 18.69868850708008 18.69868850708008 18.69868850708008 Z M 18.69868850708008 22.24836158752441 C 13.99551963806152 22.24836158752441 4.499999523162842 24.64454078674316 4.499999523162842 29.34770584106445 L 4.499999523162842 32.89737701416016 L 32.89737701416016 32.89737701416016 L 32.89737701416016 29.34770584106445 C 32.89737701416016 24.64454078674316 23.40185737609863 22.24836158752441 18.69868850708008 22.24836158752441 Z">
                            </path>
                        </svg>
                    </div>
                    <div id="Usuario">
                        <span>Usuario</span>
                    </div>
                    <div id="Carritocompras">
                        <svg class="Icon_awesome-shopping-cart" viewBox="0 0 45.765 40.68">
                            <path id="Icon_awesome-shopping-cart" d="M 41.96039962768555 23.94051742553711 L 45.71635818481445 7.414418697357178 C 45.98752593994141 6.22120189666748 45.0805778503418 5.084953784942627 43.85692977905273 5.084953784942627 L 12.64945697784424 5.084953784942627 L 11.92119598388672 1.524691462516785 C 11.73972797393799 0.6372877359390259 10.95886898040771 0 10.05303192138672 0 L 1.906857490539551 0 C 0.8537160158157349 0 0 0.8537160158157349 0 1.906857490539551 L 0 3.178096055984497 C 0 4.231237411499023 0.8537160158157349 5.084953784942627 1.906857490539551 5.084953784942627 L 7.459229469299316 5.084953784942627 L 13.04060077667236 32.37168884277344 C 11.70532417297363 33.13959503173828 10.80552577972412 34.57942962646484 10.80552577972412 36.23029327392578 C 10.80552577972412 38.68759918212891 12.79755687713623 40.67963027954102 15.25485992431641 40.67963027954102 C 17.7121639251709 40.67963027954102 19.70419502258301 38.68759918212891 19.70419502258301 36.23029327392578 C 19.70419502258301 34.98495864868164 19.19196510314941 33.85982894897461 18.36748695373535 33.05219650268555 L 35.02444458007813 33.05219650268555 C 34.20004653930664 33.85983276367188 33.68781661987305 34.98495864868164 33.68781661987305 36.23029327392578 C 33.68781661987305 38.68759918212891 35.67984390258789 40.67963027954102 38.13714981079102 40.67963027954102 C 40.59445571899414 40.67963027954102 42.58648681640625 38.68759918212891 42.58648681640625 36.23029327392578 C 42.58648681640625 34.46867370605469 41.5625 32.94636535644531 40.07745742797852 32.22549438476563 L 40.51579666137695 30.29670906066895 C 40.78696441650391 29.10349082946777 39.8800163269043 27.96724510192871 38.6563720703125 27.96724510192871 L 17.32991790771484 27.96724510192871 L 16.80990219116211 25.42476844787598 L 40.10097503662109 25.42476844787598 C 40.9913215637207 25.42476844787598 41.76311874389648 24.80869293212891 41.96039962768555 23.94051742553711 Z">
                            </path>
                        </svg>
                        <svg class="Elipse_2">
                            <ellipse id="Elipse_2" rx="11.5" ry="11.5" cx="11.5" cy="11.5">
                            </ellipse>
                        </svg>
                        <div id="ID1">
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}