import { Mascota } from "./Mascota";

export class Cliente {
  private nombre: string;
  private telefono: number;
  private esVip: boolean = false;
  private id: number;
  private visitas: number = 0;
  private mascotas: Mascota[] = [];

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

  agregarMascota(mascota: Mascota): void {
    this.mascotas.push(mascota);
  }
  getMascotas() {
    return this.mascotas;
  }
    eliminarMascota(idMascota:number): void{
    this.mascotas= this.mascotas.filter(mascota => mascota.getIdPropietario() !== idMascota);
  }
  editarMascota(idMascota:number, mascotaActualizada: Mascota):void{
    const indiceMascota = this.mascotas.findIndex(mascota => mascota.getIdPropietario()== idMascota);
    if(indiceMascota !== -1){
      this.mascotas[indiceMascota] = mascotaActualizada;
    }
  }
}
}
