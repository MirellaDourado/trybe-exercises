// Acesse o elemento elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentElement
pai.style.color = 'green'

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoFilho = elementoOndeVoceEsta.firstElementChild
filhoFilho.innerText = 'olá'

// Acesse o primeiroFilho a partir de pai.
let firstSon = pai.firstElementChild

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
var sonBeforeMe = elementoOndeVoceEsta.previousSibling

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atencao = elementoOndeVoceEsta.nextSibling

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroSon = elementoOndeVoceEsta.nextElementSibling

// Agora acesse o terceiroFilho a partir de pai.
var deBaixoPraCima = pai.lastElementChild.previousElementSibling