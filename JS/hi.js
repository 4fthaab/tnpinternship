console.log("Hi welcome Home");
let a=10+120+"100";

console.log(a)

const name = "Rahul";
let age = 25;

let score = 10;
score += 5;
const isSenior = age > 18 && score >= 10;
const status = isSenior ? "Pro" : "Novice";

function greet(name) {
    return `Hi ${name}`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

console.log(greet(name));
console.log(add(5, 10));
console.log(multiply(5, 10));