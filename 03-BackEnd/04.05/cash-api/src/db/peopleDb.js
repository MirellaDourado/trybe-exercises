const connection = require('./connection');

const insert = (person) => connection.execute(
  'INSERT INTO people (first_name, last_name, email, phone) VALUES (?, ?)',
  [person.firstName, person.lastName, person.email, person.phone]
);

const findAll = () => connection.execute(
  'SELECT * FROM people'
);

const findById = (id) => connection.execute(
  'SELECT * FROM people WHERE id=?', [id]
);

const edit = (person) => connection.execute(
  'UPDATE FROM people SET first_name=?, last_name=?, email=?, phone=? WHERE id=?',
  [person.first_name, person.last_name, person.email, person.phone] 
);

const remove = (id) => connection.execute(
  'DELETE FROM people WHERE id=?',
  [id]
) 

module.exports = {
  insert,
  findAll,
  findById,
  edit,
  remove,
}