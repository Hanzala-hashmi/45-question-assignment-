class Account {
    private balance: number;
    Account: number;
    money: number;
  
    constructor(initialBalance: number, initialMoney: number) {
      this.balance = initialBalance;
      this.Account = initialMoney;
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    getMoney(): number {
      return this.money;
    }
  
    withdraw(amount: number): boolean {
      if (amount > this.balance) {
        console.log("Insufficient balance!");
        return false;
      }
      if (amount > this.money) {
        console.log("Insufficient money!");
        return false;
      }
      this.balance -= amount;
      this.money -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      return true;
    }
  
    deposit(amount: number) {
      this.balance += amount;
      this.money += amount;
      console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
    }
  }
  
  class ATMXT {
    private account: Account;
  
    constructor(account: Account) {
      this.account = account;
    }
  
    displayBalance() {
      console.log(`Your current balance is: ${this.account.getBalance()}`);
    }
  
    displayMoney() {
      console.log(`Your current money is: ${this.account.getMoney()}`);
    }
  
    withdraw() {
      console.log("Enter withdrawal amount:");
      const amount = parseInt(prompt("") as string);
      if (isNaN(amount)) {
        console.log("Invalid input. Please enter a valid amount.");
        return;
      }
      this.account.withdraw(amount);
    }
  
    deposit() {
      console.log("Enter deposit amount:");
      const amount = parseInt(prompt("") as string);
      if (isNaN(amount)) {
        console.log("Invalid input. Please enter a valid amount.");
        return;
      }
      this.account.deposit(amount);
    }
  
    run() {
      while (true) {
        console.log("ATM Menu:");
        console.log("1. Check Balance");
        console.log("2. Check Money");
        console.log("3. Withdraw");
        console.log("4. Deposit");
        console.log("5. Exit");
        const choice = parseInt(prompt("") as string);
        switch (choice) {
          case 1:
            this.displayBalance();
            break;
          case 2:
            this.displayMoney();
            break;
          case 3:
            this.withdraw();
            break;
          case 4:
            this.deposit();
            break;
          case 5:
            console.log("Goodbye!");
            return;
          default:
            console.log("Invalid choice. Please try again.");
        }
      }
    }
  }
  
  const account: Account = new Account(20000, 15000); 
  // initial balance of 20000 and money of 15000
  var atm = new ATM(account);
  atm.run();
  {console.log   ${`azfar`}   }