// Acesse o elemento elementoOndeVoceEsta.
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta')

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = ondeVoceEsta.parentElement
pai.style.color = 'green'

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoFilho = ondeVoceEsta.firstElementChild
filhoFilho.innerText = 'olá'

// Acesse o primeiroFilho a partir de pai.
let firstSon = pai.firstElementChild

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
var sonBeforeMe = ondeVoceEsta.previousSibling

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atencao = ondeVoceEsta.nextSibling

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroSon = ondeVoceEsta.nextElementSibling

// Agora acesse o terceiroFilho a partir de pai.
var deBaixoPraCima = pai.lastElementChild.previousElementSibling

// -------------------------------------------------------------------

// Crie um irmão para elementoOndeVoceEsta.
let irmaoOndeVoceEsta = document.createElement('div')
irmaoOndeVoceEsta.className = 'irmaoDoOndeVoceEsta'

pai.appendChild(irmaoOndeVoceEsta)

// Crie um filho para elementoOndeVoceEsta.
let filhoOndeVoceEsta = document.createElement('div')
filhoOndeVoceEsta.className = 'filhoDoOndeVoceEsta'
ondeVoceEsta.appendChild(filhoOndeVoceEsta)

// Crie um filho para primeiroFilhoDoFilho.
let filhFilhoDofilho = document.createElement('div')
filhFilhoDofilho.className = 'primeiroFilhoDoFilhoDoFilho'
filhoFilho.appendChild(filhFilhoDofilho)

// A partir desse filho criado, acesse terceiroFilho.
var muitoTexto = filhFilhoDofilho.parentElement.nextElementSibling.parentElement.nextElementSibling

//  ---------------------------------------------------------------------
