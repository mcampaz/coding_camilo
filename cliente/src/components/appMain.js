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
  };

  render() {
    return (
      <Router>
        <AuthContext.Provider
          value={{ token: this.state.token, userID: this.state.userID, Rol: this.state.Rol, login: this.login }}
        >
          <Switch>
            {!this.state.token && <Redirect from="/" to="/login" exact />}
            {!this.state.token && <Redirect from="/users" to="/login" exact />}
            {this.state.token && <Redirect from="/login" to="/users" exact />}
            {this.state.token && <Redirect from="/" to="/users" exact />}
            {!this.state.token && <Route exact path="/login" component={Login} />}
            {!this.state.token && <Route exact path="/register" component={Register} />}
            {this.state.token && <Route exact path="/users" component={App} />}
          </Switch>
        </AuthContext.Provider>
      </Router>
    );
  }
}
