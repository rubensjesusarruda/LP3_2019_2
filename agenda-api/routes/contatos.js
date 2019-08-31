const express = require('express');
const contatoCtrl = require('../controllers/contatoController');

/**
 * Cria o rateador dos web services relacionados a Lista. Por meio do roteador
 * será possivel definei os nossos web serviçes.
 */
const router = express.Router();
/**
 * Rota para o serviço: /Contatos
 * Verbo HTTP: get
 */
router.get('/', contatoCtrl.recuperarTodos);

/**
 * Rota para o serviço: /Contato
 * o Verbo HTTP:  Post
 */
router.post('/', contatoCtrl.salvar);


module.exports = router;