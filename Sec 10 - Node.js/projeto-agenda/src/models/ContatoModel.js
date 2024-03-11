const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}


Contato.prototype.register = async function () {
    this.valida();

    if (this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function () {
    this.cleanUp();
    // Validação:
    /*
    - Email precisa ser válido
    - Senha entre 6 e 50 caracteres
    */

    // Validando EMAIL
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório!');
    if (!this.body.telefone && !this.body.email) this.errors.push('Pelo menos email ou telefone deve ser enviado!');
}

Contato.prototype.cleanUp = function () {
    for (const key in this.body) { // para cada CHAVE do formulario
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return;

    this.valida();

    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true, });
}

// Métodos estáticos
Contato.buscaPorID = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
}

Contato.buscaContatos = async function () {
    const contatos = await ContatoModel.find()
        .sort({ criadoEm: -1 });  // -1 para ordem decrescente / 1 para ordem crescente
    return contatos;
}

Contato.delete = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({_id: id})
    return contato;
}

module.exports = Contato;