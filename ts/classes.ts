//---------------------------------
// Base class
//---------------------------------
enum Gender {
    Female,
    Male
};
class Person {

    // Properties
    public name:string;
    private _dob:string;
    protected _gender: Gender = Gender.Female;

    constructor(name: string, gender: Gender) {
        this.name = name;
        this._dob = "";
        this._gender = gender;
    }
    //--------------------------------
    // Alternate way is to remove name property,
    // but add it in the constructor:
    //constructor(public name: string) {}
    //-------------------------------------

    // Methods
    private setGender(gender:Gender) {
        this._gender = gender;
    }
    private getGender() {
        return this._gender;
    }

    // Getters and setters
    set gender(value:Gender) {
        if(value != this._gender) {
            console.log("Gender change!");
            this._gender = value;
        }
    }
    get gender() {
        return this._gender;
    }
};

let jenner = new Person("Bruce", Gender.Male);
jenner.gender = Gender.Female;
console.log(jenner);

//--------------------------------------
// Derived class
//--------------------------------------
class Athlete extends Person {

    private medals: number = 0;

    constructor(name:string, gender: Gender, public sport:string) {

        // call base constructor
        super(name, gender);
    }

    public winsMedal() : void {
        this.medals++;
    }
}

let ronaldo = new Athlete("Ronaldo", Gender.Male, "football");
ronaldo.winsMedal();
console.log(ronaldo);

//-------------------------------------------
// Static properties and methods
//-------------------------------------------
class Olympics {
    static President: Person = new Person("Thomas Bach", Gender.Male);
    static nominatePresident(name:string) {
        this.President = new Person(name, Gender.Male);
    }
};
console.log(Olympics.President);
Olympics.nominatePresident("Justin Bieber");
console.log(Olympics.President);

//------------------------------------------
// Abstract classes
//------------------------------------------
abstract class Project {
    cost: number;
    charge: number;

    constructor(public name: string, charge: number) {
        this.charge = charge;
    }

    abstract calculateProfit() : number;
};

class OlympicArena extends Project {
    constructor(charge: number, cost: number) {
        super("Arena", charge);
        this.cost = cost;
    }

    calculateProfit() {
        return this.charge - this.cost;
    }
};

let newArena = new OlympicArena(4000000, 3000000);
console.log(newArena.calculateProfit());

//----------------------------------------------
// Namespaces
//----------------------------------------------
namespace HighMath {
    const PI = 3.14;

    // Use export so that the function is seen outside of the namespace
    export function calcCircumference(diameter: number) {
        return diameter*PI;
    }
};

console.log("Circumference = ", HighMath.calcCircumference(10));
