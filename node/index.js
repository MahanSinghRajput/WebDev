function show(a,...b){ //rest operator
    console.log(a)
    console.log(b)
}
show(10,20,30,40,50)

const arr = [1,2,3,4,5]
const arr2 = [6,7,8,9]
const newArr = [...arr, ...arr2] //spread operator
console.log(newArr)

const [a,b,c,d,e] = arr //de-structuring of array
console.log(a+b+c+d+e)
console.log(e)

const [x,...y] = arr2 //de-structuring with the help of rest operator
console.log(x)
console.log(y)

const mtObj = {
    name: "abc",
    age: 20,
    key: "a"
}
const dup = {...mtObj} // if you do this then the changes made in dup doesnt show in mtObj. //this makes a copy for the duplicate
console.log(dup)
dup.name = "bcd"
console.log(mtObj.name)
console.log(dup.name)

function fun(name,age,key){
    mtObj.name = name
    mtObj.age = age
    mtObj.key = key
}
fun("fgh",34,"c")
console.log(mtObj)