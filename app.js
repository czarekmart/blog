// typed array
var things = [44, 79];
// dynamic array (JavaScript)
var address = ["My Street", 88];
// tuples (array of mixed, but defined, types)
var address1 = ["Cherry Lane", 11];
// enums
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Black"] = 5] = "Black";
})(Color || (Color = {}));
;
var myCatColor = Color.Red;
alert(myCatColor);
// typed functions
// not typed (JavaScript)
function oldStuff() {
    return "anything";
}
;
// typed
function myName() {
    return "Cezar";
}
;
// void
function myAction() {
    console.log(myName());
}
;
function multiply(x, y) {
    return x * y;
}
;
// delegates
var funcDelegate;
funcDelegate = function () {
    return 99;
};
var unaryOp;
unaryOp = function (x) {
    return x + 1;
};
var myHome = {
    street: "Haubicy",
    houseNumber: 11,
    city: "Rembertow"
};
// union type
var myAge;
myAge = 55;
myAge = "58";
var mamaAge = 77;
//# sourceMappingURL=app.js.map