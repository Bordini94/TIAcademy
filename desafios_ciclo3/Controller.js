const express = require('express');
const cors = require('cors');
const { Op } = require('sequelize');

const models = require('./models');
const { Sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.itemPedido;
let servico = models.Servico;
let pedido = models.Pedido;

app.post('/servicos', async (req, res) => {
    function aguardar(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve.ms)
        });
    };

    await servico.create(
        req.body
    ).then(() => {
        return res.json({
            error: false,
            message: 'Serviço criado com sucesso!'
        })
    });

    await aguardar(3000);

});

app.get('/', function (req, res) {
    res.send("Olá Mundo!");
});

app.get('/clientes', function (req, res) {
    res.send("Sejam bem-vindos(as) a Services TI!");
});

//// exercício - aula 5 ////

app.get('/servicos', function (req, res) {
    res.send("Serviço criado com sucesso!");
});

app.get('/pedidos', function (req, res) {
    res.send("Pedido inserido com sucesso!");
});

//// exercício - aula 6 ////

app.get('/servicos', async (req, res) => {
    let create = await servico.create({
        nome: "Nodejs",
        descricao: "Desenvolvimento de aplicação back-end",
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send('Serviço criado com sucesso!');   
});

app.get('/clientes', async (req, res) => {
    let create = await cliente.create({
        nome: 'Eduardo B. S. Lima',
        endereco: 'Av. S. Paulo, 2827',
        cidade: 'Maringá',
        uf: 'PR',
        nascimento: '1994-07-06'
    });
    res.send('Cliente foi inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 1,
        idServico: 1,
        valor: 1.99,
        data: '2021-10-18'
    });
    res.send('Pedido inserido com sucesso!');
});

//// exercício - aula 7 ////

app.get('/clientes', async (req, res) => {
    let create = await cliente.create({
        nome: 'Nayane Salvadego',
        endereco: 'Av. S. Paulo, 2827',
        cidade: 'Maringá',
        uf: 'PR',
        nascimento: '1998-10-31'
    });
    res.send('Cliente foi inserido com sucesso!');
});

app.get('/clientes', async (req, res) => {
    let create = await cliente.create({
        nome: 'Henrique Bordini Salvadego Lima',
        endereco: 'Av. S. Paulo, 2827',
        cidade: 'Maringá',
        uf: 'PR',
        nascimento: '2020-06-19'
    });
    res.send('Cliente foi inserido com sucesso!');
});

app.get('/clientes', async (req, res) => {
    let create = await cliente.create({
        nome: 'Edson de S. Lima',
        endereco: 'Av. S. Paulo, 2827',
        cidade: 'Maringá',
        uf: 'PR',
        nascimento: '1964-02-23'
    });
    res.send('Cliente foi inserido com sucesso!');
});

app.get('/clientes', async (req, res) => {
    let create = await cliente.create({
        nome: 'Sueli Ap. B. Lima',
        endereco: 'Av. S. Paulo, 2827',
        cidade: 'Maringá',
        uf: 'PR',
        nascimento: '1967-02-25'
    });
    res.send('Cliente foi inserido com sucesso!');
});

app.get('/clientes', async (req, res) => {
    let create = await cliente.create({
        nome: 'Elisa B. S. Lima',
        endereco: 'Av. S. Paulo, 2827',
        cidade: 'Maringá',
        uf: 'PR',
        nascimento: '2001-09-14'
    });
    res.send('Cliente foi inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 2,
        idServico: 2,
        valor: 2.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 3,
        idServico: 3,
        valor: 3.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 4,
        idServico: 4,
        valor: 4.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 5,
        idServico: 5,
        valor: 5.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 6,
        idServico: 6,
        valor: 6.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 7,
        idServico: 7,
        valor: 7.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 8,
        idServico: 8,
        valor: 8.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 9,
        idServico: 9,
        valor: 9.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 10,
        idServico: 10,
        valor: 10.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create({
        idCliente: 11,
        idServico: 11,
        valor: 11.99,
        data: '2021-10-19'
    });
    res.send('Pedido inserido com sucesso!');
});

//// exercício - aula 9 ////

app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        raw: true
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});

app.get('/listaclientesAntigo', async (req, res) => {
    await cliente.findAll({
        order: [['createdAt', 'ASC']]
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});

app.get('/todospedidos', async (req, res) => {
    await pedido.findAll({
        raw: true
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

app.get('/listapedidosCrescente', async (req, res) => {
    await pedido.findAll({
        order: [['id', 'ASC']]
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

app.get('/totalcliente', async (req, res) => {
    await cliente.count('id').then((cliente) => {
        res.json(cliente)
    });
});

app.get('/totalpedidos', async (req, res) => {
    await pedido.count('id').then((pedido) => {
        res.json(pedido)
    });
});

//// exercício - aula 12 ////

app.get('/servico/:id', async (req, res) => {
    await servico.findByPk(req.params.id)
        .then((servicos) => {
            return res.json({
                error: false,
                servicos
            })
        }).catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Erro: Código não cadastrado"
            });
        });
});

app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});

app.get('/pedidoId/:id', async (req, res) => {
    await pedido.findAll({
        where: {
            Id: req.params.id
        },

        include: [{
            all: true
        }]
    }).then((pedido) => {
        return res.json({
            pedido
        })
    });
});

app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: {
            id: req.body.id
        }
    })
        .then(() => {
            return res.json({
                error: false,
                message: "Pedido alterado com sucesso!"
            });
        })
        .catch(() => {
            return res.status(400).json(
                {
                    error: true,
                    message: "Erro ao atualizar."

                });
        });
});

app.get('/todospedidosCliente/:id', async (req, res) => {
    await pedido.findAll({
        where: {

        },
        include: [{
            all: true
        }]
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

app.put('/editarpedidoporcliente', (req, res) => {
    pedido.update(req.body, {
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido atualizado com sucesso!"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar."
        })
    })
});

app.post('/pedido', async (req, res) => {
    let create = await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido com sucesso!');
});

// app.get('/servicos', async (req, res) => {
//     let create = await servico.create({
//         nome: "HTML/CSS",
//         descricao: "Páginas estáticas estilizadas",
//         createAt: new Date(),
//         updateAt: new Date()
//     });
//     res.send('Serviço criado com sucesso!');
// });

// app.post('/servicos', async (req, res) => {
//     let create = await servico.create({
//         nome: "Delphi",
//         descricao: "Manutenção e suporte e sistemas legados em Delphi",
//         createAt: new Date(),
//         updateAt: new Date()
//     });
//     res.send('Serviço criado com sucesso!');
// });

app.delete('/apagarpedidoid/:id', (req, res) => {
    pedido.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido excluído"
        });
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir cliente."
        });
    });
});

app.post('/adicionarcliente', async (req, res) => {
    function aguardar(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        });
    };

    await aguardar(3000);

    await cliente.create(
        req.body
    ).then(() => {
        return res.json({
            error: false,
            message: 'Cliente foi inserido com sucesso!'
        })
    });
});

app.delete('/apagarclienteid/:id', (req, res) => {
    cliente.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente excluído."
        });
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir cliente."
        });
    });
});

app.get('/excluircliente/:id', (req, res) => {
    cliente.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return req.json({ cliente });
    })
});

app.delete('/apagarservicoid/:id', (req, res) => {
    servico.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Serviço excluído."
        });
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir cliente."
        });
    });
});

app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        raw: true
    }).then(function (servicos) {
        res.json({
            servicos
        })
    });
});

app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then((servicos) => {
        res.json({
            servicos
        })
    });
});

app.get('/todospedidosCliente', async (req, res) => {
    await pedido.findAll({
        include: [{
            all: true

        }]
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

app.get('/listapedidosCrescente', async (req, res) => {
    await pedido.findAll({
        order: [['id', 'ASC']]
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

app.get('/totalservicos', async (req, res) => {
    await servico.count('id').then((servicos) => {
        res.json(servicos)
    });
});

app.get('/servico/:id', async (req, res) => {
    await servico.findByPk(req.params.id)
        .then((servicos) => {
            return res.json({
                error: false,
                servicos
            })
        }).catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Erro: Código não cadastrado"
            });
        });
});

app.get('/pedidoop/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: {
            ClienteId: {
                [Op.eq]: req.params.id
            }
        }
    }).then((pedido) => {
        return res.json({
            pedido
        })
    });
});

app.get('/atualizaservico/:id', async (req, res) => {
    await servico.findByPk(req.params.id)
        .then((servico) => {
            servico.nome = req.body.nome; "HTML/CSS/JS";
            servico.descricao = req.body.descricao; "Páginas estáticas estilizadas";
            servico.save();
            return res.json({ servico });

        });
});

app.put('/editarservico', (req, res) => {
    servico.update(req.body, {
        where: {
            id: req.body.id
        }
    })
        .then(() => {
            return res.json({
                error: false,
                message: "Serviço modificado com sucesso!"
            });
        })
        .catch(() => {
            return res.status(400).json(
                {
                    error: true,
                    message: "Erro na modificação do serviço."

                });
        });
});

app.get('/servicopedidos/:id', async (req, res) => {
    await servico.findByPk(req.params.id, {
        include: [{ all: true }]
    }).then((servico) => {
        return res.json({ servico });
    });
});

app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: {
            ServicoId: req.body.ServicoId
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido atualizado com sucesso!"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});

app.get('/buscapedidoporcliente', async (req, res) => {
    await pedido.findAll({
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then((pedido) => {
        return res.json({ pedido })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar."
        })
    })
});

app.get('/consultaClienteId/:id', async (req, res) => {
    await cliente.findByPk(req.params.id).then((cliente) => {
        return res.json({ cliente });
    });
});

app.put('/atualizarpedido', (req, res) => {
    pedido.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido atualizado com sucesso!"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar."
        })
    })
});

app.delete('/apagarclienteid/:id', (req, res) => {
    cliente.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente excluído com sucesso!"
        });
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao tentar excluir."
        });
    });
});

app.get('/pedidoporclienteid/:id', async (req, res) => {
    await pedido.findAll(
        {
            where: {
                ClienteId: req.params.id
            },
            include: [{ all: true }]
        }
    ).then((pedido) => {
        return res.json({ pedido })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar."
        })
    })
});

app.get('/pedidoporservicoid/:id', async (req, res) => {
    await pedido.findAll(
        {
            where: {
                ServicoId: req.params.id
            },
            include: [{ all: true }]
        }
    ).then((pedido) => {
        return res.json({ pedido })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar."
        })
    })
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001');
});