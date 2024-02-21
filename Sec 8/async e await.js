function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function simulaConexao(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Caí do erro') /* retorno de algum erro*/
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return;
        }, tempo)
    });
}

async function executa() {
    try {
        const fase1 = await simulaConexao('Fase 1', tempoAleatorio(1, 5));
        console.log(fase1);

        const fase2 = await simulaConexao('Fase 2', tempoAleatorio(1, 5));
        console.log(fase2);

        const fase3 = await simulaConexao(3, tempoAleatorio(1, 5));
        console.log(fase3);
        
        const fase4 = await simulaConexao("Fase 4", tempoAleatorio(1, 5));
        console.log(fase3);
    }
    catch (e) {
        console.log(e);
    }
}

executa();