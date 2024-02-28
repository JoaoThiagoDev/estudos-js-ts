const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'Teste.json');
const escreve = require('./modules/escrever');
const le = require('./modules/ler')

// const pessoas = [
//     {
//         nome: "João",
//         idade: 30,
//         profissao: "Engenheiro"
//     },
//     {
//         nome: "Maria",
//         idade: 25,
//         profissao: "Médica"
//     },
//     {
//         nome: "Pedro",
//         idade: 35,
//         profissao: "Professor"
//     },
//     {
//         nome: "Ana",
//         idade: 28,
//         profissao: "Advogada"
//     },
//     {
//         nome: "Luiza",
//         idade: 40,
//         profissao: "Artista"
//     }
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json)

async function leArquivo ( caminho ) {
    const dados = await le(caminho)
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element);
    });
}

leArquivo(caminhoArquivo);

