import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";

export class Veterinaria {
  private nombre: string;
  private direccion: string;
  private id: number;
  private clientes: Cliente[] = [];

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

  // Agregar un cliente a la lista de clientes
  agregarCliente(cliente: Cliente): boolean {
    // Verificamos si el cliente ya está registrado (por ID)
    if (this.clientes.some((c) => c.getId() === cliente.getId())) {
      console.log("El cliente ya está registrado en esta veterinaria.");
      return false;
    }
    this.clientes.push(cliente);
    console.log(`Cliente ${cliente.getNombre()} agregado a la veterinaria.`);
    return true;
  }

  // Eliminar un cliente de la lista
  eliminarCliente(idCliente: number): boolean {
    const clienteIndex = this.clientes.findIndex(
      (c) => c.getId() === idCliente
    );
    if (clienteIndex === -1) {
      console.log("Cliente no encontrado.");
      return false;
    }
    this.clientes.splice(clienteIndex, 1);
    console.log(`Cliente con ID ${idCliente} eliminado.`);
    return true;
  }

  // Editar los datos de un cliente
  editarCliente(idCliente: number, nuevoCliente: Cliente): boolean {
    const clienteIndex = this.clientes.findIndex(
      (c) => c.getId() === idCliente
    );
    if (clienteIndex === -1) {
      console.log("Cliente no encontrado.");
      return false;
    }
    this.clientes[clienteIndex] = nuevoCliente;
    console.log(`Cliente con ID ${idCliente} actualizado.`);
    return true;
  }

  // Obtener la lista de clientes de la veterinaria
  getClientes() {
    return this.clientes;
  }
}

// Modificar el editar cliente dentro de clase Veterinaria (en vez de reemplazar, que se puedan editar los datos).

// Dentro de clase Cliente terminar agregarMascota y hacer el editarMascota y el eliminarMascota.

// Dentro de clase GestorVeterinarias los editarVeterinaria y editarProveedor

// Menú interactivo
