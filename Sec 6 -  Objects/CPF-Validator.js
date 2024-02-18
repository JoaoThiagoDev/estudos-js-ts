// o que vale são os dois ultimos numeros para validar!
// 705.484.450-52 -> é pra dar 5 e 2 mesmo
// valor[0] * 10 + valor[1] * 9 ... valor[8] * 2
// valor[0] * 11 + valor[1] * 10 ... valor[9] * 2
// SE UM OU OUTRO DIGITO FOR MAIOR QUE 9, ELE DEVE SER VALIDADO COMO 0
let cpf = '';

function validaCPF(cpf) {
    let primeiroDigito;
    let segundoDigito;
    let arrayValores = [];
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let cpfValido = cpfLimpo; // cpfValido recebe esse valor para verificar se os dois ultimos digitos são validos
    let cpfArray = Array.from(cpfValido);


    // valor com modelo inválido nem realiza cálculos
    if (!cpf || cpf.trim() === '' || cpfLimpo.length !== 11) return false;

    // MONTANDO UM ARRAY COM OS RESULTADOS A SEREM SOMADOS P/ PRIMEIRO DIGITO
    arrayValores = cpfArray.map((valor, index, arr) => {
        let val;
        let fatorMult = arr.length - index - 1;
        if (fatorMult >= 2) {
            val = Number(valor) * Number(fatorMult);
        } else {
            val = 0;
        }
        return val;
    })

    primeiroDigito = arrayValores.reduce((ac, val) => ac += val, 0);
    primeiroDigito = (11 - (primeiroDigito % 11)).toString();
    if (primeiroDigito > 9) {
        primeiroDigito = '0'; // lh 4
    }
    cpfArray[9] = primeiroDigito;


    // MONTANDO UM ARRAY COM OS RESULTADOS A SEREM SOMADOS P/ SEGUNDO DIGITO
    arrayValores = cpfArray.map((valor, index, arr) => {
        let val;
        let fatorMult = arr.length - index;
        if (fatorMult >= 2) {
            val = Number(valor) * Number(fatorMult);
        } else {
            val = 0;
        }
        return val;
    })
    segundoDigito = arrayValores.reduce((ac, val) => ac += val, 0);
    segundoDigito = (11 - (segundoDigito % 11)).toString();
    if (segundoDigito > 9) {
        segundoDigito = '0'; // lh 4
    }
    cpfArray[10] = segundoDigito;
    cpfArray = cpfArray.toString().replace(/\D+/g, '');

    // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
    // CONFIRMANDO SE SÃO IGUAIS:
    if (cpfArray == cpfLimpo) {
        return true; // é válido
    } else {
        return false; // é inválido
    }
}

if (validaCPF(cpf)) {
    console.log('Válido!')
} else {
    console.log('Erro: CPF inválido.')
}