import { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
    const usersData = useLoaderData()
    const [users, setUsers] = useState(usersData)
    console.log(users[0].name)
    return (
        <div>
            <h2 className="text-3xl text-center text-green-400">Users {users.length}</h2>

            <div>
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map(user =>
                            <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created}</td>
                                <td>
                                    <button className="btn">E</button>
                                    <button className="btn">X</button>
                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;