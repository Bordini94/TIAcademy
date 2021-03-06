import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {
    console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id)

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    console.log(response.data.servico);
                    setData(response.data.servico);
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a Api.")
                })
        }
        getServico();
    }, [id]);

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex">
                    <div className="mr-auto">
                        <h2>Informações do Serviço</h2>
                    </div>
                </div>
                <hr />
                <div className="m-1">
                    <dl className="row pt-2">
                        <dt className="col-sm-3">Nome</dt>
                        <dd className="col-sm-9">{data.nome}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Descrição</dt>
                        <dd className="col-sm-9">{data.descricao}</dd>
                    </dl>
                </div>
                <hr />
                <div className="pt-2">
                    <Link to={"/editarservico/" + data.id}
                        className="btn btn-outline-warning btn-sm m-1 ">Editar</Link>
                    <Link to="/listadeservicos"
                        className="btn btn-outline-primary btn-sm m-1">Voltar
                    </Link>
                </div>

            </Container>
        </div>
    );
}