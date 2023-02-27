const express = require('express');
const router = express.Router();

const RotaTarefas = require("../controller/tarefas");

router.post("/tarefas/create", RotaTarefas.criarTarefa);
router.get("/tarefas/read", RotaTarefas.listarTarefa);
router.put("/tarefas/att", RotaTarefas.attStatus);

module.exports = router