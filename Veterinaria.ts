export class Veterinaria {
  private nombre: string;
  private direccion: string;
  private id: number;

  constructor(nombre: string, direccion: string, id: number) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = id;
  }

  getNombre() {
    return this.nombre;
  }

  getDireccion() {
    return this.direccion;
  }

  getId() {
    return this.id;
  }
}
