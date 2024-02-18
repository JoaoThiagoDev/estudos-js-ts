// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function simulaConexao(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new TypeError('Esperada uma String') /* retorno de algum erro*/)

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

const promises = [
    'Primeiro valor',
    simulaConexao('Promise 1', 3000),
    simulaConexao('Promise 2', 500),
    simulaConexao('Promise 3', 1000),
    'Outro valor'
];

// PROMISE.ALL()

/*
Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    })
*/

