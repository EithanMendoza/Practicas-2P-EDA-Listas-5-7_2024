class ListaSimpleEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    agregarAlInicio(letra) {
      const nuevoNodo = new Nodo(letra);
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
      } else {
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
      }
    }
  
    mostrar() {
      let actual = this.cabeza;
      let resultado = '';
      while (actual !== null) {
        resultado += actual.letra;
        actual = actual.siguiente;
      }
      return resultado;
    }
  }
  