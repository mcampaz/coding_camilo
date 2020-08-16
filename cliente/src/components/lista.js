import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { gql, useQuery, useMutation } from '@apollo/client';
import EditUser from './editarUser';
import NewUser from './crearUser';

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

const ELIMINAR_USUARIO = gql`
    mutation EliminarUser($id: String!){
        eliminarUser(_id: $id)
    }
`;

function Lista() {

    const { loading, error, data } = useQuery(MOSTRAR_USUARIO, {pollInterval: 500});
    const [eliminarUser] = useMutation(ELIMINAR_USUARIO)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
 
    const deleteRow = (obj) => {
        eliminarUser({ variables: {id: obj._id } });
    }

    return (
        <Container>
            <header className="mt-2">
                <h2>CRUD Data Base</h2>
            </header>            
            <section className="mt-4">
                
                <NewUser />
                <div className="row justify-content-center mt-3">
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
                                    <td className="font-weight-bold">{i}</td>
                                    <td>{user.FirstName}</td>
                                    <td>{user.LastName}</td>
                                    <td>{user.Username}</td>
                                    <td>{user.Rol}</td>
                                    <td><EditUser user={user}/><Button variant="danger" onClick={() =>  deleteRow(user)}>Del</Button></td>
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