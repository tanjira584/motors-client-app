import React, { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../src/firebase.init";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const [createUserWithEmailAndPassword, , loading] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile] = useUpdateProfile(auth);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    if (loading) {
        return (
            <div className="spin">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    /*-----------Handle Sign up Form----*/
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(user.email, user.password);
        updateProfile({ displayName: user.name });
        toast("Sent an email verification");
        setUser({ name: "", email: "", password: "" });
        e.target.reset();
    };

    return (
        <div>
            <h3 className="mb-4">Signup</h3>
            <div>
                <form className="p-5 signup-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="user-name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="user-name"
                            placeholder="Enter name"
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user-email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="user-email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user-password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="user-password"
                            name="password"
                            placeholder="Enter password"
                            onChange={handleChange}
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
