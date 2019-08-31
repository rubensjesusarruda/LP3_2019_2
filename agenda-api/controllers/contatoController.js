
const Contato = require('../models/contato');
let contatos = [];
const controller = {
    recuperarTodos: (rep, res) =>res.json(contatos),
    salvar: (req, res)=> {
        const nome = req.body.nome;
        const telefone = req.body.telefone;
        const email = req.body.email;
        const idade = req.body.idade;
        /**
        *Verifica se foi Infomado o nome e telefone foram informados
        */
        if(nome){
            let contato = new Contato(nome, telefone, email, idade);
            contatos.push(contato);
            
            
            res.status(201).json(contato);
            if(telefone){
                let contato = new Contato(telefone);
                contato.nome=nome;
                contato.telefone=telefone;
                contato.email=email;
                contato.idade=idade;
                contatos.push(contato);
                res.status(201).json(contato);
        }else{
            res.status(400).json({mensagemErro: 'Telefone não Informado'});
        }
    }else{
        res.status(400).json({mensagemErro: 'Nome do contato não informado'});
    }
}
};


module.exports= controller;