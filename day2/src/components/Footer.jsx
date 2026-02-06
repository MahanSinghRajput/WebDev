import './Footer.css'
export default function Footer(props){
    return(
        <div className='foot'>
        <footer>
            <p>{props.year[2]} by {props.company.course}</p>
        </footer>
        </div>
    )
}