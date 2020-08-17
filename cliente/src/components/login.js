import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";

export default class Login extends Component {
  state = {
    isLogin: false,
  };

  static contextType = AuthContext;

  render() {
    const mystyle = {
      color: "black",
      backgroundColor: "white",
      padding: "10px",
      borderRadius: "20px",
    };

    let userName, password;
    const enviarForm = async (e) => {
      e.preventDefault();
      try {
        if (!userName.value || !password.value) {
          return;
        } else {
          const LOGIN = {
            query: `
            query {
                login(loginInput: {
                  Username:"${userName.value}",
                  Password: "${password.value}"
                }){
                  UserID,
                  Username,
                  Token,
                  TokenSpiration,
                  Rol
                }
            }`,
          };

          const result = await fetch("http://localhost:4000/graphql", {
            method: "POST",
            body: JSON.stringify(LOGIN),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (result.status === 200 || result.status === 201) {
            const resultPromise = await result.json();
            if (resultPromise.data.login.Token) {
              this.setState({ isLogin: true });
              this.context.login(
                resultPromise.data.login.Token,
                resultPromise.data.login.UserID,
                resultPromise.data.login.Rol,
                resultPromise.data.TokenSpiration
              );
            }
          } else {
            throw new Error("Failed");
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Container>
        <section className="mt-5">
          <div className="row justify-content-center">
            <div className="col-sm-5">
              <Card style={mystyle}>
                <Card.Body>
                  <Card.Title className="text-center">Login</Card.Title>
                  <Form onSubmit={(e) => enviarForm(e)}>
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
                      Login
                    </Button>

                    <Form.Group controlId="formLinkRegister">
                      <Form.Text className="text-muted">
                        Don't have account?{" "}
                        <Link to="/register">create a new account</Link>
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
}
