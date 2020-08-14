import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
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
            <section className="mt-4">
                <div className="row justify-content-center">
                    <div className="col-6">
                    <ListGroup>
                        {data.usuarios.map(user=> (
                            <ListGroup.Item key={user.Username}>{user.FirstName} {user.LastName}: {user.Rol } {user.Username}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    </div>
                </div>
            </section>
        </Container>

    )

}

export default Lista;