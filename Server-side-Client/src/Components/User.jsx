import { useLoaderData } from "react-router";

const User = () => {
    const users = useLoaderData()
    console.log(users)
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted')
                }
            })
    };
    return (
        <div>
            {users.length}
            {users.map(user => <p key={user._id}>{user.name} <button
                onClick={() => handleDelete(user._id)}>X</button></p>)}
        </div>
    );
};

export default User;