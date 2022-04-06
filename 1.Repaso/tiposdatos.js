var nombre = "Juan";
console.log(typeof nombre);
var edad = 10;
console.log(typeof edad);
var estado = false;
console.log(typeof estado);
var undef = undefined;
console.log(typeof undef);
var test = null;
console.log(test);

nombre = false;
console.log(typeof nombre);

// Tipo primitivo vs No primitivo (inmutabilidad)
var segundoNombre = "Carlos";
var cambio = segundoNombre.toUpperCase();
console.log(segundoNombre);
console.log(cambio);
