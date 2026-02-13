// export default function Counter(){
//     var count = 0;
//     function handleIncrement(){
//         count++
//         console.log(count)
//     }
//     function handleDecrement(){
//         count--
//         console.log(count)
//     }
//     return(
//         <>
//         <h1>Counter App</h1>
//         <h3>Count : {count}</h3>
//         <button onClick={handleIncrement}>+</button>
//         <button onClick={handleDecrement}>-</button>
//         </>
//     )
// }

//using states
//to use state we need to import this hook from react
import { useState } from "react"
export default function Counter(){
    const [count, setCount] = useState(0)

    function handleIncrement(){
        setCount(count => count+1)
    }
    function handleDecrement(){
        if(count > 0) setCount(count => count-1)
    }
    return(
        <>
        <h1>Counter App</h1>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </>
    )
}