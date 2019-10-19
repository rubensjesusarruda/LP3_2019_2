const Lista = require('../models/Lista');

const controller = {
    salvar: (req, res) => {
        const{nome}=req.body;
        if(nome){
            const lista = req.body;
            lista
            .create(lista)
            .then(listaSalva => res.status(201).json(listaSalva))
            .catch(erro =>{
                console.log(erro);
                res.status(500).json({
                    mensagem: 'Errro ao tentar salvar a lista'
                })
            });
            

        }else{
            return res.status(400).json({mensagem:'Nome não informado'});
        }
    }

};

module.exports = controller;