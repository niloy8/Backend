
import './App.css'
import Usercard from './Components/Usercard'
import UseSt from './Components/UseStateHook/UseSt'

function App() {


  return (
    <>
      <div className='card-container'>
        <Usercard name="Joker"></Usercard>
        <Usercard name="Broker"></Usercard>

        <Usercard name="Sakib"></Usercard>
        <UseSt></UseSt>
      </div>
    </>
  )
}

export default App
