/**
 * Reduce serve para reduzir uma coleção
 * 
 * Utilização:
 * array.reduce(acumulador, valor, index, array)
 * PODE-SE SETAR O VALOR INICIAL DO ACUMULADOR USANDO UMA VIRGULA APÓS A FUNCAO -> VALOR PADRÃO: primeiro elemento do array
 * 
 */


// Some todos os números (REDUCE)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// # # # # # # # # # # # # # # # # # # # # # # # 
const somaDosNumeros = numeros.reduce((acumulador, valor) => (acumulador += valor), 0);

console.log(somaDosNumeros)