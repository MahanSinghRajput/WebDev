import { useState } from "react"
export default function Search({products}){
    const [find,setFind] = useState("")
    const student = products.filter((names) => names.toLowerCase().includes(find.toLowerCase()))
    return(
        <div>
            <input type = "text"
            placeholder="Enter key to Search"
            value={find}
            onChange={(e) => setFind(e.target.value)}
            />
                {find && (
                    <ul>
                        {student.map((item,index)=>(<li key = {index}>{item}</li>))}
                    </ul>
                )}
        </div>
    )
}