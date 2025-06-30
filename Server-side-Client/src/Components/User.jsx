import { useState } from "react";
import { Link, useLoaderData } from "react-router";

const User = () => {
    const lodedusers = useLoaderData()
    const [users, setUsers] = useState(lodedusers)
    console.log(users)
    const handleDelete = (id) => {
        fetch(`https://coffe-server-roan.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted')
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
    };
    return (
        <div>
            {users.length}
            {users.map(user => <p key={user._id}>{user.name} <button
                onClick={() => handleDelete(user._id)}>X</button> <Link to={`/update/${user._id}`}><button>Update</button></Link></p>)}
        </div>
    );
};

export default User;