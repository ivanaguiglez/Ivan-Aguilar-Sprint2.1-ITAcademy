//Bloc 1.1
//1
function add(a, b) {
  return a + b;
}
add = (a, b) => {
  return a + b;
};
console.log(add(2, 4));

//2
randomNumber = () => {
  return Math.random() * 100;
};
console.log("random", randomNumber());

//3
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  greet = () => {
    console.log(`Hola, soy ${this.name}, encantado!`);
  };
}
const person = new Person("Paco", 23);
person.greet();

//4
const printNumber = (numbersArray) => {
  for (let index = 0; index < numbersArray.length; index++) {
    console.log(numbersArray[index]);
  }
};
const numbersArray = ["1", "2", "3"];
printNumber(numbersArray);
//5
setTimeout(() => {
  console.log("Mensaje tras 3 segundos!");
}, "3000");
