function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const jelly = new Pessoa('Jelly', 19);
const maleo = new Pessoa('Maleo', 16);

Pessoa.prototype.toString = function () {
    return `${this.nome} tem ${this.idade} anos`
}

Pessoa.prototype.gemeNome = function () {
    console.log(`AIN ${this.nome.toUpperCase()}`);
}
console.log(jelly.toString());
console.log(maleo.toString());
jelly.gemeNome();
maleo.gemeNome();