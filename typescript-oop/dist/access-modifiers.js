"use strict";
{
    // -------------->> Access Modifier <<-------------
    /*
     * public: can accessible from anywhere and changeable
     * private : Only accessible from that class
     * protected : Only accessible from that class and child class of that object
     * readonly : Only Readable cannot changeable
     */
    class BankAccount {
        constructor(id, name, business, balance) {
            this.id = id;
            this.name = name;
            this._business = business;
            this._balance = balance;
        }
        getBusiness() {
            return this._business;
        }
        depositMoney(amount) {
            this._balance += amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    const poorAccount = new BankAccount(123, "Mr Poor", "Farmer", 10000);
    console.log(poorAccount.getBusiness());
    poorAccount.depositMoney(5000);
    console.log(poorAccount.getBalance());
    class StudentAccount extends BankAccount {
        constructor(id, name, business, balance) {
            super(id, name, business, balance);
        }
        addStipend(amount) {
            this._balance += amount;
        }
    }
    const studentAccount = new StudentAccount(324, "Mr Student", "Student", 5000);
    studentAccount.addStipend(2000);
    console.log(studentAccount.getBalance());
}
