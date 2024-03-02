exports.paginaInicial = (req, res) => {
  res.render('index', /* injetando dados na view */ {
    titulo: 'Título <span style="color: red;">da</span> Página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
