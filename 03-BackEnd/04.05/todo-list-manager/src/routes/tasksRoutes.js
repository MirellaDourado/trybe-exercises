const express = require('express');
const tasksDB = require('../db/tasksDB');

const router = express.Router();
const errorMessage = 'Mensagem de erro: ';

router.post('/', async (req, res) => {
  const task = req.body;
  try {
    const [result] = await tasksDB.insert(task);
    return res.status(201)
      .json({ message: `Atividade cadastrada com sucesso com o id: ${result.insertId}` });
  } catch (error) {
    console.error(errorMessage, error.message);
    return res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

router.put('/:id', async (req, res) => {
  const task = req.body;
  const { id } = req.params;
  
  try {
    const [result] = await tasksDB.update(task, id);
    return res.status(200)
      .json({ message: `Atividade com o id ${result.insertId} atualizada com sucesso: ${result}` });
  } catch (error) {
    console.error(errorMessage, error.message);
    return res.status(500).json({ message: error.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await tasksDB.delete(id);
    return res.status(202).json({ message: `Atividade com o id: ${id} deletada com sucesso` });
  } catch (error) {
    console.error(errorMessage, error.message);
    return res.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/', async (_req, res) => {
  const [result] = await tasksDB.findAll();
  try {
    return res.status(200).json({ message: result });
  } catch (error) {
    console.error(errorMessage, error.message);
    return res.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [result] = await tasksDB.findById(id);
  
  try {
    return res.status(200)
    .json({ message: `Atividade com id: ${id} encontrada com sucesso: ${result}` });
  } catch (error) {
    console.error('Mensagem de erro: ', error.message);
    return res.status(500).json({ message: error.sqlMessage });
  }
});

module.exports = router;
