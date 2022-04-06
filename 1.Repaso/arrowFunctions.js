const saludar = function (nombre) {
  return `Hola ${nombre} como estas?`;
};

console.log(saludar("Mario"));

// () => {}
const saludar2 = (nombre) => `Hola ${nombre} como estas?`;

console.log(saludar2("Mario"));

const test = (name, valor) => `Hola ${name}`;
console.log(test("Ana", 100));
