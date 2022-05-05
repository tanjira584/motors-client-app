import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

const PageNotFound = () => {
    return (
        <div>
            <div className="w-25 not-content">
                <h1>404</h1>
                <h4>Oops! This Page Could Not Be Found</h4>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Temporibus quam odio tenetur reprehenderit ipsum eos est
                    consectetur officiis error facilis.
                </p>
                <Link to="/">Go Home Page</Link>
            </div>
        </div>
    );
};

export default PageNotFound;
