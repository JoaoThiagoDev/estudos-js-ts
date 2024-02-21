// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) { // esses numeros são tipo aqueles erros (404) ou sucessos (nesse caso sucesso por estar antes de 300 e dps de 200)
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText)
//             }
//         });
//     });
// };
document.addEventListener('click', event => {
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        carregaPagina(elemento);
    }
});

function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');

    fetch(href)
        .then(resposta => {
            if (resposta.status !== 200) throw new Error('ERROR');
            return resposta.text()
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}