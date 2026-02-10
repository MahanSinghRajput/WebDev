//Assignment 1
//Q1. Create a function using the rest operator to accept multiple numbers and return their sum.
function sum(...nums) {
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum;
}

//console.log(sum(1, 2, 3));
//console.log(sum(5, 10, 15, 20));

//Q2. Merge two arrays using the spread operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

//console.log(mergedArray);

//Q3. Copy and update an object using the spread operator.
const user = {
    name: "Aarav",
    age: 22,
    city: "Delhi"
};

const updatedUser = {
    ...user,
    age: 23,
    city: "Jaipur"
};

//console.log(updatedUser);

//Q4. Demonstrate passing array elements as function arguments using spread.
function add(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];

const result = add(...numbers);

//console.log(result);



//Assignmeant 3
//Q1. Print student(Object) details (name, roll, marks) using template literals.
// const student = {
//     name: "ABCD",
//     roll: 99,
//     marks: 100
// }
// console.log(`Name is: ${student.name}, Roll no. is ${student.roll}, Marks is ${student.marks}`)

//Q2. Write a function that accepts any number of arguments and returns their average.
function avg(a,b,...c){
    const sum = a + b + c.reduce((acc,curr) => acc+curr,0)
    const count = c.reduce((acc) => acc += 1,0)
    return sum/(count+2)
}
//console.log(avg(6,5,443,3,232))

//Q3. Use rest operator to separate one value from remaining array elements.
const arr = [1,2,3,4,5,6]
const [first, ...last] = arr
//console.log(first)

//Q4.  Demonstrate rest operator in object destructuring.
const usersDetails = {
    name: "ABCD",
    email: "example@example.com",
    number: 9010010200
};
const {name, ...details} = usersDetails
// console.log(name)
// console.log(details)

//Q5. Merge two arrays using spread operator.
const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
const arrayMerge = [...array1, ...array2]
// console.log(arrayMerge)

//Q6. Copy an object and override one property.
const userNew = {
  name: "ABCD",
  email: "example@example.com",
  number: 9010010200
}
const updatedNewUser = {
  ...userNew,         
  email: "new@mail.com"
}
// console.log(updatedNewUser);

//Q7. Add new elements to an array without modifying the original array.
const array = [1,2,3,4]
const newArray = [...array, 5,6]
// console.log(array)
// console.log(newArray)

//Q8. Create an object student with properties name and roll.
// Add a method display() using a normal function
// Print the value of this.name
// const student = {
//   name: "ABCD",
//   roll: 101,
//   display: function () {
//     console.log(this.name);
//   }
// }
// student.display();


//Modify the display() method to use an arrow function instead of a normal function.
// *Print this.name
// *Compare the output with Task 1
const student = {
  name: "ABCD",
  roll: 101,
  display: () => {
    console.log(this.name);
  }
};

student.display();
