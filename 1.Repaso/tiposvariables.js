/**
 * Explicar Var
 */
(function explicarVar() {
  var edad = 10;
  edad = 20;
  var edad = 40;
  if (true) {
    var edad = 20;
    console.log(edad);
  }
  console.log(edad);
})();

/**
 * Explicar Let
 */
(function explicarLet() {
  let cantidad = 10;
  cantidad = 50;
  if (true) {
    let cantidad = 20;
    console.log(cantidad);
  }
  console.log(cantidad);
})();

/**
 * Explicar Const
 */
(function explicarConst() {
  const IVA = 19;
  const equipos = ["Liverpool", "Barcelona"];
  if (true) {
    const IVA = 20;
    console.log(IVA);
  }
  console.log(IVA);
  console.log(equipos);
  equipos.push("Real Madrid");
  console.log(equipos);
})();
