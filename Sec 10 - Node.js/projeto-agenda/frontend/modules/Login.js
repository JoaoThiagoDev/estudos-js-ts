import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.cleanErrors();
            this.validate(e);
        });
    }


    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name=email]');
        const passwordInput = el.querySelector('input[name=password]');
        const errorsSection = document.querySelector('.errosDiv');
        let error = false;
        let errors = [];

        if (!validator.isEmail(emailInput.value)) {
            errors.push('E-mail inválido');
            error = true;
        }
        if (passwordInput.value.length < 6 || passwordInput.value.length > 50) {
            errors.push('A senha precisa ter entre 6 e 50 caracteres.');
            error = true;
        }

        if (!error) el.submit();

        if (error) {
            e.preventDefault(); // Prevent form submission
            errors.forEach(errorMsg => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('col', 'my-2');
                messageDiv.innerHTML = `
                    <div class="alert alert-danger">
                        ${errorMsg}<br>
                    </div>
                `;
                errorsSection.appendChild(messageDiv);
            });
        }
    }

    cleanErrors() {
        const errorsSection = document.querySelector('.errosDiv');
        errorsSection.innerHTML = '';
    }

}
