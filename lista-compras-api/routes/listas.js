const express = require('express');
const ListaCtrl = require('../controllers/ListaController');

/**
 * Cria o rateador dos web services relacionados a Lista. Por meio do roteador
 * será possivel definei os nossos web serviçes.
 */
const router = express.Router();
/**
 * Rota para o serviço: /listas
 * Verbo HTTP: get
 */
router.get('/listas', ListaCtrl.recuperarTodas);
module.exports = router;