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


// PROMISE.RESOLVE()

function baixaPagina() {
    const emCache = true; // simulando um servidor que diz se está em chache ou nao

    if (emCache) {
        return Promise.resolve('Página já estava baixada')
    } else {
        let tempo = tempoAleatorio(1, 5);
        return simulaConexao(`Página baixada com sucesso. Levou ${tempo / 1000}s`, tempo)
    }

}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch((err) => console.log(err));

    // # # # # # # # # # # # # # # # # # # # # # # 
    // A função Promise.reject() será a mesma coisa, porém ao invés de considerar a promise completa, vai a rejeitar. Ou seja, vai fazer cair direto no CATCH da função.