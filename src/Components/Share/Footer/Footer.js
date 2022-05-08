import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container-md">
                <div className="footer-top d-lg-flex align-items-center justify-content-between">
                    <div className="search-box">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                            />
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <FontAwesomeIcon
                                    icon={faSearch}
                                ></FontAwesomeIcon>
                            </span>
                        </div>
                    </div>
                    <div className="footer-link text-center text-lg-start">
                        <ul className="list-unstyled m-0 p-0">
                            <li>
                                <a href=" ">help</a>
                            </li>
                            <li>
                                <a href=" ">about us</a>
                            </li>
                            <li>
                                <a href=" ">contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr style={{ border: "1px solid #fff" }} />
                <div className="footer-bottom d-lg-flex align-items-center justify-content-between">
                    <div className="copy-right mb-3 mb-lg-0">
                        <p className="text-center text-lg-start">
                            Copyright © 2021. Motors – React Theme by Tanjir
                            Ahmed
                        </p>
                    </div>
                    <div className="footer-social text-center text-lg-start">
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFacebook}
                                ></FontAwesomeIcon>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faTwitter}
                                ></FontAwesomeIcon>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faInstagram}
                                ></FontAwesomeIcon>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faLinkedinIn}
                                ></FontAwesomeIcon>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
