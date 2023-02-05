const isValidDate = require('../auxiliar/isValidDate');

const validationName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ "message": "O campo name é obrigatório" });
  }
  if( name.length < 4) {
    return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  }

  next();
}

const validationPrice = (req, res, next) => {
  const { price } = req.body;

  if(!price) {
    return res.status(400).json({ "message": "O campo price é obrigatório" });
  }
  if(price <= 0) {
    return res.statu(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  }

  next();
}

const validationDescription = (req, res, next) => {
  const { description } = req.body;
  if(!description){
    return res.status(400).json({ "message": "O campo description é obrigatório" });
  }
  next();
}

const validationCreatedAt = (req, res, next) => {
  const { description } = req.body;
  const { createdAt } = description;
  
  if (!createdAt) {
    return res.status(400).json({ "message": "O campo createdAt é obrigatório" });
  }
  if (!isValidDate(createdAt)){
    return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  }

  next();
}

const validationRating = (req, res, next) => {
  const { description } = req.body;
  const { rating } = description;

  if (!rating) {
    return res.status(400).json({ "message": "O campo rating é obrigatório" });
  } 
  if (!Number.isInteger(rating) || rating > 5 || rating < 1) {
    return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" })
  }

  next();
}

const validationDifficulty = (req, res, next) => {
  const { description } = req.body;
  const { difficulty } = description;

  if (!difficulty){
    return res.status(400).json({ "message": "O campo difficulty é obrigatório" });
  }
  if( difficulty !== 'Fácil' && difficulty !== 'Médio' && difficulty != 'Difícil') {
    return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" })
  }

  next();
}

const validationAuth = (req, res, next) => {
  const { authorization } = req.header;
  
  if(!authorization || authorization.length !== 16) {
    return res.status(401).json({ "message": "Token inválido"})
  }

  next()
}

module.exports = {
  validationName, validationPrice,
  validationDescription, validationCreatedAt,
  validationRating, validationDifficulty, validationAuth
}