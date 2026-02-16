const np = new Promise((resolve,reject) =>{
    const success = true
    if(success){
        resolve('success')
    }else{
        reject('fail')
    }
}).then((result) => {
    console.log('The result is ' + result)
}).catch((error) => {
    console.log("The eror is " + error);
})