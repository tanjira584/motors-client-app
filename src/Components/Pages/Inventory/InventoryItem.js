import {
    faArrowUpWideShort,
    faGasPump,
    faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
const InventoryItem = ({ motor, handleDelete }) => {
    const navigate = useNavigate();
    const {
        img,
        model,
        stock,
        transmission,
        fuelType,
        milage,
        regular,
        normal,
    } = motor;

    return (
        <div className="home-item">
            <div className="row">
                <div className="col-md-4">
                    <div className="img mb-3">
                        <img className="img-fluid" src={img} alt="" />
                        <div className="speciality">Special</div>
                    </div>
                </div>
                <div className="col-md-8">
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

                    <div className="vehicle-condition mt-3">
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
                    <div className="item-description">
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="update-btn">
                                <button
                                    onClick={() =>
                                        navigate(`/inventory/${motor._id}`)
                                    }
                                >
                                    Update Stock
                                </button>
                            </div>
                            <div className="delete-btn">
                                <button onClick={() => handleDelete(motor._id)}>
                                    Delete Item
                                </button>
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
