import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/logo.svg";
import headerbg from "../../../images/header-bg.png";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [auser, aloading, aerror] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div
            className="header-main"
            style={{ backgroundImage: `url(${headerbg})` }}
        >
            <nav className="navbar navbar-expand-lg">
                <div className="container-md">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav main-menu ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/inventory" className="nav-link">
                                    Inventory
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dealers" className="nav-link">
                                    dealers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link">
                                    Blogs
                                </Link>
                            </li>
                            {auser && (
                                <li className="nav-item">
                                    <button
                                        onClick={() => signOut(auth)}
                                        className="nav-link bg-transparent border-0"
                                    >
                                        Signout
                                    </button>
                                </li>
                            )}
                            {auser && (
                                <li className="nav-item">
                                    <Link to="/my-items" className="nav-link">
                                        My Items
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login/Register
                                </Link>
                            </li>
                            {auser && (
                                <li className="nav-item">
                                    <button
                                        onClick={() => navigate("/add-item")}
                                        className="add-item-btn"
                                    >
                                        Add Item
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
