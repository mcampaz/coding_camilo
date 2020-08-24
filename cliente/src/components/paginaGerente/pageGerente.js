import React, { Component } from "react";
import Navbar from "../navBar";
import AuthContext from "../../context/auth-context";
import Container from "react-bootstrap/Container";
import TableUSers from "./tablaUsers";

export default class PageGerente extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          if (context.token && context.Rol === "Gerente") {
            return (
              <>
                <Navbar />
                <Container>
                  <section className="mt-4">
                    <div className="row">
                      <div className="col-12">
                        <h1>Esta es la pagina del Gerente</h1>
                      </div>
                      <div className="col-12">
                        <TableUSers />
                      </div>
                    </div>
                  </section>
                </Container>
              </>
            );
          }
        }}
      </AuthContext.Consumer>
    );
  }
}
