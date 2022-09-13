var EventEmitter = require("events");

class Account extends EventEmitter {
  constructor() {
    super();

    this.balance = 0;

    console.log("I'm creating an account with balance %d", this.balance);
  }

  deposit(amount) {
    this.balance += amount;

    this.emit("BalanceChanged");
  }

  withdraw(amount) {
    this.balance -= amount;

    this.emit("BalanceChanged");
  }
}

function displayBalance(acc) {
  console.log("Account Balance : %d", acc.balance);
}

function checkOverdraw(acc) {
  if (acc.balance < 0) {
    console.log("Account overdrawn !!");
  }
}

function checkGoal(acc, goal) {
  if (acc.balance > goal) {
    console.log("Goal Achieved !");
  }
}

var A = new Account();

A.on("BalanceChanged", () => {
  displayBalance(A);
});

A.on("BalanceChanged", () => {
  checkOverdraw(A);
});

A.on("BalanceChanged", () => {
  checkGoal(A, 1000);
});

A.deposit(220);

A.deposit(320);

A.deposit(600);

A.withdraw(1200);
