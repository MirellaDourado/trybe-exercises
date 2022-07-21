//  1. Descubra a idade mínima

const Mariana = 20;
const Silvia = 30;
const Iza = 45;

if (Mariana < Silvia && Mariana < Iza) {
  console.log("Mariana é a pessoa mais jovem e possui", Mariana, "anos de idade.")
} else if (Silvia < Mariana && Silvia < Iza){
  console.log("Silvia é a pessoa mais jovem e possui", Silvia, "anos de idade.")
} else {
  console.log("Iza é a pessoa mais jovem e possui", Iza, "anos de idade.")
}

//  2. Taxa Metabólica Basal

const age = 21;
const sex = "F";
const weight = 46;
const height = 171;
let calculo;

if(sex.toUpperCase == "F"){
  calculo = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161
  console.log("A taxa metabólica basal é:", calculo, "Kcal.")
} else {
  calculo = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5
  console.log("A taxa metabólica basal é:", calculo, "Kcal.")
}


// 3. Lanchonete da Trybe

const clientChoice = 2

if(clientChoice == 1){
  console.log("1 - Trybe Lanche Feliz")
} else if (clientChoice == 2){
  console.log("2 - McTrybe")
} else if (clientChoice == 3){
  console.log("3 - TrybeWooper")
} else if (clientChoice == 4){
  console.log("4 - X-Trybe")
} else if (clientChoice == 5){
  console.log("5 - Triplo Trybe com JS")
} else {
  console.log("Ainda não possuímos esta opção :(")
} 