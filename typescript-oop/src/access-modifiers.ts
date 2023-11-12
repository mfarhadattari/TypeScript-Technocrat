{
  // -------------->> Access Modifier <<-------------
  /*
   * public: can accessible from anywhere and changeable
   * private : Only accessible from that class
   * protected : Only accessible from that class and child class of that object
   * readonly : Only Readable cannot changeable
   */

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
    public getBusiness(): string {
      return this._business;
    }
    public depositMoney(amount: number): void {
      this._balance += amount;
    }
    public getBalance(): number {
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(123, "Mr Poor", "Farmer", 10000);
  console.log(poorAccount.getBusiness());
  poorAccount.depositMoney(5000);
  console.log(poorAccount.getBalance());

  class StudentAccount extends BankAccount {
    constructor(id: number, name: string, business: string, balance: number) {
      super(id, name, business, balance);
    }

    public addStipend(amount: number): void {
      this._balance += amount;
    }
  }

  const studentAccount = new StudentAccount(324, "Mr Student", "Student", 5000);
  studentAccount.addStipend(2000);
  console.log(studentAccount.getBalance());
}
