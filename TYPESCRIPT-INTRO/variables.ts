// string, number, boolean, null, undefined

let myName = "";
myName = "Abdul Majid Alam";

let salary;
salary = 45000.0;

// Union Types :

let myAddress: string | number;
myAddress = 100;
myAddress = "Barwadih";

// for functions
// So here the method may return either number type or boolean typ
// there is no problem at all .
function ship(price, shipping): number | boolean {
  return false;
}

// How to annotate an Array :

let item = ["apple", "books", "cat", 100]; //  This is one way

let books: string[] | number[] = [100, 200]; //must declare [] after the data types

// Object Annotation

// const account={
//     name:'Mehmed Arsalan',
//     balance:100
// }

//You can annotate the Object like
// const account:{
//     name:string,
//     balance:number,
//     status?:'string'  // Optional paramer by using ?
//     deposite?:()=>void  // Optional Arrow function, where return type is void.
//  } = {
//     name:'Ahmad Arsalan',
//     balance:1000
//  }
// const accounts = {}[];

// Interface  : which is more convenient way for object annotation

interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposite?: () => void;
}

const account: IAccount = {
  name: "Ahmad Arsalan",
  balance: 1000,
};

let accounts: IAccount[];

class accountNumber implements IAccount {
  // name;
  // balance;

  constructor(public name, public balance) {}

  private withdraw() {}
}
