import './Footer.css'
export default function Footer(props){
    return(
        <div className='foot'>
        <footer>
            <p>{props.year} by {props.company}</p>
        </footer>
        </div>
    )
}