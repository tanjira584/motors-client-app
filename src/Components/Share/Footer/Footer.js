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
                <div className="footer-top d-flex align-items-center justify-content-between">
                    <div className="search-box">
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search..."
                            />
                            <span class="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                ></FontAwesomeIcon>
                            </span>
                        </div>
                    </div>
                    <div className="footer-link">
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
                <div className="footer-bottom d-flex align-items-center justify-content-between">
                    <div className="copy-right">
                        <p>
                            Copyright © 2021. Motors – React Theme by Tanjir
                            Ahmed
                        </p>
                    </div>
                    <div className="footer-social">
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
