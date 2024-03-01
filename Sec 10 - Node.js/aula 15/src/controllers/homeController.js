exports.paginaInicial = (req, res) => {
  // req.flash('info' /* tipo da msg q vou enviar */ , 'Olá mundo!' )
  // req.flash('error' /* tipo da msg q vou enviar */ , 'Operação mal sucedida.' )
  // req.flash('success' /* tipo da msg q vou enviar */ , 'Operação bem sucedida!' )

  // console.log(req.flash('info'), req.flash('error'), req.flash('success'));
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
