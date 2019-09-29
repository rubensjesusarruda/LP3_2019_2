const express = require('express');
const listaCtrl = require('../controllers/TrabalhoController');
const router = express.Router();

router.get('/', trabalhoCtrl.recuperarTodos);

router.post('/', trabalhoCtrl.salvar);

module.exports = router;