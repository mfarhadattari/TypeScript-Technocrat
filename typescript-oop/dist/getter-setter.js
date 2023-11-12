"use strict";
{
    // -------------->> Getter & Setter <<-------------
    class BankAccount {
        constructor(id, name, business, balance) {
            this.id = id;
            this.name = name;
            this._business = business;
            this._balance = balance;
        }
        get balance() {
            return this._balance;
        }
        set deposit(amount) {
            this._balance += amount;
        }
    }
    const poorAccount = new BankAccount(123, "Mr Poor", "Farmer", 10000);
    console.log(poorAccount.balance);
    poorAccount.deposit = 5000;
    console.log(poorAccount.balance);
}
