import { Proveedor } from "./Proveedor";
import { Veterinaria } from "./Veterinaria";

export class GestorVeterinarias {
  private veterinarias: Veterinaria[] = [];
  private proveedores: Proveedor[] = [];

  generarIdUnico(): number {
    let id: number;
    do {
      id = Math.floor(Math.random() * 10000);
    } while (this.existeId(id));
    return id;
  }

  existeId(id: number): boolean {
    return (
      this.veterinarias.some((v) => v.getId() == id) ||
      this.proveedores.some((p) => p.id == id)
    );
  }

  agregarVeterinaria(veterinaria: Veterinaria): void {
    this.veterinarias.push(veterinaria);
  }

  eliminarVeterinaria(idVeterinaria: number): boolean {
    const veteIndex = this.veterinarias.findIndex(
      (c) => c.getId() == idVeterinaria
    );
    if (veteIndex == -1) {
      console.log("Veterinaria no encontrada.");
      return false;
    }
    this.veterinarias.splice(veteIndex, 1);
    console.log(`Veterinaria con ID ${idVeterinaria} eliminada.`);
    return true;
  }

  // Falta el editar veterinaria

  agregarProveedor(proveedor: Proveedor): void {
    this.proveedores.push(proveedor);
  }

  eliminarProveedor(idProveedor: number): boolean {
    const proveIndex = this.veterinarias.findIndex(
      (c) => c.getId() === idProveedor
    );
    if (proveIndex == -1) {
      console.log("Proveedor no encontrado.");
      return false;
    }
    this.veterinarias.splice(proveIndex, 1);
    console.log(`Proveedor con ID ${idProveedor} eliminado.`);
    return true;
  }

  // Falta el editar proveedor

  getVeterinarias() {
    return this.veterinarias;
  }

  getProveedores() {
    return this.proveedores;
  }
}
