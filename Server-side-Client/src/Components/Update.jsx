import { useLoaderData } from "react-router";

const Update = () => {
    const users = useLoaderData()
    console.log(users)

    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const user = { name, email }
        console.log(user)
        fetch(`http://localhost:3000/users/${users._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                }
            })
    };
    return (
        <div>
            {users.name}
            <form onSubmit={handleUpdate}>
                <input type="text " name="name" defaultValue={users.name} />
                <input type="email " name="email" defaultValue={users.email} />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;