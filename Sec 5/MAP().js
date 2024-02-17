/**
 * Para que serve:
 * map vai retornar um novo array com o  ** MESMO TAMANHO DO ORIGINAL **  porem com os elementos que satisfaçam a condição ALTERADOS
 * 
 * UTILIZAÇÃO:
 * array.map(function callBack que vai retornar true ou false)
 * 
 * Com ARROW FUNCTION fica mais legível!
 * array.map( el => funcionalidade );
 * 
 * OBS: ele não vai modificar o array, então é necessário um novo array para receber o array que satisfaz a condição
 */


// DOBRE TODOS OS NUMEROS
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(el => el * 2);
console.log("numerosEmDobro", numerosEmDobro);

// DOBRE OS NUMEROS MAIORES QUE 10
const numerosDobroMaiorQueDez = numeros.map(el => el > 10 ? el * 2 : el);
console.log("numerosDobroMaiorQueDez", numerosDobroMaiorQueDez);



/**
 * PARA TODOS:
 * Retorne apenas uma string com os nomes
 * Remova apenas as chaves "nome" do objeto
 * Adicione uma chave ID em cada objeto (pode usar index ou fazer uma função para criar um numero aleatório)
 */
const pessoas = [
    { nome: 'João', idade: 18 },
    { nome: 'Kerlon', idade: 21 },
    { nome: 'Thiago', idade: 32 },
    { nome: 'Pedro', idade: 21 },
    { nome: 'Davi', idade: 22 },
    { nome: 'Victor', idade: 65 },
]

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log("Nomes", nomes);

const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }))
console.log("Idades", idades);


/**
 * No seguinte exemplo, se o ID fosse atribuido ao objeto original, o original seria modificado, por isso é melhor criar um novo objeto igual ao original utilizando o spread operator
 */
const pessoasComID = pessoas.map((pessoa, index) => {
    newPessoa = { ...pessoa };
    newPessoa.id = index + 1;
    return newPessoa;
});
console.log(pessoasComID);