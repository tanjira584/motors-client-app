import {
    faCar,
    faMessage,
    faShield,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Counter.css";
import counter from "../../../../images/counter.jpg";
const Counter = () => {
    return (
        <div
            className="counter-area py-5"
            style={{ backgroundImage: `url(${counter})` }}
        >
            <div className="container-md py-5">
                <div className="row g-5">
                    <div className="col-md-3">
                        <div className="count d-flex align-items-center justify-content-center text-light">
                            <div className="count-icon">
                                <FontAwesomeIcon
                                    icon={faCar}
                                    className="icon"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="count-number">
                                <h2>5000+</h2>
                                <span>Cars for Sale</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="count d-flex align-items-center justify-content-center text-light">
                            <div className="count-icon">
                                <FontAwesomeIcon
                                    icon={faUserGroup}
                                    className="icon"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="count-number">
                                <h2>1550+</h2>
                                <span>visitor per day</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="count d-flex align-items-center justify-content-center text-light">
                            <div className="count-icon">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    className="icon"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="count-number">
                                <h2>2500+</h2>
                                <span>dealer reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="count d-flex align-items-center justify-content-center text-light">
                            <div className="count-icon">
                                <FontAwesomeIcon
                                    icon={faShield}
                                    className="icon"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="count-number">
                                <h2>50+</h2>
                                <span>Verified Dealers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
