const express = require('express');
const {  validationName,
  validationPrice,
  validationDescription,
  validationCreatedAt,
  validationRating,
  validationDifficulty, validationAuth} = require('../middleware/validationActivities');

const router = express.Router();

router.post('/activities', validationName,
validationPrice,
validationDescription,
validationCreatedAt,
validationRating,
validationDifficulty,
validationAuth,
(_req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = router;