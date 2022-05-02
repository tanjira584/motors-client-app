import {
    faArrowUpWideShort,
    faGasPump,
    faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ motor }) => {
    const {
        model,
        stock,
        regular,
        img,
        normal,
        milage,
        fuelType,
        transmission,
        notes,
        dLogo,
    } = motor;
    const navigate = useNavigate();
    return (
        <div className="home-item">
            <div className="img mb-3">
                <img className="img-fluid" src={img} alt="" />
                <div className="speciality">Special</div>
            </div>
            <div className="modelPrice d-flex justify-content-between">
                <div className="home-model">
                    <h6>{model}</h6>
                    <p className="m-0">
                        <span>Stock:</span> {stock}
                    </p>
                </div>
                <div className="home-price">
                    <div className="regular">${regular}</div>
                    <div className="normal">${normal}</div>
                </div>
            </div>
            <hr className="mb-2" />
            <div className="vehicle-condition">
                <ul>
                    <li>
                        {milage} mi{" "}
                        <FontAwesomeIcon
                            className="icon"
                            icon={faRoad}
                        ></FontAwesomeIcon>
                    </li>
                    <li>
                        {fuelType}
                        <FontAwesomeIcon
                            className="icon"
                            icon={faGasPump}
                        ></FontAwesomeIcon>
                    </li>
                    <li>
                        {transmission}
                        <FontAwesomeIcon
                            className="icon"
                            icon={faArrowUpWideShort}
                        ></FontAwesomeIcon>
                    </li>
                </ul>
            </div>
            <div className="item-description py-3">
                <p className="m-0">{notes.substr(0, 130) + "..."}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div style={{ width: "50%" }} className="supplyer">
                        <img src={dLogo} alt="" />
                    </div>
                    <div className="update-btn">
                        <button
                            onClick={() => navigate(`/inventory/${motor._id}`)}
                        >
                            Update Stock
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
