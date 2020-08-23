import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { gql, useMutation } from "@apollo/client";
import Alert from "react-bootstrap/Alert";

const ACTUALIZAR_SERVICIO = gql`
  mutation UpdateServicio($input: updateServicioInput!) {
    updateServicio(updateServicioInput: $input)
  }
`;

function EditarServicio({ servicio }) {
  let title, description;
  const [updateServicio] = useMutation(ACTUALIZAR_SERVICIO);
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    fields: {
      Title: "",
      Description: "",
    },
  });

  const inputDefault = () =>
    setInput({
      fields: {
        Title: servicio.Title,
        Description: servicio.Description,
      },
    });

  const handleClose = () => {
    inputDefault();
    setShow(false);
    setError("");
  };

  const handleShow = () => {
    inputDefault();
    setShow(true);
  };

  const enviarForm = async (e) => {
    e.preventDefault();
    try {
      if (title.value && description.value) {
        let input = {
          _id: servicio._id,
          Title: title.value,
          Description: description.value,
        };
        await updateServicio({ variables: { input: input } });
        handleClose();
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <Button className="mr-2" variant="warning" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => enviarForm(e)}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={(node) => {
                  title = node;
                }}
                defaultValue={input.fields.Title}
                onChange={(e) =>
                  setInput({ fields: { Title: e.target.value } })
                }
                type="text"
                placeholder="Enter Title"
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Description</Form.Label>
              <Form.Control
                ref={(node) => {
                  description = node;
                }}
                defaultValue={input.fields.Description}
                onChange={(e) =>
                  setInput({ fields: { Description: e.target.value } })
                }
                as="textarea"
                rows="3"
                placeholder="Enter Description"
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

export default EditarServicio;