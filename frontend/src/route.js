import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import login from './login'

export default class route extends Component {
    render() {
        return (
            <Route path = "/" component = {App}>
                <Route path = "/login" component = {login} />

            </Route>
        )
    }
}
