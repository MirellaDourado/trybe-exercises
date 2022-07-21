let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSomaArray = null;

// //  Percorra o array
// for(let percorrendoArray of numbers){
//   console.log(percorrendoArray)
// }


//  Some os valores do array
for (let somaArray = 0; somaArray < (numbers.length -1); somaArray+= 1){
  let resultadoSoma = numbers[somaArray] + numbers[somaArray + 1];
  console.log(resultadoSoma)
};