let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSomaArray = null;

// 1.  Percorra o array
// for(let percorrendoArray of numbers){
//   console.log(percorrendoArray)
// }


// 2 . Some os valores do array
//  for (let somaArray = 0; somaArray < (numbers.length -1); somaArray += 1){
//   let resultadoSoma = numbers[somaArray] + numbers[somaArray + 1];
//   console.log(resultadoSoma)
// };


// 3. Calcule e imprima a média aritmética dos valores 
// let somatorio = null;

// for(let index = 0; index < (numbers.length); index += 1){
//   somatorio+=numbers[index];
// };

// console.log(somatorio/numbers.length)


// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
// const mediaAritmetica = somatorio/numbers.length

// if(mediaAritmetica > 20){
//   console.log("Valor maior que 20")
// } else {
//   console.log("Valor menor ou igual a 20")
// }


// 5. Com o for, descubra qual o maior valor contido no array e imprima-o
let comparacao = 0;

for (let indice = 0; indice < numbers.length; indice += 1) {
  if (comparacao <= numbers[indice]){
    comparacao = numbers[indice]
  }
}

console.log(comparacao)