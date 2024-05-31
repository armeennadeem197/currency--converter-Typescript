import inquirer from "inquirer"

const currency : any ={
    USD :1,
    EUR: 0.921,
    GBR : 0.76,
    INR :74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt(
    [
        {
            name : "from",
            type : "list",
            message : "Enter from Currency",
            choices: ["USD","EUR","GBR","INR","PKR" ]
        },
        {
            name : "to",
            type : "list",
            message : "Enter to Currency",
            choices :["USD","EUR","GBR","INR","PKR"]
        },
         {
            name : "amount",
            type : "number",
           message : "Enter your Amount",
        },
    ]
);

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount *toAmount
console.log(Math.round(convertedAmount));
