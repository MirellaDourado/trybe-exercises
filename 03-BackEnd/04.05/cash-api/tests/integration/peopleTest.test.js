const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const connection = require('../../src/db/connection');
const app = require('../../src/app');
const { expect, use } = require('chai');

use(chaiHttp);


const peopleResult = [
  {
    id: 1,
    firstName: 'Finn',
    lastName: 'Mertens',
    email: 'finn.Mertens@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Jake',
    lastName: 'Dog',
    email: 'jake.the.dog@trybe.com',
    phone: '851 678 5665',
  },
  {
    id: 3,
    firstName: 'Marceline',
    lastName: 'Abadeer',
    email: 'marceline.abadeer@trybe.com',
    phone: '851 678 6653'
  }
];

describe('Testando endpoints de people', function() {
  it('testando listagem de todas as pessoas', async function() {
    sinon.stub(connection, 'execute').resolves([peopleResult]);

    const response = await chai.request(app).get('/people');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(peopleResult);
  })

  it('Testando listagem por id', async function () {
    sinon.stub(connection, 'execute').resolves([[peopleResult[0]]]);

    const response = await chai.request(app).get('/people/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(peopleResult[0])
  })

  it('Testando o cadastro de uma pessoa', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const response = await chai.request(app).post('/people').send({
      firstName: 'Bonnibel',
      lastName: 'Bubblegum',
      email: 'princess.bonnie@trybe.com',
      phone: '851 678 6903'
    })

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ message: "Pessoa cadastrada com sucesso com o id 1" })
  })
  
  it('Testando a edição de um cadastro', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai
    .request(app)
    .put('/people/1')
    .send(
      {
        firstName: 'Gunter',
        lastName: 'Penguin',
        email: 'gunter.penguin',
        phone: '678 890 9983'
      },
    );

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: 'Pessoa com id: 1 modificada com sucesso.' });
  })

  it('Testando exclusão de um cadastro', async function ()  {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }])
    const result = await chai
      .request(app)
      .delete('/people/1');

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal({ message: "Pessoa com o id: 1 deletada com sucesso."})
  })
  afterEach(sinon.restore);
})