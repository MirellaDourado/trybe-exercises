const express = require('express');
const peopleDb = require('../db/peopleDb');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body
  try {
    const [result] = await peopleDb.insert(person)
    return res.status(201).json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` })
  } catch (err) {
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar a pessoa' })
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDb.findAll()
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.sqlMessage })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await peopleDb.findById(id)
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.sqlMessage })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await peopleDb.edit(id);
    return res.status(200).json({ message: `Pessoa com id: ${id} modificada com sucesso.` });
  } catch (error) {
    return res.status(500).json({ message: error.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await peopleDb.remove(id);
    return res.status(200).json({ message: `Pessoa com o id: ${id} deletada com sucesso.` });
  } catch (error) {
    return res.status(500).json({ message: error.sqlMessage })
  }
});

module.exports = router;