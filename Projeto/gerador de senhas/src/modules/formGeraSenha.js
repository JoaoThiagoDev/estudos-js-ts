import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const tamanhoSenha = document.querySelector(".tamanho-senha");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const btnGerarSenha = document.querySelector(".gerar-senha");


export default () => {
    btnGerarSenha.addEventListener('click', function () {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    return geraSenha(
        tamanhoSenha.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked,
    )

}