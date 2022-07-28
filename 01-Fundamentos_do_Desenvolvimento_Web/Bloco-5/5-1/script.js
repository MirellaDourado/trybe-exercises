 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
*/
        
        
        

// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos
  function mudarParágrafo() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerText = 'Codando muito em uma empresa que eu posa fazer a diferença.';
  }
  mudarParágrafo();
  

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  function corTrybe () {
    let mainContent = document.getElementsByClassName('main-content')[0].style.backgroundColor ='rgb(76,164,109)';
    return mainContent
  }
  corTrybe();


// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
  function quadradoBranco () {
    let quadrado = document.getElementsByClassName('center-content')
    quadrado[0].style = 'background-color: white'
  }

  quadradoBranco();
  document.getElementsByClassName('center-content')[0].style = 'background-color: white'

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
  function corrigirH1() {
    let tituloErrado = document.getElementsByTagName('h1')[0];
    tituloErrado.innerText = 'Exercício 5.1 - JavaScript'
  }
  corrigirH1();
  
// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
  function capsLock() {
    let paragrafoCapsLock= document.getElementsByTagName('p');
    for(let index = 0; index < paragrafoCapsLock.length; index += 1){ 
      paragrafoCapsLock[index].style = 'text-transform: uppercase'
    } 
  }
  capsLock();
  
  
// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
  function paragrafosNoConsole() {
    for(let index = 0; index < document.getElementsByTagName('p').length; index += 1) {
      console.log(document.getElementsByTagName('p')[index].innerText)
    }
  }  

  paragrafosNoConsole();
