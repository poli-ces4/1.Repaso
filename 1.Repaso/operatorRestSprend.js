/**
 * Operator Rest (Recibir)
 */

function calcularDeuda(nombre, ...deudas) {
  let total = 0;
  deudas.forEach((valor) => (total += valor));
  return `La persona ${nombre} debe ${total}`;
}
console.log(calcularDeuda("Ana", 10, 20, 30, 40, 50, 60, 70, 80));

/**
 * Operator Spread (Enviar)
 */

const deudaInicial = 100;
const deudas = [10, 20, 30, 40, 50, 60, 70, 80];
const deudaTotal = [deudaInicial, ...deudas];
console.log(deudaTotal);
console.log(calcularDeuda("Ana", ...deudaTotal));
