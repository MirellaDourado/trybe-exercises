const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const turnoNoturno = (objeto, chave, valor) => {
  objeto[chave] = valor
}

turnoNoturno(lesson2, 'turno', 'noturno')

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (objeto) => {
  return Object.keys(objeto)
}

console.log(listKeys(lesson2))

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const objLength = (objeto) => {
  return Object.getOwnPropertyNames(objeto).length
}

console.log(objLength(lesson2))

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objValues = (objeto) => {
  return Object.values(objeto)
}

console.log(objValues(lesson2))

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

const newObj = () => {
  Object.assign(allLessons.lesson1, lesson1);
  Object.assign(allLessons.lesson2, lesson2);
  Object.assign(allLessons.lesson3, lesson3)
}

newObj()

console.log(allLessons)

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudents = () => {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
}

console.log(allStudents())

// Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. 

const valueByIndex = (chave, indice) => {
  return Object.values(chave)[indice]


}

console.log(valueByIndex(lesson2, 0))

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const veryfiEntries = (obj, key, value) => {
  let result = false;
  for (let index in Object.entries(obj)) {
    if (Object.entries(obj)[index][0] === key && Object.entries(obj)[index][1] === value) {
      result = true;
    }
  }
  return result
}

console.log(veryfiEntries(lesson3, 'turno', 'noite'));
console.log(Object.entries(lesson3))


// EXTRA

// 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const mathStudents = () => {
  return allLessons.lesson3.numeroEstudantes
}

console.log(mathStudents())

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const findingInfo = (obj, professor) => {
  const lessons = [];
  let students = 0;
  const values = Object.values(obj)

  for (index in values) {
    if (values[index].professor === professor) {
      lessons.push(values[index].materia)
      students += values[index].numeroEstudantes
    }
  }

  return { aulas: lessons, estudantes: students }
}

const relatorio = (obj, professor) => {
  const result = {};
  result.professor = professor;
  Object.assign(result, findingInfo(obj, professor))

  return result
}

console.log(relatorio(allLessons, 'Maria Clara'))
