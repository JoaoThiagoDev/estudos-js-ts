const lista = document.querySelector('.lista');
const novaTarefaInput = document.querySelector('.nova-tarefa-input');
const addTarefaButton = document.querySelector('.add-tarefa-button');
adicionaTarefasSalvas();


function criaBotaoApagar(item) {
    item.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar-button')
    item.appendChild(botaoApagar);
}

function criaLi() {
    const item = document.createElement('li');
    return item;
}

function criaTarefa(textoInput) {
    const item = criaLi();
    item.innerText = textoInput;
    lista.appendChild(item);
    novaTarefaInput.value = '';
    novaTarefaInput.focus();
    criaBotaoApagar(item);
    salvarTarefas();
}


novaTarefaInput.addEventListener('keypress', function (e) {
    if (!(e.keyCode === 13)) return;
    criaTarefa(novaTarefaInput.value)
})


addTarefaButton.addEventListener('click', function (e) {
    if (!novaTarefaInput.value) return;
    criaTarefa(novaTarefaInput.value);
})

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar-button')) {
        el.parentElement.remove()
        salvarTarefas();
    }
})

function salvarTarefas() {
    const tarefas = lista.querySelectorAll('li')
    const arrayTarefas = [];

    tarefas.forEach(tarefa => {
        const tarefaTexto = tarefa.innerText.replace('Apagar', '').trim(); // a função trim() serve para tirar espaço vazio das pontas

        arrayTarefas.push(tarefaTexto)
    });

    const tarefasJSON = JSON.stringify(arrayTarefas);


    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');

    if (tarefas) {
        const arrayTarefas = JSON.parse(tarefas);

        arrayTarefas.forEach(tarefa => {
            criaTarefa(tarefa);
        });

        console.log(arrayTarefas);
    } else {
        console.log("Não há tarefas salvas.");
    }
}

const teste = 1;
console.log('teste: ', teste)