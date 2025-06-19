import { createContext, useState } from 'react';
import './App.css';
import Conditonal from './Components/ConditionalRender/Conditonal';
import Login from './Components/ConditionalRender/Login';
import ContextA from './Components/UseContex/contextA';
import UseEffects from './Components/UseEffect/UseEffects';
import Usercard from './Components/Usercard';
import UseSt from './Components/UseStateHook/UseSt';

// Create context outside the component
const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState('light')
  const user = { name: "Samir", age: 21, theme, setTheme }; // example data

  return (
    <>
      <div className='card-container'>
        <Usercard name="Joker" />
        <Usercard name="Broker" />
        <Usercard name="Sakib" />
        <UseSt />
      </div>

      {/*
      {isloggedin ? <Conditonal /> : <Login />}
      <UseEffects />
      */}

      {/*Provide value to the context */}
      <div id='theme-container' style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
        <UserContext.Provider value={user}>
          <ContextA />
        </UserContext.Provider>
      </div>
    </>
  );
}

// Export the context so you can use useContext(UserContext) in other files
export default App;
export { UserContext }; // export the context
