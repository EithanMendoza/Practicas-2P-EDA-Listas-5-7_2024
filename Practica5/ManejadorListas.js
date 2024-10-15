class ManejadorListas {
    constructor() {
      this.listas = {}; 
    }
  
    agregarPalabra(palabra) {
      const letraInicial = palabra[0].toLowerCase(); 
      
      if (!this.listas[letraInicial]) {
        this.listas[letraInicial] = new ListaSimpleEnlazada();
      }
  
      this.listas[letraInicial].agregar(palabra);
    }
  
    mostrarListas() {
      let resultado = '';
  
      for (const letra in this.listas) {
        resultado += `<h3>Lista para la letra "${letra.toUpperCase()}":</h3>`;
        resultado += this.listas[letra].mostrar();
      }
  
      return resultado;
    }
  }
  