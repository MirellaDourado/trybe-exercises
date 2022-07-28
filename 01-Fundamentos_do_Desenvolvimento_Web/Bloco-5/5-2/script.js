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

