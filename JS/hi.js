var oldVar = "I am var";
let modernLet = 25;
const constantValue = 3.14;

console.log("Variables:");
console.log(oldVar, modernLet, constantValue);

let str = "Hello";
let num = 100;
let bool = true;
let undef;
let nul = null;
let big = 12345678901234567890n;
let sym = Symbol("id");

console.log("\nData Types:");
console.log(`${str} ${typeof str}`);
console.log(`${num} ${typeof num}`);
console.log(`${bool} ${typeof bool}`);
console.log(`${undef} ${typeof undef}`);
console.log(`${nul} ${typeof nul}`);
console.log(`${big} ${typeof big}`);
console.log(typeof sym);

let a = 10;
let b = 5;

console.log("\nArithmetic:");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log("\nComparison:");
console.log(a > b);
console.log(a == "10");
console.log(a === "10");

console.log("\nLogical:");
console.log(a > 5 && b < 10);
console.log(a < 5 || b < 10);
console.log(!true);

console.log("\nAssignment:");
let x = 5;
x += 3;
console.log(x);

function greet(name) {
  return "Hello " + name;
}

const multiply = function(x, y) {
  return x * y;
};

const add = (x, y) => x + y;

function power(base, exp = 2) {
  return base ** exp;
}

function calculator(x, y, operation) {
  return operation(x, y);
}

(function() {
  console.log("\nexecuted");
})();

console.log("\nFunctions:");
console.log(greet("Afthab"));
console.log(multiply(4, 5));
console.log(add(3, 7));
console.log(power(3));
console.log(power(4,4));
console.log(calculator(10, 5, add));

let person = {
  name: "Afthab",
  age: 22,
  isStudent: true,
  greet: function() {
    return "Hi, I am " + this.name;
  }
};

console.log("\nObject:");
console.log(person.name);
console.log(person["age"]);
console.log(person.greet());

person.city = "Bangalore";
delete person.isStudent;
console.log(person);

let arr = [1, 2, 3, 4, 5];

console.log("\nArray:");
arr.push(6);
arr.pop();
console.log(arr);
let doubled = arr.map(num => num * 2);
console.log("doubled array:", doubled);
