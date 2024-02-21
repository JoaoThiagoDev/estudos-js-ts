const resultado = document.querySelector('.resultado')

// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json))
//     .catch(e => console.log(e));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json) {

    const table = document.createElement('table')

    json.forEach(pessoa => {
        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.sexo || 'Helicóptero';
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.cpf;
        tr.appendChild(td3)

        table.appendChild(tr)
    });

    resultado.appendChild(table)
}