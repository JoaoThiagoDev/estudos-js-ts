const pessoa = {
    nome: 'João',
    sobrenome: 'Thiago',
}

// as chaves podem ser utilizadas com notação de ponto ou com de colchetes
// se o acesso vier de forma dinâmica, é melhor usar colchetes
// ex:
const chave = 'nome';
console.log(pessoa[chave]);

// # # # # # # # # # # # # # # # # # # # # # 
// usando construtor
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falaNome = () => {
        return `${this.nome} ${this.sobrenome}`
    };
}

const p1 = new Pessoa('João', 'Silva');
console.log(p1.falaNome())