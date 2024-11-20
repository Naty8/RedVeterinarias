import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";
import { Proveedor } from "./Proveedor";
import { GestorVeterinarias } from "./GestorVeterinarias";

const VetCode = new GestorVeterinarias();
VetCode.generarIdUnico();

const veterinaria1 = new Veterinaria(
  "Vete1",
  "CCC 229",
  VetCode.generarIdUnico()
);

const cliente1 = new Cliente("Pedro", 2284547411, VetCode.generarIdUnico());
const cliente2 = new Cliente("Marcela", 2284757878, VetCode.generarIdUnico());
// cliente1.incrementarVisita();
// console.log(cliente1.verificarVip());

const mascota1 = new Mascota("Popi", "Loro", VetCode.generarIdUnico());
const mascota2 = new Mascota("Can", "Perro", VetCode.generarIdUnico());

const proveedor1 = new Proveedor(
  "AlimentosSA",
  2281458799,
  VetCode.generarIdUnico(),
  "Cnel. Suárez 1114",
  "alimentossa@gmail.com",
  new Date(),
  "Alimentos procesados"
);

// console.log(veterinaria1.getNombre());

VetCode.agregarVeterinaria(veterinaria1);
VetCode.agregarProveedor(proveedor1);

veterinaria1.agregarCliente(cliente1);
cliente1.agregarMascota(mascota1);
cliente1.agregarMascota(mascota2);

VetCode.eliminarVeterinaria(veterinaria1.getId());
veterinaria1.editarCliente(cliente1.getId(), cliente2);
// veterinaria1.eliminarCliente(cliente1.getId());

// console.log(VetCode);
// console.log("-----------------------");
console.log(proveedor1);
