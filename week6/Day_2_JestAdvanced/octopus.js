class OctopusCard {
  constructor() {
    this.amount = 0;
  }

  addMoney(amount) {
    let validateAmount = this.amount + amount;
    if (this.validAmount(validateAmount)) {
      this.amount = this.amount + amount;
      console.log("Current amount: ", this.amount);
      return this.amount;
    } else {
      console.log("You cannot exceed more than 3000 on your octopus card");
      throw new TypeError(
        "You cannot exceed more than 3000 on your octopus card"
      );
    }
  }
  useMoney(amount) {
    let validateAmount = this.amount - amount;
    if (this.validAmount(validateAmount)) {
      console.log("Current amount: ", this.amount);
      this.amount = this.amount - amount;
      return this.amount;
    } else {
      console.log("You do not have enough money on your octopus card");
      return "You do not have enough money on your octopus card";
    }
  }
  validAmount(amount) {
    if (amount < 0 || amount > 3000) {
      return false;
    }
    return true;
  }
}

// let Sam = new OctopusCard()

// Sam.addMoney(400)
// console.log(Sam)
// Sam.addMoney(500)
// console.log(Sam)
// Sam.addMoney(4000)
// console.log(Sam)
// Sam.useMoney(200)
// console.log(Sam)
// Sam.useMoney(5000)
// console.log(Sam)

module.exports = {
  OctopusCard,
};
