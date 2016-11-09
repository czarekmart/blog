export function main() {

    // No generic
    function badEcho(data:any) {
        return data;
    }

    console.log(badEcho("Cezar"));
    console.log(badEcho(44));
    console.log(badEcho({name: "Cezar"}));

    //------------------------------------------
    // Generic syntax
    //------------------------------------------
    function betterEcho<T>(data: T) {
        return data;
    }

    console.log(betterEcho("Max").length);
    console.log(betterEcho(44) );
    console.log(betterEcho({name:"Bill"}).name);

    //------------------------------------------
    // Constrained generics
    //------------------------------------------
    interface IAgedPerson {
        name: string;
        age: number;
    }

    function tellAge<T extends IAgedPerson>(person: T) {
        return person.name + " is " + person.age + " years old.";
    }

    console.log(tellAge({name: "Tom", age: 50}));

    //------------------------------------------
    // Built-in generics
    //------------------------------------------
    var testResults: Array<number> = [4.6, 0.5];

    // Arrays
    function printAll<T>(args: T[]) {
        args.forEach((element)=>console.log(element));
    }

    //------------------------------------------
    // Generic types
    //------------------------------------------
    type EchoType = <T>(data:T)=>T;
    const echo3:EchoType = betterEcho;
    console.log("echo3", echo3({color: "white"}));

    //------------------------------------------
    // Generic classes
    //------------------------------------------
    class AgedProfessional<T extends IAgedPerson> {
        name: string;
        age: number;
        title: string;
        tellAge() {
            return this.title + " " + this.name + " is " + this.age + " years old.";
        }
        constructor(title: string, name:string, age:number) {
            this.title = title;
            this.name = name;
            this.age = age;
        }
    };
    var einstein = new AgedProfessional("prof", "Einstein", 60);
    console.log(einstein.tellAge());

}
