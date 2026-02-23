import './App.css'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  const products = ["a","b","c","aa"]
  return (
    <>
      <Header products = {products}/>
      {/* <Search products = {products}/> */}
    </>
  )
}

export default App
