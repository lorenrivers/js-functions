function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}

sayHelloTo("Loren");
sayHelloTo("Tim");

function add(a, b) {
  return a + b;
}

const result = add(10, 7);
console.log(result);
const anotherResult = add(8, 29);
console.log(anotherResult);

function multiply(a, b) {
  return a * b;
}

const multiplyResult = multiply(4, 5);
console.log(multiplyResult);

function subtract(a, b) {
  return a - b;
}

const subtractResult = subtract(10, 7);
console.log(subtractResult);

function divide(a, b) {
  return a / b;
}

const divideResult = divide(24, 8);
console.log(divideResult);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

const calculation = calculate(100, 50, "/");
console.log("The result is " + calculation);
const anotherCalculation = calculate(8, 7, "+");
console.log("The result is " + anotherCalculation);
