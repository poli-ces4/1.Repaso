import Animal from "./Animal.js";
import KEY, { message, show } from "./helper.js";

const animal = new Animal("Gato");
console.log(animal.print());

console.log(KEY);
console.log(message);
console.log(show("Real Madrid"));
/*
import KEY, * as Helper from "./helper";
console.log(Helper.message);
console.log(Helper.show("Real Madrid"));
*/
