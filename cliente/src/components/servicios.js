import React, { Component } from "react";
import Navbar from "./navBar";
import AuthContext from "../context/auth-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ImgServicios from "../assets/img/serviciosHeader.jpg";

export default class Servicios extends Component {
  render() {
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
                      <h1>Nuestros servicios</h1>
                    </div>
                    <div className="col-12">
                      <Image
                        src={ImgServicios}
                        width="100%"
                        height="250"
                        fluid
                      />
                    </div>
                  </div>
                </header>
                <Container>
                  <section className="mt-4">
                    <div className="row">
                      <div className="col-12 mt-3">
                        <Card>
                          <Card.Body>
                            <Card.Title>Servicio 1</Card.Title>
                            <Card.Text>
                              With supporting text below as a natural lead-in to
                              additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-12 mt-3">
                        <Card>
                          <Card.Body>
                            <Card.Title>Servicio 2</Card.Title>
                            <Card.Text>
                              With supporting text below as a natural lead-in to
                              additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-12 mt-3">
                        <Card>
                          <Card.Body>
                            <Card.Title>Servicio 3</Card.Title>
                            <Card.Text>
                              With supporting text below as a natural lead-in to
                              additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
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
