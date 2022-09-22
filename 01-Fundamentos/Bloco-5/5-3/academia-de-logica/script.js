const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

// ---------------------------------
// Crie uma função para gerar de maneira dinâmica 9 divs

// Deve conter a classe celula
// Deve conter o id numerados de 0 a 8
// Deve ser filho da div grid
// Cada div deve possuir um evento de click chamando uma função com o nome Jogar(Faremos no requisito)
const grid = document.querySelector('.grid')

function criacaoDiv(){
  for(let index = 0; index < 9; index += 1){
    let divs = document.createElement('div')
    divs.id = index
    divs.className = 'celula'
    grid.appendChild(divs)
    divs.addEventListener('click', Jogar)
  } 
}
criacaoDiv()

//  ---------------------------------------------
// Crie a função Jogar que deve receber o evento do click

// Deve guardar o alvo clicado
// Checar de qual jogador é o turno
// Alterar o texto com o id player para o texto do jogador da vez ( X ou O )
// Alterar o texto do alvo clicado para o texto do jogador da vez ( X ou O )
// Alterar o turno dos jogadores
let jogador = document.querySelector('#player')

function Jogar(alvo){
  if( jogador.innerText === 'Vez do jogador X'){
    alvo.target.innerText = 'X'
    jogador.innerText= 'Vez do jogador O'
    console.log(alvo)
  } else {
    alvo.target.innerText = 'O'
    jogador.innerText= 'Vez do jogador X'
  }
}