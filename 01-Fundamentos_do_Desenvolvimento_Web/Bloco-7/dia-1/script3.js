const btn = document.querySelector('button')
const counter = document.querySelector('#counter')


let clickCount = 0;
btn.addEventListener('click', function() {
  clickCount++;
  counter.innerHTML = `Você clicou ${clickCount} vezes no botão.`;
})