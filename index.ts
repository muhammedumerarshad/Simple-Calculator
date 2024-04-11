import inquiror from "inquirer";

const answer = await inquiror.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operations",
    type: "list",
    name: "operators",
    choices: ["Addition", "Multiplication", "Subtraction", "Division","None"],
  },
]);

//conditionals statements
if (answer.operators === "Addition") {
  console.log( answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} 
else 
  {
    console.log('Your operation cannot be performed'); 
  }
