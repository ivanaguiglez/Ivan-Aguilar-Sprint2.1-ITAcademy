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

// Bloc 1.2 Operador Ternari
//1
const potConduir = (age) => {
  age >= 18 ? console.log("Pot conduir") : console.log("No pot conduir");
};
potConduir(19);
potConduir(16);

//2
let num1 = 3;
let num2 = 1;
num1 >= num2
  ? console.log("num1 és més gran")
  : console.log("num2 és més gran");

//3

const trobarMaxim = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

console.log(trobarMaxim(5, 2, 3));

//4

const arrayNumeros = [3, 4, 5, 8];
const numerosPares = [];
const numerosImpares = [];

const parOImpar = (arrayNumeros) => {
  for (let i = 0; i < arrayNumeros.length; i++) {
    let result = arrayNumeros[i] % 2 === 0 ? "Par" : "Impar";
    console.table(result);
  }
};
parOImpar(arrayNumeros);
for (numero of arrayNumeros) {
  numero % 2 === 0 ? numerosPares.push(numero) : numerosImpares.push(numero);
}
console.log("Números pares", numerosPares);
console.log("Números impares", numerosImpares);
