# Access Modifiers in TypeScript OOP

In TypeScript, access modifiers are used to control how class properties and methods can be accessed. They are important concepts in Object-Oriented Programming (OOP).

## What are Access Modifiers?

TypeScript provides three main access modifiers: `public`, `private`, and `protected`. It also provides `readonly` to prevent properties from being modified after initialization.

## Why are they important?

Access modifiers help protect data, maintain security, and control how different parts of an application interact with a class. They also support encapsulation, which is one of the core principles of OOP.

## How do they work?

- **Public:** Allows properties and methods to be accessed from anywhere.
- **Private:** Allows access only within the same class.
- **Protected:** Allows access within the same class and its child classes.
- **Readonly:** Prevents a property's value from being changed after initialization.

## Practical Example

For example, in a Bank Account class, we can use `private` for the balance to prevent direct access and `public` methods to manage transactions.

```ts
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(5000);

console.log(account.getBalance()); // 5000
```

## Conclusion

Understanding access modifiers helps developers write more secure, organized, and maintainable TypeScript applications.