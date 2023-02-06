const app = require('./app');
const connection = require('./db/connection');

const port = 3001

app.listen(port, async () => {
  console.log(`Tem uma cobra na minha bota ${port}`)

  const [result] = await connection.execute('SELECT 1');
  if(result) console.log('MYSQL TÁ ON')
});