{var a = "10"
var b = 5;
var c = a + b;}
console.log(c);
//c gives output as 105 because a is string and b is number so when we add them it concatenates them.
//if we declare them as var the output will be 105 because var does not have block scope.
//but if we declare them as let or const the output will be error because they have block scope.