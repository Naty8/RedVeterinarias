export class Mascota {
  private nombre: string;
  private especie: string;
  private idPropietario: number;

  constructor(nombre: string, especie: string, idPropietario: number) {
    this.nombre = nombre;
    this.especie = especie;
    this.idPropietario = idPropietario;
    if (especie.toLowerCase() !== "perro" && especie.toLowerCase() !== "gato") {
      this.especie = "exótica";
    }
  }

  getNombre() {
    return this.nombre;
  }

  getEspecie() {
    return this.especie;
  }

  getIdPropietario() {
    return this.idPropietario;
  }

  //   definirEspecieExotica(): void {
  //     if (this.especie.toLowerCase() !== "gato" && this.especie.toLowerCase() !== "perro") {
  //       this.especie = "exótica";
  //     }
  //   }
}
