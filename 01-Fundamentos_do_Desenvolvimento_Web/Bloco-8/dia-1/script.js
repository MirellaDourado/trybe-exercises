//  Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const mail = name => {
  const employ = name.toLowerCase()
  let nome = ''
  for (i in employ) {
    if (employ[i] === ' ') {
      nome += '_'
    } else {
      nome += employ[i]
    }
  }
  return(`${nome}@trybe.com`)
}

const infoGen = name => ({nomeCompleto: name, email: mail(name)})

const newEmployees = () => {
  const employees = {
    id1: infoGen('Pedro Guerra'),
    id2: infoGen('Luiza Drumond'),
    id3: infoGen('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees())

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const randomize = () => {
  return (Math.floor(Math.random() * 5) + 1)
}

const sorteio = (number) => {
  const sorteado = randomize()
  if( sorteado === number) {
    return 'Parabéns você ganhou'
  }
  return `Tente novamente, o número sorteado foi: ${sorteado}`
}

console.log(sorteio(4));

// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correction = (gabarito, respAluno) => {
  if (gabarito === respAluno) {
    return 1
  } else if (respAluno === 'N.A') {
    return 0
  } else {
    return (-0.5)
  }
}

const points = (gabarito, respAluno, func) => {
  let nota = 0
  for (index in gabarito) {
    const respostas = func(gabarito[index], respAluno[index])
    nota += respostas
  }
  return nota
}

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, correction))
