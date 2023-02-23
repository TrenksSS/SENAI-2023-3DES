const express = require('express');

const router = express.Router();

const usuario = require('../controller/usuario');
const veiculo = require('../controller/veiculo');

router.post('/usuario', usuario.create);
router.get('/usuarios', usuario.read);

router.post('/veiculo', veiculo.create);
router.get('/veiculos', veiculo.read);

module.exports = router;