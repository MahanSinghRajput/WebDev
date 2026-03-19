pro = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

pro.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})



//consuming promise
import axios from 'axios'
axios.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(error => console.log(error))