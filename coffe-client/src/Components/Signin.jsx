import { useContext } from "react";
import { AuthContext } from "../Providers/Provider";
import { data } from "react-router";

const Signin = () => {
    const { signinUser } = useContext(AuthContext);
    const handleSignin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const user = { email, password }
        console.log(user);
        signinUser(email, password)
            .then(result => {
                console.log(result.user)
                const loggedIn = result?.user?.metadata?.lastSignInTime
                const loginInfo = { email, loggedIn }
                fetch('https://coffe-server-roan.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))


            })
            .catch(er => {
                console.log(er);
            })


    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignin}>
                                <fieldset className="fieldset">

                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name="email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name="password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <input type="submit" className="btn btn-neutral mt-4" value="Sign In" />

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