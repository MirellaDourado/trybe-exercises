const connection = require('./connection');

const insert = (task) => connection.execute(
    'INSERT INTO tasks (nome, descricao) VALUES (?,?)',
    [task.nome, task.descricao],
  );

const update = (task, id) => connection.execute(
    'UPDATE tasks SET name=?, descricao=? WHERE id=?', 
    [task.name, task.descricao, id],
  );

const remove = (id) => connection.execute(
    'DELETE FROM tasks WHERE id=?',
    [id],
  );

const findAll = () => connection.execute(
    'SELECT * FROM tasks',
  );

const findById = (id) => connection.execute(
    'SELECT * FROM tasks WHERE id=?',
    [id],
  );

module.exports = {
  insert,
  update,
  remove,
  findById,
  findAll,
};