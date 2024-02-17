/**
 * Para que serve:
 * filter vai retornar os elementos que satisfaçam a condição passada na função
 * 
 * UTILIZAÇÃO:
 * array.filter(function callBack que vai retornar true ou false)
 * 
 * Com ARROW FUNCTION fica mais legível!
 * array.filter( el => funcionalidade );
 * 
 * OBS: ele não vai modificar o array, então é necessário um novo array para receber o array que satisfaz a condição
 */



// OBJ: retornar novos numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// PRIMEIRA MANEIRA
const maiores1 = [];
for (numero of numeros) {
    if (numero > 10) maiores1.push(numero);
}
console.log("Primeiro método:", maiores1);

// MANEIRA COM FILTER
// const filterCallback = (valor) => valor > 10; // VAI RETORNAR TRUE OU FALSE, SE DEVE OU NAO ADICIONAR O ELEMENTO AO NOVO ARRAY

const maiores2 = numeros.filter(valor => valor > 10); // essa função passada com apenas um parâmetro (Valor) é igual a função declarada acima como filterCallback
console.log("Primeiro método:", maiores2);