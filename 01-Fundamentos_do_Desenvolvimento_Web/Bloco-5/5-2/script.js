// 1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let tituloPrincipal = document.createElement('h1')
tituloPrincipal.innerHTML = 'Exercício 5.2 - JavaScript DOM'
document.body.appendChild(tituloPrincipal)

// 2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let mainContent = document.createElement('main')
document.body.appendChild(mainContent)

// 3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sectionContent = document.createElement('section')
sectionContent.className = 'center-content'
mainContent.appendChild(sectionContent)

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragrafo = document.createElement('p')
paragrafo.innerText = 'DOM é assustador de primeira'
sectionContent.appendChild(paragrafo)

// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftContent = document.createElement('section')
leftContent.className = 'left-content'
mainContent.appendChild(leftContent)

// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let rightContent = document.createElement('section')
rightContent.className = 'right-content'
mainContent.appendChild(rightContent)

// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let smallImage = document.createElement('img')
smallImage.src = 'https://picsum.photos/200'
smallImage.className = 'small-image'
leftContent.appendChild(smallImage)

// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listaOrdenada = document.createElement('ul')
rightContent.appendChild(listaOrdenada)
let arrayExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for(let index = 1; index <= 10; index += 1){
  let listaOrdenadaExtenso = document.createElement('li')
  listaOrdenada.appendChild(listaOrdenadaExtenso)
  for(let indice = 0; indice < arrayExtenso.length; indice += 1){
    listaOrdenada.innerText = arrayExtenso[indice]
  }

}

// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for(let index = 1; index <= 3; index += 1){
  let titulosH3 = document.createElement('h3')
  mainContent.appendChild(titulosH3)
  }
  
  