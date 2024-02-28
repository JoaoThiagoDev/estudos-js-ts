const express = require('express');
const app = express();


// CRUD -> CREATE READ UPDATE DELETE
//          POST  GET   PUT   DELETE


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text "name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) =>{
    res.send("Formulário recebido!")
})

app.get('/sobre', (req, res) =>{
    res.send('Olá, esse é meu sobre mim!')
})

app.listen(3000, () => {
    console.log('server rodando na porta 3000');
})
