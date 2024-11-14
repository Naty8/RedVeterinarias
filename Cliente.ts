export class Cliente {
  private nombre: string;
  private telefono: number;
  private esVip: boolean = false;
  private id: number;
  private visitas: number = 0;

  constructor(nombre: string, telefono: number, id: number) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = id;
  }

  incrementarVisita(): void {
    this.visitas++;
    if (this.visitas >= 5) {
      this.esVip = true;
    }
  }

  verificarVip(): boolean {
    return this.esVip;
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
