import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import headerbg from "../../../images/header-bg.png";
import "./Header.css";

const Header = () => {
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
                                <Link to="/link" className="nav-link">
                                    Link
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
