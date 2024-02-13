function Calculadora() {
    // elementos/chaves necessários(as)
    this.display = document.querySelector(".display");

    this.btnClear = document.querySelector(".btn-clear");

    this.btnIgual = document.querySelector(".btn-eq");

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressEnter();
        this.clearDisplay();
    };
    
    // ===================
    this.cliqueBotoes = function () {
        document.addEventListener('click', function (event) {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            else if (el.classList.contains('btn-clear')) this.clearDisplay();
            else if (el.classList.contains('btn-eq')) this.realizaExpressao();
            else if (el.classList.contains('btn-del')) this.backspace();
        }.bind(this));
    };

    // ===================
    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

    // ===================
    this.clearDisplay = function () {
        this.display.value = '';
    };
    
    // ===================
    this.realizaExpressao = function () {
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
    };

    // ===================
    this.backspace = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    // ===================
    this.pressEnter = function () {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                this.realizaExpressao();
            }
        })
    };

};

const calculadora = new Calculadora();
calculadora.inicia();