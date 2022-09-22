// Operação aritmética
let a = 2;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


//  O maior de dois números
let c = 2
var d = 2

if (c > d){
  console.log("C é maior que D")
} 
else if (c < d){
  console.log("B é maior que A")
} 
else {
  console.log("Os dois valores são iguais")
}


// O maior de três números
const e = 10
const f = 5
const g = 18

if (e > f && e > g){
  console.log("E é a maior constante");
} 
else if (f > e && f > g){
  console.log("F é a maior constante");
}
else if (g > e && g > f){
  console.log("G é a maior constante");
}
else {
  console.log("Todas as constantes são iguais");
}


// Positivo, negativo ou zero
const h = 0

if (h > 0) {
  console.log("Positive")
} 
else if ( h < 0) {
  console.log("Negative")
} 
else {
  console.log ("Zero")
}


// É um triângulo?
const anguloAlfa = 80;
const anguloBeta = 70;
const anguloGama = 30;
const triangulo = 180
const somaAngulos = anguloAlfa + anguloBeta + anguloGama

if (anguloAlfa > 0 && anguloBeta > 0 && anguloGama > 0){
  console.log(somaAngulos === triangulo)
} else {
  console.log("Error")
}


//  Movimentos da peça de xadrez
let pecaDeXadrez = "rei"
const minusculo = pecaDeXadrez.toLowerCase(); 

switch (minusculo){
  case "peao":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas")
    break;
  case "cavalo":
    console.log("Pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical...")
    break;
  case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser")
    break;  
  case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser")
    break;
  case "dama":
    console.log("Pode mover-se em qualquer direção (vertical, horizontal e diagonal) quantas casas quiser desde que estejam livres")
    break;
  case "rei":
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez")
    break;
  default:
    console.log("Peça inválida")
}


// NOTA
const notaRecebida = 100;
const porcentagem = notaRecebida / 100

switch (porcentagem){
  case porcentagem>=90:
    console.log("A")
    break;
  case porcentagem>=80:
    console.log("B")
    break;
  case porcentagem>=70:
    console.log("C")
    break;
  case porcentagem>=60:
    console.log("D")
    break;
  case porcentagem>=50:
    console.log("E")
    break;
  case performance<50:
    console.log("F")

  default:
    console.log("ERROR")
}


// PELO MENOS UM PAR
const i = 2;
const j = 5;
const k = 9;

if (i%2==0 || j%2==0 || k%2==0){
  console.log("true")
}
else {
  console.log("false");
}


// PELO MENOS UM ÍMPAR
const l = 3;
const m = 9;
const n = 2;

if (l%2!==0 || m%2!==0 || n%2!==0){
   console.log("true")
}
else {
   console.log("false");
}


// LUCRO VENDENDO MIL
let valorDoProduto = 4;
let valorDaVenda = 20;
let vendidos = 1000
let lucroParcial = valorDaVenda - valorDoProduto
let produtosVendidos = lucroParcial * vendidos
let lucroTotal = produtosVendidos * 0.2

if (valorDoProduto >= 0 && valorDaVenda >= 0 && vendidos){
  console.log(lucroTotal)
}   
else{
  console.log("ERROR")
}


// INSS E IR

const salarioBruto = 3000.00;
let aliquotaInss = null;
let aliquotaIr = null;

if (salarioBruto <= 1556.94){
  aliquotaInss = salarioBruto * 0.08;
} 
else if ( 1556.95 <= salarioBruto && salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto * 0.09;
}
else if ( 2594.93 <= salarioBruto && salarioBruto <=  5189.82) {
  aliquotaInss = salarioBruto * 0.11;
}
else {
  aliquotaInss = 570.88;
}

const salarioInssAbatido = salarioBruto - aliquotaInss;

if (salarioInssAbatido <= 1903.98) {
  aliquotaIr = 0;
} else if (salarioInssAbatido <= 2826.65) {
  aliquotaIr = (salarioInssAbatido * 0.075) - 142.80;
} else if (salarioInssAbatido <= 3751.05) {
  aliquotaIr = (salarioInssAbatido * 0.15) - 354.80;
} else if (salarioInssAbatido <= 4664.68) {
  aliquotaIr = (salarioInssAbatido * 0.225) - 636.13;
} else {
  aliquotaIr = (salarioInssAbatido * 0.275) - 869.36;
};

console.log("Salário:", (salarioInssAbatido - aliquotaIr));