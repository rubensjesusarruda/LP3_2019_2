const express = require ('express');
const app = express();

//nossos webservices
app.use('/data', (req,res) =>{
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
});

app.use('/inverter/:str', (req,res) =>{
    // recupera parametro de url
    let str = req.params.str;
    str = str.split('').reverse().join('');
    res.json({resultado: str});
});

app.use('/cpf/:cpf', (req,res) =>{
    let cpf = req.params.cpf;
    //impleplmentar
    res.send('Validador de CPF')
});

module.exports = app;