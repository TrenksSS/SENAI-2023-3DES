const tarefa = require('../models/tarefas');
const conDB = require('../dao/DAO');

const criarTarefa = (req, res) => {
    conDB.query(tarefa.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarTarefa = (req, res) => {
    conDB.query(tarefa.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
const attStatus = (req, res) => {
    conDB.query(Pedido.toUpdateTarefa(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}
module.exports = {
    criarTarefa,
    listarTarefa,
    attStatus
}