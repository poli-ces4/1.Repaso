const arr = [
  { name: "luna", sex: "f", age: 200, species: "dog" },
  { name: "jimmy", sex: "m", age: 60, species: "human" },
  { name: "snoop", sex: "m", age: 60, species: "human" },
  { name: "jennifer", sex: "f", age: 60, species: "human" },
  { name: "yeller", sex: "f", age: 20, species: "dog" },
];

/**
 *  1 name de todos los dog
 *  2 name del sex = f
 *  3 total de edades
 *  4 promedio edades de los humanos
 *  5 nombre humanos mayores de 50
 */

//1 pdte
const nombreDog = arr
  .filter((nombreDog) => nombreDog.species === "dog")
  .map((nombreDog) => nombreDog.name);
console.log(nombreDog);

// 2 ok
const nombreDogsMujeres = arr
  .filter((name) => name.sex === "f")
  .map((dog) => dog.name);
console.log(nombreDogsMujeres);

//3
const totalEdades = arr.reduce((suma, pos) => (suma += pos.age), 0);
console.log(totalEdades);

//4 pdte
const listaHumanos = arr.filter((serVivo) => serVivo.species == "human");
const promedioEdades =
  listaHumanos.reduce(
    (totalEdades, serVivo) => (totalEdades += serVivo.age),
    0
  ) / listaHumanos.length;

console.log(promedioEdades);

//5 pdte
let mayores = arr
  .filter((x) => x.age > 50 && x.species == "human")
  .map((map) => map.name);
console.log(mayores);
