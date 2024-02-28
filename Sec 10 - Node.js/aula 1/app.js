const path = require('path');
// const mod1 = require('./mod1') -> IMPORTA TUDO DO MOD1
const { nome, sobrenome, falaNome } = require('./mod1');
const { Pessoa } = require('./mod2')

// console.log(mod1.nome)
// console.log(mod1.falaNome()); -> forma de utilizar a importação integral

console.log(nome)
console.log(sobrenome);
console.log(falaNome()); // usa só oq importou

const p1 = new Pessoa('João Thiago');

console.log(p1);
