/**
 * Function Declaration
 */

const resp = calcular(500);

function calcular(valor) {
  return valor * 100;
}

console.log(resp);

/**
 * Function Expression
 */

const operacion = function (valor) {
  return valor * 100;
};

const resp2 = operacion(500);
console.log(resp2);

const jugador = {
  nombre: "Pedro",
  saludar: function (nombre = "messi") {
    return `Hola ${nombre}`;
  },
};

console.log(jugador.saludar("messi"));
