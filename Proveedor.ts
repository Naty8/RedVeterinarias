export class Proveedor {
  nombre: string;
  telefono: number;
  id: number;
  direccion: string;
  correoElectronico: string;
  fechaRegistro: Date;
  categoria: string;
  constructor(
    nombre: string,
    telefono: number,
    id: number,
    direccion: string,
    correoElectronico: string,
    fechaRegistro: Date,
    categoria: string
  ) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = id;
    this.direccion = direccion;
    this.correoElectronico = correoElectronico;
    this.fechaRegistro = fechaRegistro;
    this.categoria = categoria;
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
  getDireccion() {
    return this.direccion;
  }
  getCorreoElectronico() {
    return this.correoElectronico;
  }
  getFechaRegistro() {
    return this.fechaRegistro;
  }
  getCategoria() {
    return this.categoria;
  }
}
