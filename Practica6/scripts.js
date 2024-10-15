const listaInvertida = new ListaSimpleEnlazada();

function invertirPalabra() {
  const palabra = document.getElementById('palabra').value.trim();

  if (palabra === '') {
    alert('Por favor, introduce una palabra.');
    return;
  }

  listaInvertida.cabeza = null;

  for (let i = 0; i < palabra.length; i++) {
    listaInvertida.agregarAlInicio(palabra[i]);
  }

  mostrarPalabraInvertida();

  document.getElementById('palabra').value = '';
}

function mostrarPalabraInvertida() {
  const palabraInvertidaDiv = document.getElementById('palabraInvertida');
  palabraInvertidaDiv.innerHTML = `<p>${listaInvertida.mostrar()}</p>`;
}
