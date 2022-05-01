import {
    faArrowUpWideShort,
    faGasPump,
    faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import d1 from "../../../images/d1.png";
const InventoryItem = () => {
    const navigate = useNavigate();
    return (
        <div className="home-item">
            <div className="row">
                <div className="col-md-4">
                    <div className="img mb-3">
                        <img
                            className="img-fluid"
                            src="https://i.ibb.co/j33FmkG/b1.jpg"
                            alt=""
                        />
                        <div className="speciality">Special</div>
                    </div>
                </div>
                <div className="col-md-8">
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

                    <div className="vehicle-condition mt-3">
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
                    <div className="item-description">
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="update-btn">
                                <button
                                    onClick={() => navigate("/inventory/1")}
                                >
                                    Update Stock
                                </button>
                            </div>
                            <div className="delete-btn">
                                <button>Delete Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-2" />
        </div>
    );
};
export default InventoryItem;
