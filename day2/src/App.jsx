import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title = "my first app"/>
      <h1> hello</h1>
      <Footer year = "2026" company = "ME"/>
    </>
  )
}

export default App
