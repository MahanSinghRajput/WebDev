// export default function EventToDo(){
//     //when you call this handler in an event then dont put round brackets, then only it will work when called by the event.
//     function handleClick(prop){
//         alert(`${prop} just pressed the button.`)
//     }
//     function handleDoubleClick(){
//         alert(`bas kar bhai`)
//     }
//     return(
//         <div>
//             <h1>Event Heading</h1>
//             <button onClick = {() => handleClick("ABC")}>Click Me</button>
//             <br></br>
//             <button onDoubleClick={() => handleDoubleClick()}>Change Background</button>
//         </div>
//     )
// }

export default function EventToDo(){
    function handleSubmit(e){
        e.preventDefault() //to prevent reload on occouring of an event
        const input = e.target.task.value
        const taskValue = input.trim()
        if(taskValue === "") {
            alert("Empty task cannot be added")
            return
        }
        const li = document.createElement('li')
        li.innerHTML = `<span>${taskValue}</span>
                        <button class = "deleteButton">Delete</button>`
        
        document.getElementById("list").appendChild(li)
    }
    function handleListClick(e){
        if(e.target.className === "deleteButton"){
            e.target.parentElement.remove()
        }

    }
    return(
        <>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
            <input type = "text" name = "task" placeholder="Enter Task" />
            <button type = "submit">Add Task</button>
        </form>
        <ul id = "list" onClick={handleListClick}>
            
        </ul>
        </>
    )
}