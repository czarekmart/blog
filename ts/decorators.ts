export function main() {

    //---------------------------------------------------
    // Class decorators take one parameter: constructor
    //----------------------------------------------------

    // decorator function
    function logged(ctor: Function) {
        console.log("called ", ctor);
    }

    @logged
    class Person {

    }

    //-------------------------------------------------
    // Decorator factory:
    // function that returns decorator: can be anything
    //-------------------------------------------------
    function logging(logit:boolean) {
        return logit ? logged : null;
    }

    @logging(true)
    class LoggedPerson {

    }

    @logging(false)
    class NotLoggedPerosn {

    }

    //-------------------------------------------------
    // Example of useful decorators.
    // Here: add print methods to each class.
    //--------------------------------------------------

    function printable(ctor: Function) {
        ctor.prototype.print = function () {
            console.log(this);
        }
    }

    //-- Now any class with @printable will have a print function
    @printable
    class PrintablePerson {
        name: string;
    }

    let me = new PrintablePerson();
    me.name = "Billy";

    // We have to cast the object to any type, otherwise
    // the compiler complains about not having print.
    (<any>me).print();

}
