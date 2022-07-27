 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
*/
        
        
        

// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos

  document.getElementsByTagName('p')[1].innerText = 'lorem ipsum';

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

  document.getElementsByClassName('main-content')[0].style = 'background-color: rgb(76,164,109)'

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

  document.getElementsByClassName('center-content')[0].style = 'background-color: white'

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
  document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'

// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
  for(let index = 0; index < document.getElementsByTagName('p').length; index += 1){
    document.getElementsByTagName('p')[index].style = 'text-transform: uppercase'
  } 
  
// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
  for(let index = 0; index < document.getElementsByTagName('p').length; index += 1){
    console.log(document.getElementsByTagName('p')[index].innerText)
  }