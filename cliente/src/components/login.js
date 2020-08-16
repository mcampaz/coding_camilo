import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Login() {
  const mystyle = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "20px",
  };

  return (
    <Container>
      <section className="mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-5">
            <Card style={mystyle}>
              <Card.Body>
                <Card.Title className="text-center">Login</Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-5 mb-2"
                    block
                  >
                    Submit
                  </Button>

                  <Form.Group controlId="formLinkRegister">
                    <Form.Text className="text-muted">
                      Don't have account?{" "}
                      <Link to="/">create a new account</Link>
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

export default Login;
