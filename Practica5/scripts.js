const manejadorListas = new ManejadorListas();

function agregarPalabra() {
  const palabra = document.getElementById('palabra').value.trim();

  if (palabra === '') {
    alert('Por favor, introduce una palabra.');
    return;
  }

  manejadorListas.agregarPalabra(palabra);
  mostrarListas();

  
  document.getElementById('palabra').value = '';
}


function mostrarListas() {
  const listasDiv = document.getElementById('listasDePalabras');
  listasDiv.innerHTML = manejadorListas.mostrarListas();
}
