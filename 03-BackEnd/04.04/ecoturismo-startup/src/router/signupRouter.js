const express = require('express');
const generateToken = require('../auxiliar/generateToken');
const validationSignup = require('../middleware/validationSignup');

const router = express.Router();

router.post('/signup', validationSignup, (req, res) => {
  return res.status(200).json({ token: generateToken() });
})

module.exports = router