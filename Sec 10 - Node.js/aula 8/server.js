const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => { // O "NAME" PASSOU A SER IMPORTANTE
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br/>
    Outra coisa: <input type="text" name="qualquerCoisa">
    <button>Enviar</button>
    </form>
    `); 
});


// UTILIZANDO QUERY
app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
    // PARAMS = ROTA DA *URL* -> EX: /facebookprofile
    console.log("Params:",req.params);
    console.log("Req query:", req.query);
    res.send(req.query.facebookprofile);
})


// TRATA COMO POST POIS EM METHOD NO @app.get NA ROTA / (VAZIO) ESTÁ UTILIZANDO COMO TIPO O **POST**
app.post('/', (req, res) => {
    console.log("Req body", req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}<br>
    O outro parametro foi: ${req.body.qualquerCoisa}`);
})


app.listen(3000, () => {
    console.log('server rodando na porta 3000');
})
