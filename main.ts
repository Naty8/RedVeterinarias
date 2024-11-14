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
// cliente1.incrementarVisita();
// console.log(cliente1.verificarVip());

const mascota1 = new Mascota("Popi", "Loro", VetCode.generarIdUnico());
const mascota2 = new Mascota("Can", "Perro", VetCode.generarIdUnico());

const proveedor1 = new Proveedor(
  "AlimentosSA",
  2281458799,
  VetCode.generarIdUnico()
);

// console.log(veterinaria1.getNombre());

VetCode.agregarVeterinaria(veterinaria1);
VetCode.agregarMascota(mascota1);
VetCode.agregarMascota(mascota2);
VetCode.agregarCliente(cliente1);
VetCode.agregarProveedor(proveedor1);

console.log(VetCode);
