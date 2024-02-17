// 705.484.450-52 -> é pra dar 52 mesmo
// valor[0] * 10 + valor[1] * 9 ... valor[8] * 2
// valor[0] * 11 + valor[1] * 10 ... valor[9] * 2
let primeiroDigito;
let segundoDigito;
let fatorMult;
let arrayPrimeiro = [];
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfValido = cpfLimpo;

let cpfArray = Array.from(cpfValido);

// array.length - index - 1
arrayPrimeiro = cpfArray.map((valor, index, arr) => {
    let val;
    let fatorMult = arr.length - index - 1;
    if (fatorMult >= 2) {
        val = Number(valor) * Number(fatorMult);
    } else {
        val = 0;
    }
    return val;
})


primeiroDigito = arrayPrimeiro.reduce((ac, val) => ac += val, 0);
primeiroDigito = (11 - (primeiroDigito % 11)).toString();
if (primeiroDigito > 9) {
    primeiroDigito = '0';
}
cpfArray[9] = primeiroDigito;

arraySegundo = cpfArray.map((valor, index, arr) => {
    let val;
    let fatorMult = arr.length - index;
    if (fatorMult >= 2) {
        val = Number(valor) * Number(fatorMult);
    } else {
        val = 0;
    }
    return val;
})

segundoDigito = arraySegundo.reduce((ac, val) => ac += val, 0);
segundoDigito = (11 - (segundoDigito % 11)).toString();
if (segundoDigito > 9) {
    segundoDigito = '0';
}
cpfArray = cpfArray.toString().replace(/\D+/g, '');

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
// CONFIRMANDO SE SÃO IGUAIS:
if (cpfArray == cpfLimpo) {
    console.log('O CPF É VÁLIDO');
} else {
    console.log('CPF INVÁLIDO');
}