import { useState } from "react"

export default function Score(){
    const [count, setCount] = useState(0)
    const [flag50, setFlag50] = useState(false)
    const [flag100, setFlag100] = useState(false)

    function addRuns(runs){
        setCount(prev => {
            const newScore = prev + runs

            if(!flag50 && newScore >= 50 && newScore < 100){
                setFlag50(true)
                alert("50!!!!")
            }

            if(!flag100 && newScore >= 100){
                setFlag100(true)
                alert("100!!!!")
            }

            return newScore
        })
    }

    return(
        <>
            <h2>Batsman Score</h2>
            <h3>Score : {count}</h3>
            <button onClick={() => addRuns(1)}>1</button>
            <button onClick={() => addRuns(2)}>2</button>
            <button onClick={() => addRuns(3)}>3</button>
            <button onClick={() => addRuns(4)}>4</button>
            <button onClick={() => addRuns(6)}>6</button>
        </>
    )
}
