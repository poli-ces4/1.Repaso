/**
 * Object (conjunto propiedades (clave -> valor))  {}
 */

const person = {
  nombre: "Pedro",
  apellidos: "Mejia",
  estado: true,
};
console.log(person);
person.edad = 50;
console.log(person);

/**
 * Array (conjunto de elementos)  []
 */
const teams = ["Nacional", true, ["Hola"]];
console.log(teams[0]);
teams.push(person);
console.log(teams);
