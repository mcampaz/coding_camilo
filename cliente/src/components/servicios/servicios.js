import React from "react";
import Navbar from "../navBar";
import AuthContext from "../../context/auth-context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ImgServicios from "../../assets/img/serviciosHeader.jpg";
import { gql, useQuery, useMutation } from "@apollo/client";

import CrearServicio from "./crearServicio";
import EditarServicion from "./editarServicios";

const MOSTRAR_SERVICIOS = gql`
  query {
    servicios {
      _id
      Title
      Description
    }
  }
`;

const ELIMINAR_SERVICIO = gql`
  mutation DeleteServicio($id: ID!) {
    deleteServicio(_id: $id)
  }
`;

function Servicios() {
  const { loading, error, data, refetch } = useQuery(MOSTRAR_SERVICIOS);
  const [deleteServicio] = useMutation(ELIMINAR_SERVICIO);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const eliminarServicio = (obj) => {
    deleteServicio({ variables: { id: obj._id } });
  };

  refetch();

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
                    <div className="col-4">
                      {(context.Rol === "Administrador" ||
                        context.Rol === "Gerente") && (
                        <>
                          <CrearServicio />{" "}
                          <Button
                            variant="success"
                            onClick={() => refetch()}
                          >
                            Refresh
                          </Button>
                        </>
                      )}
                    </div>
                    {data.servicios.map((servicio, i) => (
                      <div key={i} className="col-12 mt-3">
                        <Card>
                          {(context.Rol === "Administrador" ||
                            context.Rol === "Gerente") && (
                            <Card.Header as="h5">
                              <div className="row justify-content-end">
                                <div className="col-4 text-right">
                                  <EditarServicion  servicio = {servicio}/>
                                  <Button
                                    variant="danger"
                                    onClick={(e) => eliminarServicio(servicio)}
                                  >
                                    Eliminar
                                  </Button>
                                </div>
                              </div>
                            </Card.Header>
                          )}
                          <Card.Body>
                            <Card.Title>{servicio.Title}</Card.Title>
                            <Card.Text>{servicio.Description}</Card.Text>
                            <Button variant="primary">Ver detalles</Button>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
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

export default Servicios;
