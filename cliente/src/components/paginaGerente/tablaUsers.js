import React from "react";
import { MDBDataTable } from "mdbreact";
import { gql, useQuery } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const MOSTRAR_USUARIO = gql`
  query {
    usuarios {
      Username
      FirstName
      LastName
      fechaCreacion
      Rol
    }
  }
`;

function TablaUsers() {
  const { loading, error, data } = useQuery(MOSTRAR_USUARIO);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  var datos = [];
  const recorrerDatos = () => {
    var obj = {};
    data.usuarios.forEach((element) => {
      obj = {};
      obj.FirstName = element.FirstName;
      obj.LastName = element.LastName;
      obj.Rol = element.Rol;
      obj.Username = element.Username;
      datos.push(obj);
    });
  };

  recorrerDatos();

  const dataTable = {
    columns: [
      {
        label: "First Name",
        field: "FirstName",
        sort: "asc",
        width: 200,
      },
      {
        label: "Last Name",
        field: "LastName",
        sort: "asc",
        width: 200,
      },
      {
        label: "Rol",
        field: "Rol",
        sort: "asc",
        width: 200,
      },
      {
        label: "User Name",
        field: "Username",
        sort: "asc",
        width: 200,
      },
    ],
    rows: datos,
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Users</Card.Title>
        <MDBDataTable striped bordered small data={dataTable} />
      </Card.Body>
    </Card>
  );
}

export default TablaUsers;
