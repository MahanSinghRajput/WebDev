import './Header.css'
export default function Header(props){
    return(
        <>
        
        <nav className = "navigation">
            <a href = "#">Home</a>
            <a href = "#">Contact Us</a>
        </nav>
        <h1>{props.title}</h1>
        </>
    )
}