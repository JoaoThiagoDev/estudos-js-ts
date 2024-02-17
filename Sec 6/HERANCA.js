function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100));
}

Produto.prototype.desconto = function (porcentagem) {
    this.preco = this.preco - (this.preco * (porcentagem / 100));
}

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

// Camiseta, caneca -> produtos cada um com atributos a mais

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false, // nao pode apagar, sobrescrever, etc a chave
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            // else
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// Sobrescrevendo funções prototype
Caneca.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Caneca.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

const camiseta = new Camiseta('Camisão', 120, 'Preta');

camiseta.aumento(23);
console.log(camiseta);

const caneca = new Caneca('Caneca do Harry Potter', 54, 'Porcelana', 10);
caneca.desconto(14)
console.log(caneca);