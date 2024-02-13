function criaCalculadora() {
    return {
        display: document.querySelector(".display"),

        btnClear: document.querySelector(".btn-clear"),

        btnIgual: document.querySelector(".btn-eq"),

        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
            this.clearDisplay();
        },
        // ===================
        cliqueBotoes() {
            document.addEventListener('click', function (event) {
                const el = event.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                else
                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }
                    else
                        if (el.classList.contains('btn-eq')) {
                            this.realizaExpressao();
                        }
                        else
                            if (el.classList.contains('btn-del')) {
                                this.backspace();
                            }

            }.bind(this));
        },

        // ===================
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        // ===================
        clearDisplay() {
            this.display.value = '';
        },
        // ===================
        realizaExpressao() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert("Expressão inválida!");
                    return;
                }

                this.display.value = String(conta);

            } catch (e) {
                alert("Expressão inválida!");
                return;
            }
        },
        // ===================
        backspace() {
            this.display.value = this.display.value.slice(0, -1);
        },
        // ===================
        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode == 13){
                    this.realizaExpressao();
                }
            })
        }


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();