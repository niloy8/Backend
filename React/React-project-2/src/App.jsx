import './App.css'
import Conditonal from './Components/ConditionalRender/Conditonal'
import Login from './Components/ConditionalRender/Login'
import Usercard from './Components/Usercard'
import UseSt from './Components/UseStateHook/UseSt'

function App() {

  const isloggedin = false
  return (
    <>
      <div className='card-container'>
        <Usercard name="Joker"></Usercard>
        <Usercard name="Broker"></Usercard>

        <Usercard name="Sakib"></Usercard>
        <UseSt></UseSt>


      </div>
      {isloggedin ? <Conditonal></Conditonal> : <Login></Login>}
    </>
  )
}

export default App
