import React from "react";
import Navbar from "../navBar";
import AuthContext from "../../context/auth-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Img2 from '../../assets/img/img2.jpg'
import ImgCa01 from '../../assets/img/imgCa01.jpg'
import ImgCa02 from '../../assets/img/imgCa02.jpg'
function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImgCa01}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImgCa02}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function Catalogo() {
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
                    <h1>Nuestro Catalogo</h1>
                  </div>
                </div>
              </header>
              <Container>
                <section className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <Card>
                        <Card.Body>
                          <div className="row">
                            <div class="col-6">
                              <Card.Title>Special title treatment</Card.Title>
                              <Card.Text>
                                With supporting text below as a natural lead-in
                                to additional contentsdadasdasdasdasdasdasdas.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </div>
                            <div class="col-6">
                              <Carrusel />
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-12">
                      <Carrusel />
                    </div>
                    <div className="col-12">
                      <Card>
                        <Card.Body>
                          <div className="row">
                            <div class="col-6">
                              <Carrusel />
                            </div>
                            <div class="col-6">
                              <Card.Title>Special title treatment</Card.Title>
                              <Card.Text>
                                With supporting text below as a natural lead-in
                                to additional contentsdadasdasdasdasdasdasdas.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
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

export default Catalogo;
