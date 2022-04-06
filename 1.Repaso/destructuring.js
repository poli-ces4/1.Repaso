/**
 * Object (propiedades)
 */

const jugador = {
  nombre: "Luis",
  equipo: "Liverpool",
  edad: 25,
};

/* ES5
const equipo = jugador.equipo;
const edad = jugador.edad;
console.log(equipo);
console.log(edad);
*/

const { equipo, edad } = jugador;
console.log(equipo);
console.log(edad);
/**
 * Array (elementos)
 */

const jugadores = ["James", "Pibe", "Luis"];
/*
const jugador1 = jugadores[0];
const jugador3 = jugadores[2];
console.log(jugador1);
console.log(jugador3);
*/
const [, jugador1, jugador3] = jugadores;
console.log(jugador1);
console.log(jugador3);

let james = 28;
let luis = 25;

[james, luis] = [luis, james];
console.log(james);
console.log(luis);
