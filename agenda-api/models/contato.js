class Contato {

    constructor(nome, telefone, email, idade){
        this._id = `${new Date().getMilliseconds()}`;
        this.nome= nome;
        this.telefone = telefone;
        this.email=email;
        this.idade = idade;
    }

}

module.exports = Contato;