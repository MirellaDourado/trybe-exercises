const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de tasks', function () {
  it('Testando o insert', async function () {

    sinon.stub(connection, 'execute')
      .resolves([{ insertId: 10 }]);

    const response = await chai
      .request(app)
      .post('/tasks')
      .send(
        {
        nome: 'Estudar',
        descricao: 'Estudar Express com MySql',
      },
    );

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({ message: 'Atividade cadastrada com sucesso com o id: 10' })
  });

  afterEach(sinon.restore);
});