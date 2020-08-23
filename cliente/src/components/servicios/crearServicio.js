import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { gql, useMutation } from "@apollo/client";
import Alert from "react-bootstrap/Alert";

const CREAR_SERVICIO = gql`
  mutation CreateServicio($input: createServicioInput!) {
    createServicio(createServicioInput: $input) {
      Title
    }
  }
`;

function CrearServicio() {
  let title, description;

  const [createServicio] = useMutation(CREAR_SERVICIO);
  const [show, setShow] = useState(false);
  const [error, setError] = useState();

  const handleClose = () => {
    setShow(false);
    setError("");
  };

  const handleShow = () => {
    setShow(true);
  };

  const enviarForm = async (e) => {
    e.preventDefault();
    try {
      if (title.value && description.value) {
        let input = {
          Title: title.value,
          Description: description.value,
        };
        await createServicio({ variables: { input: input } });
        handleClose();
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <Button className="mr-2" variant="info" onClick={handleShow}>
        Crear Nuevo Servicio
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Nuevo Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => enviarForm(e)}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={(node) => {
                  title = node;
                }}
                type="text"
                placeholder="Enter Title"
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Description</Form.Label>
              <Form.Control
                ref={(node) => {
                  description = node;
                }}
                as="textarea"
                rows="3"
                placeholder="Enter Description"
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button className="text-center" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          {error ? (
            <Alert className="mt-3" variant="danger">
              Error al guardar en la Base de Datos
            </Alert>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CrearServicio;
