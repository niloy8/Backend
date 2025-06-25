
import './App.css'


function App() {
  const handleAdduser = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const user = { name, email }
    console.log(user)
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  };
  return (
    <>
      <h1>WELCOME</h1>
      <form onSubmit={handleAdduser}>
        <input type="text" name='name' />
        <input type="text" name='email' />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
