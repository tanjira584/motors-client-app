import React from "react";

const Signup = () => {
    return (
        <div>
            <h3 className="mb-4">Signup</h3>
            <div>
                <form className="p-5 signup-form">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div>
                        <input className="" type="submit" value="Signup" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
