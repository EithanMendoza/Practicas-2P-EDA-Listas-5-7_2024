const listaPalindromo = new ListaDobleEnlazada();

function verificarPalindromo() {
  const palabra = document.getElementById('palabra').value.trim().toLowerCase();

  if (palabra === '') {
    alert('Por favor, introduce una palabra.');
    return;
  }

  listaPalindromo.cabeza = null;
  listaPalindromo.cola = null;

  for (let i = 0; i < palabra.length; i++) {
    listaPalindromo.agregar(palabra[i]);
  }

  const esPalindromo = listaPalindromo.esPalindromo();

  mostrarResultado(esPalindromo);

  document.getElementById('palabra').value = '';
}

function mostrarResultado(esPalindromo) {
  const resultadoDiv = document.getElementById('resultado');
  if (esPalindromo) {
    resultadoDiv.innerHTML = '<p>¡La palabra es un palíndromo!</p>';
  } else {
    resultadoDiv.innerHTML = '<p>La palabra no es un palíndromo.</p>';
  }
}
