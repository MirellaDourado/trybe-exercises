const createState = (state, inicials, capital, population) => {
  try {
    if (!state || !inicials || !capital || !population) {
      throw new Error('Preencha todos os campos para criar sua cidade!');
    }
    return `Bem-vindo ao estado ${state}-${inicials}, nossa capital ${capital} possui ${population} pessoas`;
  } catch (error) {
    return error.message;
  }
};

console.log(createState('Caduverso', 'CV', 'Caduversolandia', 137921852));

module.exports = createState;
