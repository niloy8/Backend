import { useLoaderData } from "react-router";

const Update = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            {users.name}
        </div>
    );
};

export default Update;