// const character = 'Luigi';

// console.log(character);

// const inputs = document.querySelectorAll('input');

// inputs.forEach(input => {
//   console.log(input);
// });

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'Luigi';

// age = 'Peter';
age = 50;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter:number) => {
    return diameter * Math.PI;
}

console.log(circ(10));

//arrays

let names = ['Luigi', 'Mario', 'Anne'];
names.push('Yoshi');
console.log(names);

let mixed = ['Luigi', 20, 'Mario', 50, 10];
mixed.push(40, 'Anne');
mixed[2] = 90;
console.log(mixed);

//objects
let ninja = {
    name: 'Mario',
    belt: 'black',
    age: 30
}

ninja.age = 40;
ninja.skills = "fighting";
console.log(ninja);

//explicit types
let character:string;
let age:number;
let isLoggedIn: boolean;

//arrays
let ninjas: string[];
ninjas = ['Anne', 'Yoshi'];

//union types
let mixed1: (string|number|boolean)[] = [];
mixed1.push('hello');
mixed1.push(20);
mixed1.push(false);

console.log(mixed1);

//object
let ninja1:object;
ninja1 = {
    name: 'ninja1',
    age: 50
}

console.log(ninja1);

//any
let age:any = 25;
age = true;

console.log(age);

let ninja2:any[] = [];
ninja2.push(100);
ninja2.push('hello');
console.log(ninja2);

//function
let greet = () => {
    console.log('Hello World');
}

greet();

let greet1: Function;

// () => void - No argument

greet1 = () => {
    console.log('Good Morning!');
}
greet1();

const add = (a:number, b:number) => {
    console.log(a + b);
}

add(10, 5);

let greet2: (a: string, b: string) => void;
greet2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

type person1 = {name: string, age: number};

let person = {
    name: 'ABC',
    age: 40
}

console.log(person.name);