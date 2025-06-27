
import { useLoaderData } from 'react-router'
import './App.css'
import CoffeCard from './Components/CoffeCard'
import { useState } from 'react'

function App() {

  const lodedcoffies = useLoaderData()
  const [coffies, setCoffies] = useState(lodedcoffies)
  return (
    <>
      <h1 className='text-6xl text-blue-100 text-center font-serif'>yOUR Coffe {coffies.length}</h1>
      <div className='mt-8  grid  md:grid-cols-2 gap-5 p-6'>
        {
          coffies.map(coffee => <CoffeCard key={coffee._id} coffe={coffee} coffies={coffies} setCoffies={setCoffies}></CoffeCard>)
        }
      </div>
    </>
  )
}

export default App
