const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

// ================================================

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;


        await this.userExists();


        if (this.errors.length > 0) return;

        try {
            const salt = bcryptjs.genSaltSync();
            this.body.password = bcryptjs.hashSync(this.body.password, salt);
            this.user = await LoginModel.create(this.body) // CRIA UM NOVO OBJETO CASO NAO TIVER ERRO
        }
        catch (e) {
            console.log(e);
        }
    }

    async userExists() {
        const user = await LoginModel.findOne({
            email: this.body.email,
        })

        if (user) this.errors.push('Usuário já está cadastrado.');
    }

    valida() {
        this.cleanUp();
        // Validação:
        /*
            - Email precisa ser válido
            - Senha entre 6 e 50 caracteres
        */

        // Validando EMAIL
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        }

        if (this.body.password.length < 6 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 6 e 50 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) { // para cada CHAVE do formulario
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
        }
    }


}

module.exports = Login;