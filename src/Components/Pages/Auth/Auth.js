import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Login from "./Login";
import Signup from "./Signup";
import "./Auth.css";

const Auth = () => {
    return (
        <div>
            <Header></Header>
            <div className="auth-area">
                <div className="container-md py-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <Login></Login>
                        </div>
                        <div className="col-lg-6">
                            <Signup></Signup>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Auth;
