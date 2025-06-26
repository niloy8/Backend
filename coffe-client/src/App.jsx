
import { useLoaderData } from 'react-router'
import './App.css'
import CoffeCard from './Components/CoffeCard'

function App() {

  const coffies = useLoaderData()

  return (
    <>
      <h1 className='text-6xl text-blue-100 text-center font-serif'>yOUR Coffe {coffies.length}</h1>
      <div className='mt-8  grid  md:grid-cols-2 gap-5 p-6'>
        {
          coffies.map(coffee => <CoffeCard key={coffee._id} coffe={coffee}></CoffeCard>)
        }
      </div>
    </>
  )
}

export default App
