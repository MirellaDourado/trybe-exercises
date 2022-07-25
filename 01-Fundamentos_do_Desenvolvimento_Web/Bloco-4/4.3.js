//  retorne o fatorial de 10
// let numero = 10;
// let resultado = null;
// for(let index = 1; index <= numero; index+=1){
//   resultado = numero * index 

// } 
// console.log(numero + "! = " + resultado );


// inverter uma palavra
// let word = 'trybe';
// let contrario = ""

// for(let contadora = word.length - 1; contadora >= 0; contadora = contadora -1) {
//   contrario += word[contadora];
// }
// console.log(contrario);


// retorne a maior palavra deste array e a menor.
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maior = array[0]
// let menor = array[0]

// for (let chave = 0; chave < array.length; chave+=1){
//   if(array[chave].length >= maior.length){ 
//     maior = array[chave]
//   }
// }

// for(let chave2 = 0; chave2 < array.length; chave2+=1){
//   if(array[chave2].length < menor.length){
//     menor = array[chave2]
//   }
// }

// console.log(maior, menor)


// Algoritmo que retorne o maior número primo entre 2 e 50 (GotHelp)
// let maiorPrimo = 0;

// for (let dividendo = 2; dividendo <= 50; dividendo += 1) {
//   let primo = true;
//   for (let divisor = 2; divisor < dividendo; divisor += 1) {
//     if (dividendo % divisor === 0) {
//       primo = false;
//     }
//   }
//   if (primo === true) {
//     maiorPrimo = dividendo;
//   }
// }

// console.log(maiorPrimo);



// Bônus 1.

// n = 2
// let horizontal = "";
// let vertical = []

// if(n > 1){
//   for (let index = 1; index <= n; index += 1){
//     horizontal += "*"
//   }
// }
// for(let indice = 1; indice <= n; indice +=1){
//   vertical = horizontal
//   console.log(vertical)
// }



// Bonus 2. 

// n = 7
// let horizontal = "";
// let vertical = []

// for (let index = 1; index <= n; index += 1){
//   if (horizontal.length <= n)
//   horizontal += "*"
//   console.log(horizontal)
// }



//  Bonus 3.
