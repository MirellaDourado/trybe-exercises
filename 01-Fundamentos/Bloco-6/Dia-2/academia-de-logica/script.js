const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas() {
  return select.options[select.selectedIndex].value;
}

function getData(value) {
  const valueDate = value + 'T03:00:00.000Z';
  data = new Date(valueDate);
  dataFormatada = data.toLocaleDateString('pt-BR');
  return dataFormatada;
}

function criarListaReserva(event) {
  let lis = document.createElement('li');
  lis.innerText = `Reserva para o dia: ${checkin.value} até o dia ${checkout.value} quarto: ${document.querySelector('input[name="tipoQuartos"]:checked').value} - para: ${select.value} - obs: ${textArea.value}`;
  ol.appendChild(lis);
  event.preventDefault();
}
btnSubmit.addEventListener('click', criarListaReserva);
