const relogio = document.querySelector('.relogio');
const iniciarButton = document.querySelector('.iniciar-button');
const pausarButton = document.querySelector('.pausar-button');
const zerarButton = document.querySelector('.zerar-button');
let segundos = 0;
let timer;


function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); // mult por 1000 pois o date pega os *milissegundos*
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}


iniciarButton.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
})


pausarButton.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer)
})


zerarButton.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
})