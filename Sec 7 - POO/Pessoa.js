class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    falar(){
        return `${this.nome} está falando.`
    }

    comer (){
        return `${this.nome} está comendo. Creck creck.`
    }
}

const p1 = new Pessoa('Joao', 'Silva', 19);
console.log(p1.falar());

