const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasContatos = require('./routes/contatos');

const app = express();

app.use(logger('dev'));
app.use(cors());
/**
 * permite o nosso app Express sonsiga interpretar dados do front end em formato JSON.
 */
app.use(bodyParser.json());
app.use('/contatos',rotasContatos);
//router.get('/contatos', contatosCtrl.recuperarTodos);
//router.post('/contatos', contatoCtrl.salvar);
module.exports = app;