import Search from './Search'
export default function Header({products}){
    return(
        <div class = "navbar" style = {{display: "flex", textAlign: "center",verticalAlign: "center"}}>
            <h1>(Sab Milega)</h1>
            <h2><Search products = {products}/></h2>
        </div>
    )
}