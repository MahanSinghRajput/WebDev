var person = {
    name: "Nahi Bataunga",
    age: 21,
    roll: 30,
    displayInfo: function displayInfo() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Roll: " + this.roll);
    }
}
console.log(person.name);  // Accessing property
console.log(person["name"]);  // Accessing property using bracket notation
person.displayInfo();

// Using Constructor Function
function Person(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.displayInfo = function() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Roll: " + this.roll);
    }
}  
var person1 = new Person("Nahi Bataunga", 21, 30);
person1.displayInfo();

// Using ES6 Class
class PersonClass {
    constructor(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    displayInfo() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Roll: " + this.roll);
    }
}
var person2 = new PersonClass("Nahi Bataunga", 21, 30);
person2.displayInfo();


//for objects
//here reassiging object properties and accessing them is possible
const person22 = {
    name: "Nahi Bataunga",
    age: 21,
    roll: 30,
    displayInfo: function displayInfo() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Roll: " + this.roll);
    }
}
person22.name = "Changed Name"; // Modifying property
console.log(person22.name);  // Accessing property
console.log(person22["name"]);  // Accessing property using bracket notation
person22.displayInfo();