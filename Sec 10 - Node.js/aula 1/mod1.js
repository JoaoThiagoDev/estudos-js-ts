const nome = 'Joao'
const sobrenome = 'Thiago'

const falaNome = () => `${nome} ${sobrenome}`;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;


exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Qualquer coisa pra exportar';
//ambos os modos de exportar funcionam
// # # # # # # # # # # # # # # # # # # # # # # # # 
