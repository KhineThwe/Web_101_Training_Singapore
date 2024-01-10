// program for a simple calculator
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result;

// take the operator input
r1.question("Enter operator ( either +, -, * or / ): "),
  (operator) => {
    r1.question("Enter first number", (num1) => {
      const number1 = parseInt(num1);

      r1.question("Enter second number : ", (num2) => {
        const number2 = parseInt(num2);
        switch (operator) {
          case "+":
            result = number1 + number2;
            console.log(`${number1} + ${number2} = ${result}`);
            break;
          case "-":
            result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break;
          case "*":
            result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;
          case "/":
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
            break;

          default:
            console.log("Invalid operator");
            break;
        }
        r1.close();
      });
    });
  };
