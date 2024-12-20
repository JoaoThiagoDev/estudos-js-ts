class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.areFieldsValid();
        const validPasswords = this.arePasswordsValid();

        if (validFields && validPasswords) {
            this.formulario.submit();
            alert("Conta criada.");
        }
    }

    arePasswordsValid() {
        let valid = true;
        const senha = this.formulario.querySelector(".senha")
        const repetirSenha = this.formulario.querySelector(".repetir-senha")

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.createError(senha, 'As senhas devem ser iguais!')
            this.createError(repetirSenha, 'As senhas devem ser iguais!')
        }

        if (senha.value.length < 6 || senha.value.length > 12 || repetirSenha.value.length < 6 || repetirSenha.value.length > 12) {
            valid = false;
            this.createError(senha, 'A senha deve ter entre 6 e 12 caracteres!')
            this.createError(repetirSenha, 'A senha deve ter entre 6 e 12 caracteres!')
        }


        return valid;
    }

    areFieldsValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar vazio.`)
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validateCPF(campo)) valid = false;
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validateUser(campo)) valid = false;
            }
        }
        return valid;
    }

    validateUser(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length > 12 || usuario.length < 3) {
            this.createError(campo, 'Usuário deve possuir de 3 a 12 caracteres.')
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(campo, 'Usuário deve conter apenas letras e/ou números.')
            valid = false;
        }

        return valid;
    }

    validateCPF(campo) {
        const cpf = new CPF(campo.value);
        if (!cpf.valida()) {
            this.createError(campo, 'CPF inválido.')
        }
        return true;
    }

    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);

    }
}

const valida = new ValidaFormulario();