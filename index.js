const readline = require("readline-sync");

function calculator() {
  const operation = readline.question(
    "What operation would you like to perform? (+, -, *, /): "
  );

  if (!["+", "-", "*", "/"].includes(operation)) {
    console.log("That is not a valid operation.");
    calculator();
    return;
  }

  let firstNumber;
  while (isNaN(firstNumber)) {
    firstNumber = parseFloat(
      readline.question("Please enter the first number: ")
    );
    if (isNaN(firstNumber)) {
      console.log("This is not a number.");
    }
  }

  let secondNumber;
  while (isNaN(secondNumber)) {
    secondNumber = parseFloat(
      readline.question("Please enter the second number: ")
    );
    if (isNaN(secondNumber)) {
      console.log("This is not a number.");
    }
  }

  let result;
  switch (operation) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }

  console.log("The result is:", result);
}

calculator();
