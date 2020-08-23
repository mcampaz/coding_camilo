import React from "react";
import Navbar from "./navBar";
import AuthContext from "../context/auth-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ImgServicios from "../assets/img/serviciosHeader.jpg";
import { gql, useQuery } from "@apollo/client";

const MOSTRAR_SERVICIOS = gql`
  query {
    servicios {
      _id
      Title
      Description
    }
  }
`;

function Servicios() {
  const { loading, error, data } = useQuery(MOSTRAR_SERVICIOS);

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

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
                    <Image src={ImgServicios} width="100%" height="250" fluid />
                  </div>
                </div>
              </header>
              <Container>
                <section className="mt-4">
                  <div className="row">
                    {data.servicios.map((servicio, i) => (
                      <div key={i} className="col-12 mt-3">
                        <Card>
                          <Card.Body>
                            <Card.Title>{servicio.Title}</Card.Title>
                            <Card.Text>{servicio.Description}</Card.Text>
                            <Button variant="primary">Ver mas</Button>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
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

export default Servicios;
