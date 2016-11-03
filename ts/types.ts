//---------------------------------
// Arrays
//---------------------------------
// typed array
let things: number[] = [44, 79];

// dynamic array (JavaScript)
let address = ["My Street", 88];

// tuples (array of mixed, but defined, types)
let address1: [string, number] = ["Cherry Lane", 11];

// Constants
const maxLevels = 100;  // create immutable variable


//---------------------------------
// enums
//---------------------------------
enum Color {
    White,
    Yellow,
    Green,
    Blue,
    Red,
    Black
};

enum Status {
    Off = 0,
    On = 1
};

let myCatColor: Color = Color.Red;
console.log("myCatColor = ", myCatColor);

//----------------------------------------
// Functions
//----------------------------------------

// not typed (JavaScript)
function oldStuff() {
    return "anything";
};

// typed
function myName(): string {
    return "Cezar";
};


// void
function myAction(): void {
    console.log(myName());
};

function multiply(x: number, y: number) : Number {
    return x * y;
};

//---------------------------------------
// delegates
//---------------------------------------
let funcDelegate: () => number;
funcDelegate = function () {
    return 33;
};

let unaryOp: (number) => number;
unaryOp = function (x:number) {
    return x + 1;
};

//----------------------------------------
// object (type) definitions
//----------------------------------------
type AddressType = {
    street: string,
    houseNumber: number,
    city: string
};
let myHome: AddressType = {
    street: "Strawberry",
    houseNumber: 11,
    city: "Cactusville"
};

// union type
let myAge: number | string;
myAge = 55;
myAge = "58";

type AgeType = number | string;
let mamaAge: AgeType = 77;

// delegate type
type UnaryDelegate = (number) => number;

let incrementer : UnaryDelegate = function (x: number) {
    return x+1;
};




// Example of type definition
// Define types
type BankAccount = {
    money: number,
    deposit: (number)=>void
};
type Person = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
};

// Instantiate the types
let myBankAccount: BankAccount = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value;
    }
};

let me : Person = {
    name: "Cezar",
    bankAccount: myBankAccount,
    hobbies: ["Ski", "Coding"]
};

//----------------------
// Arrow functions
//----------------------
let increaser = (n:number) => (n+1);
let comparer = (a:number, b:number) => {
    if(a==b) {
        return 0;
    }
    else if(a < b) {
        return -1;
    }
    else {
        return 1;
    }
};
console.log("increaser(5)="+increaser(5));

let greeter = (name:string) => {
    console.log("Hello " + name)
};
console.log(greeter("cezar"));

// Shorter way of arrow function
let greeter1 = name => console.log("Hello again " + name);
console.log(greeter1("Bob"));

//---------------------------
// Spread/rest operator
//---------------------------
let numbers = [1,10,99,-5];
console.log(Math.max(33, 55, 9, -4));   // should be 55
console.log(Math.max(...numbers));  // translates to apply in JS

// Similar with Rest operator
function makeArray(...args: number[]) {
    return args;
}

console.log(makeArray(4, 6, 22));   // returns [4, 6, 22]

// Destucturing arrays or types
let myHobbies = ["skis", "soccer"];
let [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

let hisData = {name:"Marcus", age:5};
let {name:hisName, age: hisAge} = hisData;
console.log(hisName, hisAge);

//------------------------------
// Template literals
//------------------------------
const userName = "Max";
let greeting = ` This is first line!
I'm ${userName},
All is fine!`;
console.log(greeting);
