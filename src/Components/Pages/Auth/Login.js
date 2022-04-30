import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        e.target.reset();
        setUser({ email: "", password: "" });
    };
    return (
        <div>
            <h3 className="mb-4">Login </h3>

            <div className="me-4">
                <div className="google-login px-5 py-3">
                    <button>Login With Google</button>
                    <span>For testing:</span>
                    <br />
                    <span>Email: demo@gmail.com</span>
                    <br />
                    <span>Pass: demo1234</span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="w-50 border"></div>
                    <div className="mx-4">OR</div>
                    <div className="w-50 border"></div>
                </div>
                <form className="p-5 login-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="form-label text-light"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-1">
                        <label
                            htmlFor="password"
                            className="form-label text-light"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter password"
                        />
                    </div>
                    <p className="m-0 mb-3 text-light">
                        Forgot your password{" "}
                        <button className="bg-transparent border-0 text-primary">
                            Reset password
                        </button>
                    </p>
                    <div>
                        <input className="" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
