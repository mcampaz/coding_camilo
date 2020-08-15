import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Example({user}) {

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
        setShow(false)
    };
    const handleShow = () => {
        inputDefault();
        setShow(true)};   

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
          <Form>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control defaultValue={input.fields.FirstName} onChange={e => setInput({fields: {FirstName: e.target.value}})} type="text" placeholder="Enter FirstName" />
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control defaultValue={input.fields.LastName} onChange={e => setInput({fields: {LastName: e.target.value}})} type="text" placeholder="Enter LastName" />
            </Form.Group>
            <Form.Group controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control defaultValue={input.fields.Username} onChange={e => setInput({fields: {Username: e.target.value}})} type="text" placeholder="Enter UserName" />
            </Form.Group>
            <Form.Group controlId="formSelectRol">
                <Form.Label>Rol</Form.Label>
                <Form.Control as="select" defaultValue={input.fields.Rol} >                    
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
  
export default Example;