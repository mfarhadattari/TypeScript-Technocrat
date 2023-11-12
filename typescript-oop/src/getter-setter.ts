{
  // -------------->> Getter & Setter <<-------------

  class BankAccount {
    public readonly id: number;
    public name: string;
    private _business: string;
    protected _balance: number;
    constructor(id: number, name: string, business: string, balance: number) {
      this.id = id;
      this.name = name;
      this._business = business;
      this._balance = balance;
    }

    public get balance(): number {
      return this._balance;
    }

    public set deposit(amount: number) {
      this._balance += amount;
    }
  }

  const poorAccount = new BankAccount(123, "Mr Poor", "Farmer", 10000);
  console.log(poorAccount.balance);
  poorAccount.deposit = 5000;
  console.log(poorAccount.balance);
}
