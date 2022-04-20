class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  saludar() {
    return `Hola ${this.name}`;
  }
}

const person = new Person("Ana", 20, "Profesor");
console.log(person.name);
console.log(person.saludar());
