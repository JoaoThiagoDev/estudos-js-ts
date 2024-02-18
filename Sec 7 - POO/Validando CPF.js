class CPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpf.replace(/\D+/g, ''),
        }
        );
    }

    geraNovoCPF() {
        let primeiroDigito;
        let segundoDigito;
        let arrayValores = [];
        let cpfValido = this.cpfLimpo;
        let cpfArray = Array.from(cpfValido);

        arrayValores = cpfArray.map((valor, index, arr) => {
            let val;
            let fatorMult = arr.length - index - 1;
            if (fatorMult >= 2) {
                val = Number(valor) * Number(fatorMult);
            } else {
                val = 0;
            }
            return val;
        })

        primeiroDigito = arrayValores.reduce((ac, val) => ac += val, 0);
        primeiroDigito = (11 - (primeiroDigito % 11)).toString();
        if (primeiroDigito > 9) {
            primeiroDigito = '0';
        }
        cpfArray[9] = primeiroDigito;

        arrayValores = cpfArray.map((valor, index, arr) => {
            let val;
            let fatorMult = arr.length - index;
            if (fatorMult >= 2) {
                val = Number(valor) * Number(fatorMult);
            } else {
                val = 0;
            }
            return val;
        })
        segundoDigito = arrayValores.reduce((ac, val) => ac += val, 0);
        segundoDigito = (11 - (segundoDigito % 11)).toString();
        if (segundoDigito > 9) {
            segundoDigito = '0';
        }
        cpfArray[10] = segundoDigito;
        cpfArray = cpfArray.toString().replace(/\D+/g, '');

        return cpfArray;

    };


    valida() {
        if (!this.cpfLimpo || this.cpfLimpo.trim() === '' || this.cpfLimpo.length !== 11 || !this.geraNovoCPF) return false;

        if (this.cpfLimpo === this.geraNovoCPF()) {
            return true;
        }
        return false;
    };

}
