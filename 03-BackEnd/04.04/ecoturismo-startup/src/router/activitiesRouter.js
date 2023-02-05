const express = require('express');
const {  validationName,
  validationPrice,
  validationDescription,
  validationCreatedAt,
  validationRating,
  validationDifficulty} = require('../middleware/validation');

const router = express.Router();

router.post('/activities', validationName, validationPrice, validationDescription, validationCreatedAt, validationRating, validationDifficulty, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = router;