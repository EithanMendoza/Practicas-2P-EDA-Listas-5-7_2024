// Clase ListaDobleEnlazada
class ListaDobleEnlazada {
    constructor() {
      this.cabeza = null;
      this.cola = null;
    }
  
    agregar(letra) {
      const nuevoNodo = new Nodo(letra);
      if (this.cabeza === null) {
        this.cabeza = nuevoNodo;
        this.cola = nuevoNodo;
      } else {
        this.cola.siguiente = nuevoNodo;
        nuevoNodo.anterior = this.cola;
        this.cola = nuevoNodo;
      }
    }
  
    esPalindromo() {
      let inicio = this.cabeza;
      let fin = this.cola;

      while (inicio !== null && fin !== null) {
        if (inicio.letra !== fin.letra) {
          return false;
        }
        inicio = inicio.siguiente;
        fin = fin.anterior;
      }
  
      return true;
    }
  }
  