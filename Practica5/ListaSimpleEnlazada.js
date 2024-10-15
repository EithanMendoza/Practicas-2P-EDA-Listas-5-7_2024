
class ListaSimpleEnlazada {
    constructor() {
      this.cabeza = null; 
    }
  
    agregar(palabra) {
      const nuevoNodo = new Nodo(palabra);
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo; 
      } else {
        let actual = this.cabeza;
        while (actual.siguiente !== null) {
          actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
      }
    }
  
    mostrar() {
      let actual = this.cabeza;
      let resultado = '';
      while (actual !== null) {
        resultado += `<p>${actual.palabra}</p>`;
        actual = actual.siguiente;
      }
      return resultado;
    }
  }
  