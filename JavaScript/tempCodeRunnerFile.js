const userNew = {
  name: "ABCD",
  email: "example@example.com",
  number: 9010010200
}
const updatedNewUser = {
  ...user,         
  email: "new@mail.com"
}
console.log(updatedNewUser);