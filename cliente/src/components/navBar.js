import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.svg";
import AuthContext from "../context/auth-context";
import { NavLink } from "react-router-dom";

const navBar = (props) => {

    
  return (
    <AuthContext.Consumer>
      {(context) => {
        
        return (
          <Navbar variant="dark" bg="dark">
            <Navbar.Brand>
              <NavLink to="/paginaPrincipal" >
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                <strong>ACME company inc</strong>
              </NavLink>
            </Navbar.Brand>
            <Nav className="mr-auto">
              {context.token && context.Rol === "Administrador" && (
                <NavLink to="/users">Admin Users</NavLink>
              )}
            </Nav>
            <Nav>
              {!context.token && <NavLink to="/login">Login</NavLink>}
              {context.token && <Nav.Link onClick={context.logout}>Logout</Nav.Link>}
            </Nav>
          </Navbar>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default navBar;