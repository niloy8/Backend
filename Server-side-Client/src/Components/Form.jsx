import { useState } from "react";
import { useEffect } from "react";

const Form = () => {
    const [users, setUsers] = useState([])

    const handleUser = (e) => {
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
            .then(data => {
                const newUser = [...users, data]
                setUsers(newUser)
                e.target.reset()


            })
    };
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>User Management</h3>
            <form action="#" onSubmit={handleUser}>
                <input type="text" name='name' />
                <input type="email" name='email' />
                <input type="submit" value="Add User" />
            </form>
            <p>Number of Users : {users.length}</p>
            <div>
                {users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)}
            </div>
        </div>
    );
};

export default Form;