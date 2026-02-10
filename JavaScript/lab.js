// Merging two objects using spread operator
const obj1 = {a:1,b:2,c:3}
const obj2 = {d:4,e:5,f:6}
const myObj = {...obj1,...obj2}
console.log(myObj)