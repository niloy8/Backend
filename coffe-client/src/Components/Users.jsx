import { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
    const usersData = useLoaderData()
    const [users, setUsers] = useState(usersData)

    console.log(users[0].name)
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffe-server-roan.vercel.app/users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })
            }
        });
    };
    return (
        <div>
            <h2 className="text-3xl text-center text-green-400">Users {users.length}</h2>

            <div>
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, index) =>
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created}</td>
                                <td>{user.loggedIn}</td>
                                <td>
                                    <button className="btn">E</button>
                                    <button className="btn" onClick={() => handleDelete(user._id)}>X</button>
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