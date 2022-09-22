let container = document.querySelector(".container")
let inputDeTexto = document.querySelector('#input')
let title = document.querySelector('#my-spotrybefy')

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// No CSS a class tech, a qual é aplicada a caixa, está recebendo o translate que serve para mover o elemento para os lados, ou para cima/baixo

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// function handleChangeTech(event) {
function Sobe(evento){
  let tech = document.querySelector(".tech")
  tech.classList.toggle('tech')
  evento.target.classList.toggle('tech')
  inputDeTexto.value = ''
}
container.addEventListener("click", Sobe)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function AlteraTexto(valor){
  let tech = document.querySelector(".tech");
  tech.innerText = valor.target.value; 
}
inputDeTexto.addEventListener('input', AlteraTexto)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function RedirecionarPortfólio(evento){
  window.location.replace('https://mirelladourado.github.io/')
}
title.addEventListener('dblclick', RedirecionarPortfólio)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeColor(evento){
  evento.target.style.color = '#2FC18C'
}
title.addEventListener('mouseover',changeColor)

function backColor(event){
  event.target.style.color = 'unset'
}
title.addEventListener('mouseout', backColor)

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retor nará o objeto 'firstLi'.