const obj = {name:"Dennis"}
console.log(obj.name);
obj.name = "Dennis Ritchie"
console.log(obj.name);

//The code above demonstrates that even though the object `obj` is declared with `const`, its properties can still be modified. The `name` property is initially set to "Dennis" and then changed to "Dennis Ritchie". The console logs show the value of the `name` property before and after the modification.

function greet(name){
    console.log("Hello, " + name);
    console.log(`Hello, ${name}, how are you?`); //use this syntax
}
greet("Dennis");

//More about functions
function square(x) {
    return x * x;
}
console.log(square(4));

const factorial  = function(n){ //anonymous function
    if(n==0 || n==1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));

const arrowFunc = (x) => x + 10;
console.log(arrowFunc(5));

//IIFE - Immediately Invoked Function Expression
//IIFE means a function that runs as soon as it is defined
(function() {
    console.log("This function runs immediately upon definition!");
})();
//The code above demonstrates various aspects of functions in JavaScript. It includes a standard function declaration (`greet`), a function expression assigned to a constant (`factorial`), an arrow function (`arrowFunc`), and an Immediately Invoked Function Expression (IIFE). Each function showcases different ways to define and use functions in JavaScript.

//examples
const sum = (a, b) => a + b;
console.log(sum(3, 7));

const difference = function(a,b){
    return a-b;
}
console.log(difference(10,4));

const sales = "Toyota";
function Types(name){
    return name === "Honda" ? true : false;
}
const car = {myCar:"saturn",getCar:Types("Honda"),special:sales};
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);