// import './App.css'
// import Wrapper from './components/Wrapper'
// import UserCard from './components/UserCard'
// import EventToDo from './components/EventToDo'
// import Counter from './components/Counter'
// import Score from './components/Score'
// import Search from './components/Search'
// function App() {
//   // const users = [
//   //   {
//   //     name: 'Virat Kohli',
//   //     role: 'Batsman',
//   //     country: 'India'
//   //   },
//   //   {
//   //     name: 'MS Dhoni',
//   //     role: 'WK - Batsman',
//   //     country: 'India'
//   //   }
//   // ]
//   return (
//     <>


//       {/* <h1>My To Do List</h1> */}
//       {/* <Search /> */}
//       {/* <Score /> */}
//       {/* <Counter /> */}
//       {/* <EventToDo /> */}
//       {/* <Wrapper title = "Users List">
//         {
//           users.map((use,index) => (<UserCard key = {index} user={use}/>))
//         }
//       </Wrapper> */}
//     </>
//   )
// }

// export default App



//newApp
//import './App.css'
import { useState } from 'react'
import Header from './newComponenets/Header'
import ProductCard from './newComponenets/ProductCard'
import ProductList from './newComponenets/ProductList'
import Search from './components/Search'

export default function App(){
  function removeFromCart(product){
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      setCart([
        ...cart.slice(0, index),
        ...cart.slice(index + 1)
      ]);
    }
  }
  function addToCart(product){
    setCart([...cart, product])
    setTotalAmount(totalAmount + product.price)
  }
  const [cart,setCart] = useState([])
  const [totalAmount,setTotalAmount] = useState(0)
  const products = [
    {
      id: 1,
      name: "laptop",
      price: 100000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      name: "mobile",
      price: 50000,
      image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "watch",
      price: 20000,
      image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNofGVufDB8fDB8fHww"
    }
  ]
  const pName = ["laptop","watch","mobile"]
  return(
    <div>
      <Search products = {pName}/>
      <Header cartCount={cart.length} />
      <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart}/>
    </div>
  )
}
