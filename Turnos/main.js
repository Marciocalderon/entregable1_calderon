let turnos = [];

function agregarTurno(nombre) {
  turnos.push(nombre);
  console.log(`Turno reservado para: ${nombre}`);
}

let continuar = true;

do {
  let nombre = prompt("Ingrese su nombre para solicitar un turno (o escriba 'salir' para finalizar):");

  if (nombre.toLowerCase() === 'salir') {
    continuar = false;
  } else {
    agregarTurno(nombre); 
  }

} while (continuar);

console.log("Turnos reservados:");
turnos.forEach((nombre, index) => {
  console.log(index + 1. +" " + nombre);
});
