import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";

const REGISTRAR_USUARIO = gql`
  mutation Register($input: registerInput!) {
    register(registerInput: $input){
        Username
    }
  }
`;

function Register() {

  const mystyle = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "20px",
  };

  let firstName, lastName, userName, password;
  let history = useHistory();
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [register] = useMutation(REGISTRAR_USUARIO);

  const enviarForm = async (e) => {
    e.preventDefault();
    try {
      if (
        firstName.value &&
        lastName.value &&
        userName.value &&
        password.value
      ) {
        let input = {
          Username: userName.value,
          FirstName: firstName.value,
          LastName: lastName.value,
          Password: password.value,
        };

        await register({ variables: { input: input } });
        history.push("/login");
      }
    } catch (err) {
      setError(err);
      setShow(true);
    }
  };

  return (
    <Container>
      <section className="mt-4">
        <div className="row justify-content-center">
          <div className="col-sm-5">
            <Card style={mystyle}>
              <Card.Body>
                <Card.Title className="text-center">Create Account</Card.Title>
                {show ? (
                  error ? (
                    <Alert
                      className="mt-3"
                      variant="danger"
                      onClose={() => setShow(false)}
                      dismissible
                    >
                      Error register user
                    </Alert>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                <Form onSubmit={(e) => enviarForm(e)}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      ref={(node) => {
                        firstName = node;
                      }}
                      type="text"
                      placeholder="Enter first name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      ref={(node) => {
                        lastName = node;
                      }}
                      type="text"
                      placeholder="Enter last name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      ref={(node) => {
                        userName = node;
                      }}
                      type="text"
                      placeholder="Enter user name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      ref={(node) => {
                        password = node;
                      }}
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-5 mb-2"
                    block
                  >
                    Create Account
                  </Button>

                  <Form.Group controlId="formLinkRegister">
                    <Form.Text className="text-muted">
                      Already have account? <Link to="/login">Login</Link>
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Register;
