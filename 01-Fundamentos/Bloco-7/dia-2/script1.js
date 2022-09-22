const verification = (a, b) => {
  if (a === '' || b === '') {
  throw new Error ('Os valores precisam ser declarados')
  } else if (typeof a !== 'number' ||  typeof b !== 'number' ) {
  throw new Error ('Os valores precisam ser numéricos');
  }
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  try {
    verification(value1, value2)
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } 
  catch (erro) {
    document.getElementById('result').innerHTML = erro.message;
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}