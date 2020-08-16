import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CrearUSer() {

    let firstName, lastName, userName, rol, password;
    
    const [show, setShow] = useState(false);

    const handleClose = () => {     
        setShow(false)
    };

    const handleShow = () => {
        setShow(true)
    };   

    const enviarForm =(e) => {
      e.preventDefault();
      if(firstName.value && lastName.value && userName.value && (rol.value && rol.value !== 'DEFAULT') && password) {
        handleClose();
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