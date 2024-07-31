"use strict";
class Person {
    constructor() {
        this.name = 'Shahid';
        this.age = 35;
    }
}
const p = new Person();
console.log(`${p.name}, ${p.age}`);
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var person_names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < person_names.length; i++) {
    console.log(person_names[i]);
}
var nums = [1001, 1002, 1003, 1004];
for (let j in nums) {
    console.log(nums[j]);
}
//tuples
const myTuple = [10, "Hello"];
console.log(myTuple);
console.log(myTuple[1]);
//enum
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
})(Weekday || (Weekday = {}));
console.log(Weekday.Monday);
console.log(Weekday.Tuesday);
console.log(Weekday.Wednesday);
console.log(Weekday.Thursday);
console.log(Weekday.Friday);
let user = { id: "101", name: "Alice" };
console.log(user);
//switch
var grade = "D";
switch (grade) {
    case "A": {
        console.log("Excellent");
        break;
    }
    case "B": {
        console.log("Good");
        break;
    }
    case "C": {
        console.log("Fair");
        break;
    }
    case "D": {
        console.log("Poor");
        break;
    }
    default: {
        console.log("Invalid choice");
        break;
    }
}
//for in
var j;
var n = "abc";
for (j in n) {
    console.log(n[j]);
}
//for of
const arr = ["Tutorialspoint", "JavaScript", "TypeScript"];
for (var element of arr) {
    console.log(element);
}
//function
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//function constructor
const resFucntion = new Function("x", "y", "return x + y");
let sum = resFucntion(5, 10);
console.log(sum);
//arrow function
const addNo = (x, y) => {
    return x + y;
};
console.log(addNo(20, 30));
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: () => { return "Hi there"; }
};
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
//object
let person1 = {
    name: "Tom Hanks",
    age: 35,
};
console.log(person1.name);
