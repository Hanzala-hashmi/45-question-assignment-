var Account = /** @class */ (function () {
    function Account(initialBalance, initialMoney) {
        this.balance = initialBalance;
        this.Account = initialMoney;
    }
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.getMoney = function () {
        return this.money;
    };
    Account.prototype.withdraw = function (amount) {
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
        console.log("Withdrawal of ".concat(amount, " successful. New balance: ").concat(this.balance));
        return true;
    };
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
        this.money += amount;
        console.log("Deposit of ".concat(amount, " successful. New balance: ").concat(this.balance));
    };
    return Account;
}());
var ATM = /** @class */ (function () {
    function ATM(account) {
        this.account = account;
    }
    ATM.prototype.displayBalance = function () {
        console.log("Your current balance is: ".concat(this.account.getBalance()));
    };
    ATM.prototype.displayMoney = function () {
        console.log("Your current money is: ".concat(this.account.getMoney()));
    };
    ATM.prototype.withdraw = function () {
        console.log("Enter withdrawal amount:");
        var amount = parseInt(prompt(""));
        if (isNaN(amount)) {
            console.log("Invalid input. Please enter a valid amount.");
            return;
        }
        this.account.withdraw(amount);
    };
    ATM.prototype.deposit = function () {
        console.log("Enter deposit amount:");
        var amount = parseInt(prompt(""));
        if (isNaN(amount)) {
            console.log("Invalid input. Please enter a valid amount.");
            return;
        }
        this.account.deposit(amount);
    };
    ATM.prototype.run = function () {
        while (true) {
            console.log("ATM Menu:");
            console.log("1. Check Balance");
            console.log("2. Check Money");
            console.log("3. Withdraw");
            console.log("4. Deposit");
            console.log("5. Exit");
            var choice = parseInt(prompt(""));
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
    };
    return ATM;
}());
var account = new Account(20000, 15000); // initial balance of 20000 and money of 15000
var atm = new ATM(account);
atm.run();
