#! /usr/bin/env node
import inquirer from "inquirer";
// Initilize user balance and pincode
let my_Balance = 10000; //Dolar
let myPin = 1234;
// print welcome message:
console.log("welcome to `Tahira's` ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter yuor pin code:",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!! , Login successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option what you want to do:",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount for withdraw:",
            },
        ]);
        if (amountAns.amount >= my_Balance) {
            console.log("Insufficient Balance");
        }
        else {
            my_Balance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully`);
            console.log(`your remaining balance is: ${my_Balance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your acount balance is: ${my_Balance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let cashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "select amount for fast cash",
                type: "list",
                choices: [2000, 4000, 6000, 8000, 10000],
            },
        ]);
        operationAns.operation === cashAns.cash;
        console.log("fast cash Successfully");
        console.log(`you took ${cashAns.cash} amount from fast cash`);
    }
}
else {
    console.log("Incorrect pin number!!!");
    console.log("Try Again!!");
}
