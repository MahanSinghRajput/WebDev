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
export default function App(){
  function addToCart(){
    setCart([...cart,product])
  }
  const [cart,setCart] = useState([])
  const products = [
    {
      id: 1,
      name: "laptop",
      price: 100000,
      image: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.amazon.in%2FMicrosoft-New-Surface-Laptop-7th%2Fdp%2FB0D926BQL8&ved=0CBYQjRxqFwoTCOiI2sCr5ZIDFQAAAAAdAAAAABAI&opi=89978449"
    },
    {
      id: 2,
      name: "mobile",
      price: 50000,
      image: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fdarlingretail.com%2Fcollections%2Fmobiles%3Fsrsltid%3DAfmBOoqlz93w3zeHxa8cXM8oVYzbKu5UFeorcKVI3jCmarujIMsbpHay&ved=0CBYQjRxqFwoTCPi-7ear5ZIDFQAAAAAdAAAAABAI&opi=89978449"
    },
    {
      id: 3,
      name: "watch",
      price: 20000,
      image: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.titan.co.in%2Fproduct%2Ftitan-black-dial-analog-with-date-watch-for-men-1805qm04.html%3Fsrsltid%3DAfmBOoop3At05jxp4AuiAo6ZZGt8bth9jpWxCfRm5MVI8yh_l_dmMRLm&ved=0CBYQjRxqFwoTCMCyuYSs5ZIDFQAAAAAdAAAAABAI&opi=89978449"
    }
  ]

  return(
    <div>
      <Header cartCount={cart.length}/>
      <ProductList products={products} addToCart={addToCart}/>
    </div>
  )
}
