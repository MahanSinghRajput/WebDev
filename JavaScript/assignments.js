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

console.log(result);