import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="blog-area">
                    <div className="blog">
                        <div className="question">
                            <h5>
                                <span className="text-danger">Question: </span>{" "}
                                Difference between javascript and nodejs?
                            </h5>
                        </div>
                        <div className="answer">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Javascript</h6>
                                    <ol order="1">
                                        <li>
                                            Javascript is a programming language
                                            that is used for writing scripts on
                                            the website.{" "}
                                        </li>
                                        <li>
                                            Javascript can only be run in the
                                            browsers.
                                        </li>
                                        <li>
                                            It is basically used on the
                                            client-side.
                                        </li>
                                        <li>
                                            Javascript is capable enough to add
                                            HTML and play with the DOM.{" "}
                                        </li>
                                        <li>
                                            Javascript can run in any browser
                                            engine as like JS core in safari and
                                            Spidermonkey in Firefox.{" "}
                                        </li>
                                        <li>
                                            Javascript is used in frontend
                                            development.
                                        </li>
                                        <li>
                                            Some of the javascript frameworks
                                            are RamdaJS, TypedJS, etc.{" "}
                                        </li>
                                        <li>
                                            It is the upgraded version of ECMA
                                            script that uses Chrome’s V8 engine
                                            written in C++.{" "}
                                        </li>
                                    </ol>
                                </div>
                                <div className="col-md-6">
                                    <h6>Node.Js</h6>
                                    <ol>
                                        <li>
                                            NodeJS is a Javascript runtime
                                            environment.
                                        </li>
                                        <li>
                                            We can run Javascript outside the
                                            browser with the help of NodeJS.
                                        </li>
                                        <li>
                                            {" "}
                                            It is mostly used on the
                                            server-side.
                                        </li>
                                        <li>
                                            Nodejs does not have capability to
                                            add HTML tags.
                                        </li>
                                        <li>
                                            V8 is the Javascript engine inside
                                            of node.js that parses and runs
                                            Javascript.{" "}
                                        </li>
                                        <li>
                                            Nodejs is used in server-side
                                            development.
                                        </li>
                                        <li>
                                            Some of the Nodejs modules are
                                            Lodash, express etc. These modules
                                            are to be imported from npm.{" "}
                                        </li>
                                        <li>
                                            Nodejs is written in C, C++ and
                                            Javascript.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="question">
                            <h5>
                                <span className="text-danger">Question: </span>
                                When should you use nodejs and when should you
                                use mongodb?
                            </h5>
                        </div>
                        <div className="answer">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>When we should use Node.js</h6>
                                    <ul>
                                        <li>
                                            For developing data streaming
                                            applications
                                        </li>
                                        <li>For developing microservices</li>
                                        <li>Suitable for IoT Applications</li>
                                        <li>
                                            Scalable application development
                                        </li>
                                        <li>Communicate with API</li>
                                        <li>For developing SPA</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h6>When we should use MongoDb</h6>
                                    <ul>
                                        <li>
                                            It is a natural form to store data.
                                        </li>
                                        <li>It is human-readable.</li>
                                        <li>
                                            Structured and unstructured
                                            information can be stored in the
                                            same document.
                                        </li>
                                        <li>
                                            You can nest JSON to store complex
                                            data objects.
                                        </li>
                                        <li>
                                            JSON has a flexible and dynamic
                                            schema, so adding fields or leaving
                                            a field out is not a problem
                                        </li>
                                        <li>
                                            Documents map to objects in most
                                            popular programming languages.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="question">
                            <h5>
                                <span className="text-danger">Question: </span>
                                Differences between sql and nosql databases?
                            </h5>
                        </div>
                        <div className="answer">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Sql</h6>
                                    <ol>
                                        <li>
                                            RELATIONAL DATABASE MANAGEMENT
                                            SYSTEM (RDBMS)
                                        </li>
                                        <li>
                                            These databases have fixed or static
                                            or predefined schema
                                        </li>
                                        <li>
                                            These databases are not suited for
                                            hierarchical data storage.
                                        </li>
                                        <li>
                                            These databases are best suited for
                                            complex queries
                                        </li>
                                        <li>Vertically Scalable</li>
                                        <li>
                                            Follows ACID(Atomicity, Consistency,
                                            Isolation and Durability) property.
                                        </li>
                                    </ol>
                                </div>
                                <div className="col-md-6">
                                    <h6>NoSQL</h6>
                                    <ol>
                                        <li>
                                            Non-relational or distributed
                                            database system.
                                        </li>
                                        <li>They have dynamic schema</li>
                                        <li>
                                            These databases are best suited for
                                            hierarchical data storage.
                                        </li>
                                        <li>
                                            These databases are not so good for
                                            complex queries
                                        </li>
                                        <li> Horizontally scalable</li>
                                        <li>
                                            Follows CAP(consistency,
                                            availability, partition tolerance)
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="question">
                            <h5>
                                <span className="text-danger">Question: </span>
                                What is the purpose of jwt and how does it work?
                            </h5>
                        </div>
                        <div className="answer">
                            <h6>What is the purpose is JWT token?</h6>
                            <p>
                                JWTs are mainly used for authentication. After a
                                user signs in to an application, the application
                                then assigns JWT to that user. Subsequent
                                requests by the user will include the assigned
                                JWT. This token tells the server what routes,
                                services, and resources the user is allowed to
                                access.
                            </p>
                            <h6>How does it works?</h6>
                            <p>
                                JSON Web Tokens consist of three parts separated
                                by dots (.), which are:
                            </p>
                            <ul>
                                <li>Header</li>
                                <li>Payload</li>
                                <li>Signature</li>
                            </ul>
                            <p>
                                The following workflow explains the
                                authentication flow:{" "}
                            </p>
                            <ol>
                                <li>
                                    User sign-in using username and password.
                                </li>
                                <li>
                                    The authentication server verifies the
                                    credentials and issues a JWT signed using a
                                    private key.
                                </li>
                                <li>
                                    Moving forward, the client will use the JWT
                                    to access protected resources by passing the
                                    JWT in the HTTP Authorization header.
                                </li>
                                <li>
                                    The resource server then verifies the
                                    authenticity of the token using the public
                                    key.
                                </li>
                                <li>
                                    If JWT token is right then server response
                                    to the client for protected resources.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
