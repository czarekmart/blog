// Contract via object
function greet(person: {name:string}) {
    return "Hello " + person.name + "!";
}

let person = {
    firstName: "Cezar",
    age: 50,
    get name() {
        return this.firstName;
    }
};

console.log(greet(person));

//-----------------------------------
// contract via interface
//-----------------------------------
interface INamedPerson {
    name: string;
    greet() : string;
}

function greet2(person: INamedPerson) {
    console.log(person.greet());
}

let person2 = {
  firstName: "Tom",
    get name() {
        return this.firstName;
    },
    greet () :string {
        return "Hello from " + this.name;
    }
};

greet2(person2); // it's good, because person implements all function from the interface

//--------------------------------------------------
// Deriving class from interface
//--------------------------------------------------
class NamedPerson implements INamedPerson {
    name: string;

    greet(): string {
        return "Class greet from " + this.name;
    }
}

let ben = new NamedPerson();
ben.name = "Ben";
greet2(ben);

//--------------------------------------------------
// Function interfaces
//--------------------------------------------------
interface IDoubleFunc {
    (num1: number, num2:number) : number;
}

let doubleFunc: IDoubleFunc = function (num1: number, num2:number) : number {
    return num1*num2 - 1;
};
console.log("doubleFunc = ", doubleFunc(4, 6));

