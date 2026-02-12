import './App.css'
import Wrapper from './components/Wrapper'
import UserCard from './components/UserCard'
import EventToDo from './components/EventToDo'

function App() {
  const users = [
    {
      name: 'Virat Kohli',
      role: 'Batsman',
      country: 'India'
    },
    {
      name: 'MS Dhoni',
      role: 'WK - Batsman',
      country: 'India'
    }
  ]
  return (
    <>
      <h1>Users Dashboard</h1>
      <EventToDo />
      <Wrapper title = "Users List">
        {
          users.map((use,index) => (<UserCard key = {index} user={use}/>))
        }
      </Wrapper>
    </>
  )
}

export default App
