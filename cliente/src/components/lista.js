import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { gql, useQuery } from '@apollo/client';

const MOSTRAR_USUARIO = gql`
    query{
        usuarios{
        _id,
        Username,
        FirstName,
        LastName,
        fechaCreacion,
        Rol
        }
    }
`;

function Lista() {

    const { loading, error, data } = useQuery(MOSTRAR_USUARIO);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
        <Container>
            <header className="mt-2">
                <h2>CRUD Data Base</h2>
            </header>
            <section className="mt-4">
                <div className="row justify-content-center">
                    <div className="col-12">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Rol</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.usuarios.map((user, i) => (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{user.FirstName}</td>
                                    <td>{user.LastName}</td>
                                    <td>{user.Username}</td>
                                    <td>{user.Rol}</td>
                                    <td><Button variant="warning" className="mr-3">Edit</Button><Button variant="danger">Del</Button></td>
                                </tr>
                             ))}
                        </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </Container>

    )

}

export default Lista;