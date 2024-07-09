//Bloc 1.1 Arrow Functions
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

// Bloc 1.2 Callbacks
//1

const callback = (num) => {
  console.log(`Número pasado por parámetro es el ${num}`);
};
const processar = (num, callback) => {
  callback(num);
};

processar(6, callback);

//2
const suma = (num3, num4) => {
  return num3 + num4;
};

const calculadora = (num3, num4, suma) => {
  console.log(suma(num3, num4));
};

calculadora(3, 5, suma);

//3

const saludar = (nom) => {
  console.log(`Hola ${nom}!`);
};
const esperarISaludar = (nom, saludar) => {
  return setTimeout(() => {
    saludar(nom);
  }, 2000);
};

esperarISaludar("Pepe", saludar);

//4

let countArray = [1, 2, 3, 4];

const triggerFunction = () => {
  console.log("Pim,pam,pum");
};
const processarElements = (countArray, triggerFunction) => {
  countArray.forEach((countNumber) => {
    triggerFunction(countNumber);
  });
};
processarElements(countArray, triggerFunction);

// Bloc 1.4 Rest & Spread Operators
//1
array1 = [2, 4, 6, 8];
array2 = [1, 3, 5, 7];

const array3 = [...array1, ...array2];
console.log(array3.toSorted());

//2
const sumaIlimitada = (...numerosIlimitados) => {
  let total = 0;
  for (const numeroIlimitado of numerosIlimitados) {
    total += numeroIlimitado;
  }
  return total;
};
console.log(sumaIlimitada(2, 3, 4, 6));

//3
const object1 = {
  name: "Pepe",
  email: "pepe1@gmail.com",
};
let object2 = { ...object1 };

object2.email = "object2@gmail.com";

console.log(object1, object2);

//4
const animals = ["dog", "cat", "fish", "lion"];

const [firstAnimal, secondAnimal, ...restOfAnimals] = animals;
console.log(firstAnimal);
console.log(secondAnimal);
console.log(restOfAnimals);

//5
const spreadFunction = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
const tresElements = ["Primer Elemento", "Segundo Elemento", "Tercer Elemento"];

spreadFunction(...tresElements);

//6
const object3 = {
  nombre: "Pepa",
  apellido: "Garcia",
  edad: 22,
};
const object4 = {
  pareja: true,
  colorFavorito: "Azul",
  sueldo: 1500,
};
const object5 = { ...object3, ...object4 };
console.table(object5);
