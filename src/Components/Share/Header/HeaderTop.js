import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faPinterestP,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const HeaderTop = () => {
    return (
        <div className="header-top d-none d-md-block">
            <div className="container-md">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-light">
                        <select
                            className="text-secondary bg-transparent border-0"
                            name=""
                            id=""
                        >
                            <option value="">English</option>
                            <option value="">France</option>
                            <option value="">Bangla</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="contact text-secondary">
                            <p className="m-0">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                ></FontAwesomeIcon>
                                <span className="d-inline-block ms-2">
                                    +88001613071257
                                </span>
                            </p>
                        </div>
                        <div className="address ms-5 text-secondary">
                            <p className="m-0">Brahmanbaria, Kasba , Deli</p>
                        </div>
                        <div className="opening-time ms-5  text-secondary">
                            <p className="m-0"> MON - SAT 8.00 - 18.00</p>
                        </div>
                        <div className="header-social ms-5">
                            <ul className="m-0 p-0 d-flex">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faLinkedinIn}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faPinterestP}
                                    ></FontAwesomeIcon>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
