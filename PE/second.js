const obj = {name:"Dennis"}
console.log(obj.name);
obj.name = "Dennis Ritchie"
console.log(obj.name);

//The code above demonstrates that even though the object `obj` is declared with `const`, its properties can still be modified. The `name` property is initially set to "Dennis" and then changed to "Dennis Ritchie". The console logs show the value of the `name` property before and after the modification.

function greet(name){
    console.log("Hello, " + name);
    console.log(`Hello, ${name}!`); //use this syntax
}