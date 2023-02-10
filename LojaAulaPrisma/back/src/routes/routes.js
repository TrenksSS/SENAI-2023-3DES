const express = require('express');

const router = express.Router();

const setor = require('../controller/setor');
const produto = require('../controller/produto');
const vendedor = require('../controller/vendedor');

router.post('/setor', setor.create);
router.get('/setores', setor.read);

router.post('/produto', produto.create);
router.get('/produtos', produto.read);

router.post('/vendedor', vendedor.create);
router.get('/vendedores', vendedor.read);

module.exports = router;