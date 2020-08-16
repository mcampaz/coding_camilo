import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { gql, useMutation } from '@apollo/client';
import Alert from 'react-bootstrap/Alert';

const CREAR_USUARIO = gql`
    mutation RegistrarUser($input: userInput!){
        registrarUser(userInput: $input){
            Username
        }
    }
`;

function CrearUSer() {

    let firstName, lastName, userName, rol, password;

    const [registrarUser] = useMutation(CREAR_USUARIO);
    const [show, setShow] = useState(false);
    const [error, setError] = useState();

    const handleClose = () => {     
        setShow(false);
        setError('');
    };

    const handleShow = () => {
        setShow(true)
    };   

    const enviarForm = async (e) => {
        e.preventDefault();
        try {           
            if(firstName.value && lastName.value && userName.value && (rol.value && rol.value !== 'DEFAULT') && password.value) {
                let input = {
                        Username: userName.value,
                        Password: password.value,
                        FirstName: firstName.value,
                        LastName: lastName.value,
                        Rol: rol.value,
                };

                await registrarUser({ variables: { input: input } });
                handleClose();
            }
        } catch (err) {
            setError(err);
        }
    }

    return (
      <>        
        <Button className="mr-2" variant="info" onClick={handleShow}>
          New User
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={e => enviarForm(e)}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control ref={(node) => {firstName = node}}  type="text" placeholder="Enter FirstName" required/>
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control ref={(node) => {lastName = node}}  type="text" placeholder="Enter LastName" required/>
            </Form.Group>
            <Form.Group controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control ref={(node) => {userName = node}}  type="text" placeholder="Enter UserName" required/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={(node) => {password = node}}  defaultValue={'1234567'} type="text" placeholder="Enter Password" required/>
            </Form.Group>
            <Form.Group controlId="formSelectRol">
                <Form.Label>Rol</Form.Label>
                <Form.Control ref={(node) => {rol = node}} as="select" defaultValue={'DEFAULT'} required>  
                    <option value="DEFAULT" disabled>Choose Rol</option>                  
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
  
export default CrearUSer;