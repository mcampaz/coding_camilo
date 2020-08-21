import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthContext from "../context/auth-context";

import App from "./lista";
import Login from "./login";
import Register from "./register";
import PaginaPrincipal from './paginaPrincipal';
import PageCliente from './pageCliente';

export default class AppMain extends Component {

    state = {
        token: null,
        userID: null,
        Rol: null
    }

  login = (token, userID, Rol, tokenExpiration) => {
      this.setState({
        token: token,
        userID: userID,
        Rol: Rol
      });
  };
  logout = () => {
    this.setState({
        token: null,
        userID: null,
        Rol: null
      });
      localStorage.removeItem('token');
  };

  render() {
    return (
      <Router>
        <AuthContext.Provider
          value={{ token: this.state.token, userID: this.state.userID, Rol: this.state.Rol, login: this.login, logout: this.logout }}
        >
          <Switch>
            {!this.state.token && <Redirect from="/" to="/login" exact />}
            {!this.state.token && <Redirect from="/users" to="/login" exact />}
            {!this.state.token && <Redirect from="/paginaPrincipal" to="/login" exact />}
            {!this.state.token && <Redirect from="/cliente" to="/login" exact />}
            {this.state.token && <Redirect from="/login" to="/paginaPrincipal" exact />}

            {!this.state.token && <Route exact path="/login" component={Login} />}
            {!this.state.token && <Route path="/register" component={Register} />}
            {this.state.token && this.state.Rol ==="Administrador" && <Route path="/users" component={App} />}
            {this.state.token && <Route path="/paginaPrincipal" component={PaginaPrincipal} />}
            {this.state.token && <Route path="/cliente" component={PageCliente} />}
            {this.state.token && <Route path="/gerente" component={PaginaPrincipal} />}
            {this.state.token && <Route path="/vendedor" component={PaginaPrincipal} />}
            {this.state.token && <Route path="/inventoria" component={PaginaPrincipal} />}
          </Switch>
        </AuthContext.Provider>
      </Router>
    );
  }
}
