{var a = "10"
var b = 5;
var c = a + b;}
console.log(c);
//c gives output as 105 because a is string and b is number so when we add them it concatenates them.
//if we declare them as var the output will be 105 because var does not have block scope.
//but if we declare them as let or const the output will be error because they have block scope.

console.log(x);
var x = 10;
//In this case, the output will be undefined because of hoisting.

console.log(y);
let y = 20;
//In this case, the output will be ReferenceError because let and const do not allow hoisting.

console.log(5 == '5'); // true
console.log(5 === '5'); // false
//The first comparison uses loose equality (==) which performs type coercion, so the string '5' is converted to the number 5 before comparison.
//The second comparison uses strict equality (===) which does not perform type coercion, so the types must be the same for the comparison to be true.

console.log(null == undefined); // true
console.log(null === undefined); // false
//The first comparison uses loose equality (==) which considers null and undefined to be equal.
//The second comparison uses strict equality (===) which requires both value and type to be the same, so they are not equal.

console.log(NaN === NaN); // false
//In JavaScript, NaN is not equal to anything, including itself. Therefore, the comparison returns false.

console.log(typeof NaN); // "number"
//In JavaScript, NaN is considered a special numeric value that represents "Not-a-Number". Therefore, the typeof operator returns "number" for NaN.

//Loops
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // Skip the rest of the loop when i is 3
    }
    console.log(i);
}
//This loop will print numbers from 0 to 4, except for 3, because of the continue statement which skips the current iteration when i is 3.

let j = 0;
while (j < 5) {
    if (j === 2) {
        break; // Exit the loop when j is 2
    }
    console.log(j);
    j++;
}
//This loop will print numbers 0 and 1, and then exit the loop when j is 2 because of the break statement.

do {
    console.log(j);
    j++;
} while (j < 5);
//This loop will print numbers from the current value of j (which is 2 after the previous while loop) to 4.

let arr = [1, 2, 3, 4, 5];
arr.forEach(num => console.log(num));
//This will print each number in the array arr using the forEach method.

for (let num of arr) {
    console.log(num);
}
//This will also print each number in the array arr using the for...of loop.

for (let index in arr) {
    console.log(index);
}
//This will print the indices of the array arr using the for...in loop.
