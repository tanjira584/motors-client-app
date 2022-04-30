import {
    faArrowUpWideShort,
    faGasPump,
    faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import d1 from "../../../../images/d1.png";

const Item = () => {
    return (
        <div className="home-item">
            <div className="img mb-3">
                <img
                    className="img-fluid"
                    src="https://i.ibb.co/j33FmkG/b1.jpg"
                    alt=""
                />
                <div className="speciality">Special</div>
            </div>
            <div className="modelPrice d-flex justify-content-between">
                <div className="home-model">
                    <h6>NEW LAMBORGHINI URUS 2021</h6>
                    <p className="m-0">
                        <span>Stock:</span> 20
                    </p>
                </div>
                <div className="home-price">
                    <div className="regular">$30000</div>
                    <div className="normal">$27000</div>
                </div>
            </div>
            <hr className="mb-2" />
            <div className="vehicle-condition">
                <ul>
                    <li>
                        5000 mi{" "}
                        <FontAwesomeIcon
                            className="icon"
                            icon={faRoad}
                        ></FontAwesomeIcon>
                    </li>
                    <li>
                        18/100
                        <FontAwesomeIcon
                            className="icon"
                            icon={faGasPump}
                        ></FontAwesomeIcon>
                    </li>
                    <li>
                        Manual
                        <FontAwesomeIcon
                            className="icon"
                            icon={faArrowUpWideShort}
                        ></FontAwesomeIcon>
                    </li>
                </ul>
            </div>
            <div className="item-description py-3">
                <p className="m-0">
                    Kia Corporation, commonly known as Kia, is a South Korean
                    multinational automobile manufacturer headquartered in
                    Seoul, South Korea.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div style={{ width: "50%" }} className="supplyer">
                        <img src={d1} alt="" />
                    </div>
                    <div className="update-btn">
                        <button>Update Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
