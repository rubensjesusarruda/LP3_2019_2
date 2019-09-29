const {Op} = re
const { Trabalho } = require('../databases/db');

const controller = {
    // Arrow function
    recuperarTodos: async (req, res) => {
        const trabalhos = await Trabalho.findAll();
        return res.json(trabalhos);
    },

    salvar: (req, res) => {
        const trabalho = req.body;

        if (!trabalho.titulo) {
            return res
                .status(400)
                .json({ mensagem: 'Titulo não informado' });
        }
        if (!trabalho.orientador) {
            return res
                .status(400)
                .json({ mensagem: 'Orientador não informado' });
        }
        if (!trabalho.estudante1) {
            return res
                .status(400)
                .json({ mensagem: 'Estudante 1 não informado' });
        }
        if (!trabalho.area || CET || CAE|| MDIS || CHACSA || CBS || FIC) {
            return res
                .status(400)
                .json({ mensagem: 'Area não valida, digite uma das CET, CAE, MDIS, CHACSA, CBS, FIC' });
        }


        Trabalho
            .create(trabalho)
            .then(
                trabalhoSalva => res.status(201).json(trabalhoSalva),
                erro => res.status(400).json(erro)
            )
            .catch(erro => {
                console.log(erro);
                return res
                    .status(500)
                    .json({ mensagem: 'Erro ao tentar salvar o trabalho' });
            });
    },

    recuperarTodos:async (req, res) =>{
        //const consulta = req.body.consulta;
        const {consulta} = req.body;
        let trabalhos = await Trabalho.findAll({
            whare : {
                titulo:{
                    [Op.iLike]:`%${consulta}%`
                }
            }
        });
        return res.json(trabalhos);

    }

};

module.exports = controller;