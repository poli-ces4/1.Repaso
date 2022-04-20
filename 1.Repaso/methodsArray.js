let teams = ["Nacional", "Medellin", "Envigado"];

for (let i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}

teams.forEach((team) => {
  console.log(team);
});

/** push-shift-pop son mutables */
console.log(teams);
teams.push("Rionegro");
console.log(teams);
let primerItem = teams.shift();
console.log(primerItem);
console.log(teams);
let ultimoItem = teams.pop();
console.log(ultimoItem);
console.log(teams);
console.log(teams);

/** inmutables */

let students = ["Pedro", "Ana", "Jorge"];
/** Map Extraer*/
var names = students.map((pos) => `${pos}`);
console.log(names);
console.log(students);

let products = [
  { name: "Malta", cost: 10 },
  { name: "Gaseosa", cost: 15 },
  { name: "Cerveza", cost: 20 },
];

var nameProducts = products.map((product) => product.name);
console.log(nameProducts);
console.log(products);

let taxProducts = products.map((product) => {
  return { ...product, tax: 19 };
});

console.log(taxProducts);
console.log(products);

const ligaBetPlay = [
  { equipo: "Medellin", ciudad: "Medellin", campeonatos: 9, internacional: 0 },
  { equipo: "Nacional", ciudad: "Medellin", campeonatos: 15, internacional: 2 },
  {
    equipo: "Millonarios",
    ciudad: "Bogota",
    campeonatos: 14,
    internacional: 0,
  },
  { equipo: "SantaFe", ciudad: "Bogota", campeonatos: 9, internacional: 0 },
  {
    equipo: "OnceCaldas",
    ciudad: "Manizales",
    campeonatos: 5,
    internacional: 1,
  },
  { equipo: "America", ciudad: "Cali", campeonatos: 13, internacional: 0 },
  { equipo: "Cali", ciudad: "Cali", campeonatos: 9, internacional: 0 },
];

/**ES6 */

//Map = iterar - extraer
const nombresEquiposMap = ligaBetPlay.map((team) => team.equipo);
console.log(nombresEquiposMap);
//Find = buscar (devuleve solo la primera coincidencia)
const ciudadBogota = ligaBetPlay.find((team) => team.ciudad === "Bogota");
console.log(ciudadBogota);
//Every
const titulosInternacional = ligaBetPlay.every(
  (team) => team.internacional > 0
);
console.log(titulosInternacional);
//Some
const alguienInternacional = ligaBetPlay.some((team) => team.internacional > 0);
console.log(alguienInternacional);
//Filter
const nombresEquiposCiudadMedellin = ligaBetPlay
  .filter((team) => team.ciudad === "Medellin")
  .map((team) => team.equipo);
console.log(nombresEquiposCiudadMedellin);
//Reduce
const totalInternacionales = ligaBetPlay
  .filter((team) => team.internacional > 0)
  .reduce((acumulador, team) => (acumulador += team.internacional), 0);
console.log(totalInternacionales);

const totalCampeonatosCiudadCali = ligaBetPlay
  .filter((team) => team.ciudad === "Cali")
  .reduce((contador, team) => (contador += team.campeonatos), 0);
console.log(totalCampeonatosCiudadCali);

const texto = ["El", "colombiano", "Luis Díaz", "gritó", "presente"];
const frase = texto
  .map((palabra) => palabra)
  .reduce((fraseCompleta, palabra) => (fraseCompleta += " " + palabra), " ");
console.log(frase);

//{campeonatos: 9, internacional: 0}

const ObjTotales = ligaBetPlay.reduce(
  (prev, team) => ({
    campeonatos: prev.campeonatos + team.campeonatos,
    internacional: prev.internacional + team.internacional,
  }),
  { campeonatos: 0, internacional: 0 }
);
console.log(ObjTotales);
