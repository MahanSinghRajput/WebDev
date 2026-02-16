async function greet(){
    console.log("hello")
}
//greet().then(console.log)

const testAsync = async function() {
    setTimeout(()=>{
        console.log("async")
    },3000)
}
async function driver(){
    await testAsync()
    console.log("execution completed")
}
driver()

//try catch in async
async function getData(){
    try{
        const data = await fetchData()
        console.log(data)
    }catch(error){
        console.log(error);
    }
}