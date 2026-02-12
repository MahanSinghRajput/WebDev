export default function EventToDo(){
    //when you call this handler in an event then dont put round brackets, then only it will work when called by the event.
    function handleClick(prop){
        alert(`${prop} just pressed the button.`)
    }
    function handleDoubleClick(){
        alert(`bas kar bhai`)
    }
    return(
        <div>
            <h1>Event Heading</h1>
            <button onClick = {() => handleClick("ABC")}>Click Me</button>
            <br></br>
            <button onDoubleClick={() => handleDoubleClick()}>Change Background</button>
        </div>
    )
}