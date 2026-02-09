//array doesn't need to have same data type
let arr = [1, 'hello', true, null, undefined, {name: 'John'}, [1, 2, 3]];

let arr2 = [[1,2],[3,5]]
for([i,j] of arr2) console.log(i,j)