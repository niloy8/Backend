import { useLoaderData } from "react-router";

const User = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            {users.length}
            {users.map(user => <p key={user._id}>{user.name}</p>)}
        </div>
    );
};

export default User;