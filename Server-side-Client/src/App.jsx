import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <>
      <h3>User Management</h3>
      <p>Number of Users : {users.length}</p>
      <div>
        {users.map(user => <p>{user.id} : {user.name} : {user.email}</p>)}
      </div>
    </>
  )
}

export default App
