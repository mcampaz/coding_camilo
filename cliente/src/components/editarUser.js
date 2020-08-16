import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { gql, useMutation } from '@apollo/client';
import Alert from 'react-bootstrap/Alert';

const ACTUALIZAR_USUARIO = gql`
    mutation ActualizarUser($input: updateInput!){
      updateUser(updateInput: $input)
    }
`;

function EditarUSer({user}) {

    let firstName, lastName, userName, rol;

    const [updateUser] = useMutation(ACTUALIZAR_USUARIO);

    const [error, setError] = useState();
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({fields: {
        FirstName: '',
        LastName: '',
        Username: '',
        Rol: ''
    }});

    const inputDefault = () => setInput({fields: {
            FirstName: user.FirstName,
            LastName: user.LastName,
            Username: user.Username,
            Rol: user.Rol
        }});   

    const handleClose = () => {
        inputDefault();      
        setShow(false);
        setError('');
    };

    const handleShow = () => {
        inputDefault();
        setShow(true)
    };   

    const enviarForm = async (e) => {
      e.preventDefault();
      try {
        if(firstName.value && lastName.value && userName.value && rol.value) {
          let input = {
                _id: user._id,
                Username: userName.value,
                FirstName: firstName.value,
                LastName: lastName.value,
                Rol: rol.value
              }
          await updateUser({ variables: { input: input } });
          handleClose();
        }
      } catch (err) {
        setError(err);
      }        
    }

    return (
      <>
        <Button className="mr-2" variant="warning" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={e => enviarForm(e)}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control ref={(node) => {firstName = node}} defaultValue={input.fields.FirstName} onChange={e =>setInput({fields: {FirstName: e.target.value}})} type="text" placeholder="Enter FirstName" />
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control ref={(node) => {lastName = node}} defaultValue={input.fields.LastName} onChange={e => setInput({fields: {LastName: e.target.value}})} type="text" placeholder="Enter LastName" />
            </Form.Group>
            <Form.Group controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control ref={(node) => {userName = node}} defaultValue={input.fields.Username} onChange={e => setInput({fields: {Username: e.target.value}})} type="text" placeholder="Enter UserName" />
            </Form.Group>
            <Form.Group controlId="formSelectRol">
                <Form.Label>Rol</Form.Label>
                <Form.Control ref={(node) => {rol = node}} as="select" defaultValue={input.fields.Rol} onChange={e => setInput({fields: {Rol: e.target.value}})} >                    
                    <option value="Administrador">Administrador</option>
                    <option value="Gerente">Gerente</option>
                    <option value="Inventoria">Inventoria</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Cliente">Cliente</option>
                </Form.Control>
            </Form.Group>
            <div className="text-center">
                <Button className="text-center" variant="primary" type="submit">
                    Submit
                </Button>
            </div>
            </Form>
            {error ? <Alert className="mt-3" variant="danger">Error al guardar en la Base de Datos</Alert> : ''}
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
  
export default EditarUSer;