/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer
You are building a bank statement summary.
Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 },
];
//filter()
let credit_transactions = transactions.filter(
  (obj) => obj.type.toLowerCase() === "credit",
);
console.log("Credit card transactions:");
console.log(credit_transactions);
//map()
let transaction_amounts = transactions.map((obj) => obj.amount);
console.log("Transaction amounts are:");
console.log(transaction_amounts);
//reduce()
let account_balance = transactions.reduce((accu, obj) => {
  if (obj.type.toLowerCase() === "credit") {
    return accu + obj.amount;
  } else {
    return accu - obj.amount;
  }
}, 0);
console.log("final amount balance:");
console.log(account_balance);
//find()
let debit_transaction = transactions.find(
  (obj) => obj.type.toLowerCase() === "debit",
);
console.log("First debit card transaction:");
console.log(debit_transaction);
//findIndex() of transaction with amount 10000
let index = transactions.findIndex((obj) => obj.amount === 10000);
console.log("index of transaction with amount 10000");
console.log(index);
