import React, { Component } from "react";
import Navbar from "./navBar";
import AuthContext from "../context/auth-context";
import Container from "react-bootstrap/Container";

export default class PageCliente extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          if (context.token && context.Rol === "Cliente") {
              return (<>
                <Navbar />
                <Container>
                  <section className="mt-4">
                    <div className="row">
                        <div className="col-12">
                            <h1>Esta es la pagina de Cliente</h1>
                        </div>
                    </div>
                  </section>
                </Container>
              </>);
          }
        }}
      </AuthContext.Consumer>
    );
  }
}
