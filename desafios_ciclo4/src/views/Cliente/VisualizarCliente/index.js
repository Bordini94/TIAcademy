import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap';
import { api, headers } from '../../../config';

export const VisualizarCliente = () => {


    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);

            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a Api.'
                });

            });

    }

    const apagarCliente = async (idCliente) => {
        console.log("excluir cliente id " + idCliente);
        await axios.delete(api + "/apagarcliente/" + idCliente, { headers })
            .then((response) => {
                getClientes();
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    });
                }

            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: "Erro: Não foi possível conectar a Api."
                });
            });
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="p-3">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Lista de Clientes</h2>
                    </div>

                </div>

                <Table striped hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th>Ações</th>


                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/" + item.id}
                                        className="btn btn-outline-info btn-sm m-1">Consultar</Link>
                                    <Link to={"/editarcliente/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarCliente(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                <div className="pt-2">
                    <Link to="/cadastrarcliente"
                        className="btn btn-outline-success btn-sm m-1">Adicionar Cliente
                    </Link>
                    <Link to="/"
                        className="btn btn-outline-primary btn-sm m-1">Voltar
                    </Link>
                </div>

            </Container>
        </div>
    )
}