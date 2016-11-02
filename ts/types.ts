// typed array
let things: number[] = [44, 79];

// dynamic array (JavaScript)
let address = ["My Street", 88];

// tuples (array of mixed, but defined, types)
let address1: [string, number] = ["Cherry Lane", 11];

// enums
enum Color {
    White,
    Yellow,
    Green,
    Blue,
    Red,
    Black
};

let myCatColor: Color = Color.Red;
alert(myCatColor);

// typed functions
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

// delegates
let funcDelegate: () => number;
funcDelegate = function () {
    return 99;
};

let unaryOp: (number) => number;
unaryOp = function (x:number) {
    return x + 1;
};

// object (type) definitions
type AddressType = {
    street: string,
    houseNumber: number,
    city: string
};
let myHome: AddressType = {
    street: "Haubicy",
    houseNumber: 11,
    city: "Rembertow"
};

// union type
let myAge: number | string;
myAge = 55;
myAge = "58";

type AgeType = number | string;
let mamaAge: AgeType = 77;


