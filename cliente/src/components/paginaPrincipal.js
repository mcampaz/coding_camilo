import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "./navBar";
import AuthContext from "../context/auth-context";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import "../assets/css/paginaPrincipalCss/paginaPrincipal.css";

export default class PaginaPrincipal extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          return (
            <>
              <Navbar />
              <Container>
                <header className="mt-4">
                  <div className="row justify-content-center text-center">
                    <div className="col-12">
                      <h1 className="scale-in-center">
                        <strong>Bienvenido</strong>
                      </h1>
                      <h4 className="scale-in-center">{context.Rol}</h4>
                    </div>
                  </div>
                </header>
                <section className="mt-4">
                  <div className="row">
                    <div className="col-4">
                      <Link to="/servicios" className="text-link">
                        <Card className="animacionBtn">
                          <Card.Img
                            variant="top"
                            src={img1}
                            loading="lazy"
                            width="200"
                            height="200"
                          />
                          <Card.Body>
                            <Card.Title>Servicios</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link to="/catalogo" className="text-link">
                        <Card className="animacionBtn">
                          <Card.Img
                            variant="top"
                            src={img2}
                            loading="lazy"
                            width="200"
                            height="200"
                          />
                          <Card.Body>
                            <Card.Title>Catalago</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link to="/clientes" className="text-link">
                        <Card className="animacionBtn">
                          <Card.Img
                            variant="top"
                            src={img3}
                            loading="lazy"
                            width="100"
                            height="200"
                          />
                          <Card.Body>
                            <Card.Title>Clientes</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  </div>
                </section>
              </Container>
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}
