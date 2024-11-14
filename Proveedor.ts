export class Proveedor {
  nombre: string;
  telefono: number;
  id: number;

  constructor(nombre: string, telefono: number, id: number) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = id;
  }

  getNombre() {
    return this.nombre;
  }

  getTelefono() {
    return this.telefono;
  }

  getId() {
    return this.id;
  }
}