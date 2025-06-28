import { useContext } from "react";
import { AuthContext } from "../Providers/Provider";

const Signin = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = (e) => {
        e.preventDefault()
        console.log(e)
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(result => {
                console.log(result)
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