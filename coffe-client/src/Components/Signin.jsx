import { useContext } from "react";
import { AuthContext } from "../Providers/Provider";
import Swal from "sweetalert2";

const Signin = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = (e) => {
        e.preventDefault()
        console.log(e)
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        const NewUser = { name, email }
        createUser(email, password)
            .then(result => {
                console.log(result)
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(NewUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success',
                                text: 'Added Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                            e.target.reset()
                        }
                    })
            })
            .catch(err => { console.log(err) })
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignup}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" className="input" placeholder="name" name="name" />
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name="email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name="password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <input type="submit" className="btn btn-neutral mt-4" value="Sign Up" />

                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;