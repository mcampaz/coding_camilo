import React from "react";
import Navbar from "../navBar";
import AuthContext from "../../context/auth-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function TarjetaCliente({ text }) {
  return (
    <div className="col-4 mt-2">
      <Card className="text-center">
        <Card.Body>{text}</Card.Body>
      </Card>
    </div>
  );
}

function Clientes() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        if (context.token) {
          return (
            <>
              <Navbar />
              <header>
                <div className="row text-center mt-2">
                  <div className="col-12">
                    <h1>Nuestros Clientes</h1>
                  </div>
                </div>
              </header>
              <Container>
                <section className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <h2>Historia de Clientes</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a maximus elit. Integer fermentum erat vel dui
                        feugiat accumsan. Pellentesque rutrum rhoncus nisi, ut
                        tempor risus bibendum eget. Pellentesque bibendum arcu
                        sit amet mattis interdum. Etiam sit amet commodo lorem.
                        Maecenas tempor enim ac erat consectetur, in mattis
                        neque pellentesque. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus. Vivamus eu velit ut libero
                        venenatis accumsan. Sed dapibus ut enim a luctus.
                        Integer ipsum dui, ultricies nec tellus a, vehicula
                        mollis tellus. Donec convallis venenatis ante a
                        facilisis. Curabitur volutpat elit tellus, non dignissim
                        nulla ullamcorper eu. Nam ac sollicitudin ante.
                      </p>
                    </div>
                    <TarjetaCliente text="cliente 1"/>
                    <TarjetaCliente text="cliente 2"/>
                    <TarjetaCliente text="cliente 3"/>
                    <TarjetaCliente text="cliente 4"/>
                    <TarjetaCliente text="cliente 5"/>
                    <TarjetaCliente text="cliente 6"/>
                  </div>
                </section>
                <br />
                <br />
              </Container>
            </>
          );
        }
      }}
    </AuthContext.Consumer>
  );
}

export default Clientes;
