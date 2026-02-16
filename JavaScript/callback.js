//A function passed as an argument to another function, that is executed later usually after some task finishes
function greet(name){
    console.log(`Hello ${name}`);
}
function processUserInput(callback){
    const name = "Abc"
    callback(name)
}
processUserInput(greet)