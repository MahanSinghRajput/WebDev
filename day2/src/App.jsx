import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Table from './components/Table.jsx'
import Comp from './components/Comp.jsx'

function App() {
  //passing array as prop
  const y = ["2024", "2025", "2026"]

  //passing object as prop
  const c = {name: "ME", year: "2026",course: "WEBD"}

  return (
    <>
      <Header title = "my first app"/>
      <h1> hello</h1>
      <Table/>
      <Comp com = "avc"/>
      <Footer year = "2026" company = "ME"/>
      <Footer year = {y} company = {c}/>
    </>
  )
}

export default App
