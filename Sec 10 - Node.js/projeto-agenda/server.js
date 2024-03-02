require('dotenv').config(); // variaveis de ambiente que não devem ser expostas ao público

const express = require('express');
const app = express();



const mongoose = require('mongoose'); // modela a base de dados
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto'); // quando conectar, vai emitir esse evento
  })
  .catch(err => console.log(err));



const session = require('express-session');  // vai ativar a sessão de usuários por meio da utilização de cookies (L29)
const MongoStore = require('connect-mongo');  // usado p/ salvar sessão na base de dados

const flash = require('connect-flash');  // mensagens auto-destrutivas (bons para mandar erros ou feedbacks p/ usuarios)
const routes = require('./routes'); // rotas da aplicação
const path = require('path');  // trabalho com caminhos
const helmet = require('helmet'); // segurança
const csrf = require('csurf');  // tokens temporários para a segurança

const { middlewareGlobal, checkCSRFError, CSRFMiddleware } = require('./src/middlewares/middleware') // middlewares

app.use(helmet());
app.use(express.urlencoded({ extended: true }));  // nos autoriza a postar formularios p/ dentro de nossa aplicação
app.use(express.json());  // permite a fazer parse de JSON na aplicação
app.use(express.static(path.resolve(__dirname, 'public')));  // arquivos estáticos (imgs, css, etc)


// config de sessão
const sessionOptions = session({
  secret: 'aloaloalojejefjjejf',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(sessionOptions);
app.use(flash())


app.set('views', path.resolve(__dirname, 'src', 'views'));  // seta as views
app.set('view engine', 'ejs');  // seta a forma que as views serão renderizadas pelo motor

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCSRFError);
app.use(CSRFMiddleware);
app.use(routes);


app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
})
