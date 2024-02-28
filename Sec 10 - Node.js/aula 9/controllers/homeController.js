exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br/>
    Outra coisa: <input type="text" name="qualquerCoisa">
    <button>Enviar</button>
    </form>
    <a href="./contato">Contato</a>
    `);
}

exports.trataPost = (req, res) => {
    res.send("Oi, nova rota de POST aqui")
}