// nao ta errado, mas o de baixo é mais moderno
function Pessoa(nome, idade) {  // funcao que começa maiuscula é uma função construtora
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {       // alterei o protitipo de pessoa e adicionei um metodo falar
    console.log(`${this.nome} está falando`);
}

// usar assim
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}