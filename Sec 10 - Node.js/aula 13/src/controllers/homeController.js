exports.paginaInicial = (req, res) => {
  res.render('index');
  // return; // => isso faria a requisição parar por ali mesmo;
  // **OU**
  // next(); // => isso faria puxar o próximo estágio da requisição, caso houvesse
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
