import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from './navBar'

export default class PaginaPrincipal extends Component {

  render() {
      return (
            <>
            <Navbar />
                <Container>
                    <div className="row">
                        <div className="col-6">
                            <h1>Bienvenido a la aplicacion</h1>
                        </div>
                    </div>
                </Container>
            </>
      );
  }
}