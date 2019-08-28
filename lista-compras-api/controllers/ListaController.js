
const Lista = require('../models/Lista');
let listas = [];
const controller = {
    recuperarTodas: (rep, res) =>res.json(listas),
    salvar: (req, res)=> {
        const nome = req.body.nome;
        /**
        *Verifica se foi Infomado o nome da lista
        */
        if(nome){
            let lista = new Lista(nome);
            listas.push(lista);
            res.status(201).json(lista);
        }else{
            res.status(400).json({mensagemErro: 'Nome da lista não informado'});
        }
    }
    
};


module.exports= controller;

