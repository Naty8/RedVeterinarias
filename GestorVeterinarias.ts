import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";
import { Proveedor } from "./Proveedor";
import { Veterinaria } from "./Veterinaria";

export class GestorVeterinarias {
  private veterinarias: Veterinaria[] = [];
  private clientes: Cliente[] = [];
  private mascotas: Mascota[] = [];
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
      this.veterinarias.some((v) => v.getId() === id) ||
      this.clientes.some((c) => c.getId() === id) ||
      this.mascotas.some((m) => m.getIdPropietario() === id) ||
      this.proveedores.some((p) => p.id === id)
    );
  }

  agregarVeterinaria(veterinaria: Veterinaria): void {
    this.veterinarias.push(veterinaria);
  }

  agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  agregarMascota(mascota: Mascota): void {
    this.mascotas.push(mascota);
  }

  agregarProveedor(proveedor: Proveedor): void {
    this.proveedores.push(proveedor);
  }
}
