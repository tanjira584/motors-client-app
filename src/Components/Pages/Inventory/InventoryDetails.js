import React, { useState } from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGasPump,
    faLocationDot,
    faPhone,
    faRoad,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./InventoryDetails.css";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import useMotor from "../../../hooks/useMotor";

const InventoryDetails = () => {
    const { id } = useParams();
    const [quantity, setQty] = useState(0);
    const [motor] = useMotor(id, quantity);
    const navigate = useNavigate();
    const {
        condition,
        make,
        type,
        model,
        milage,
        engine,
        fuelType,
        transmission,
        color,
        stock,
        img,
        regular,
        normal,
        notes,
        dName,
        dLogo,
        dLocation,
        dPhone,
    } = motor;
    const handleStock = (e) => {
        setQty(e.target.value);
    };

    /*------------Update Stock------------*/
    const handleSubmit = (e) => {
        e.preventDefault();
        const qty = parseInt(quantity);
        const uri = `https://serene-chamber-17586.herokuapp.com/motor/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ qty }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Stock Update Successfully");
                e.target.reset();
                setQty(0);
            });
    };

    /*-----------Handle Delivered-----------*/
    const handleDeliver = (id) => {
        const uri = `https://serene-chamber-17586.herokuapp.com/motor/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                delivered: true,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Delivered Successfull");
                if (data.acknowledged) {
                    setQty(stock - 1);
                }
            });
    };
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="d-flex align-items-center justify-content-between">
                    <h2 className="">This is inventory details</h2>
                    <button
                        className="add-item-btn"
                        onClick={() => navigate("/inventory")}
                    >
                        Manage Inventories
                    </button>
                </div>
                <hr />
                <div className="row py-5 g-5">
                    <div className="col-md-8">
                        <div className="inventory-details">
                            <div className="modelPrice d-flex justify-content-between">
                                <div className="inventory-model">
                                    <h5>{condition}</h5>
                                    <h4>{model}</h4>
                                </div>
                                <div className="inventory-price">
                                    <div className="price-seal">
                                        <div className="regular">
                                            ${regular}
                                        </div>
                                        <div className="normal">
                                            <h4>${normal}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex  align-items-center justify-content-between mb-3">
                                <div>
                                    <h4>
                                        <span style={{ color: "#1bc743" }}>
                                            Stock:{" "}
                                        </span>{" "}
                                        {stock}
                                    </h4>
                                </div>
                                <div className="delivered-btn">
                                    <button
                                        onClick={() => handleDeliver(motor._id)}
                                    >
                                        Delivered
                                    </button>
                                </div>
                            </div>
                            <div className="img">
                                <img
                                    style={{ width: "100%" }}
                                    src={img}
                                    alt=""
                                />
                            </div>
                            <div className="inventory-feature pb-5">
                                <ul>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faRoad}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Make</span>
                                        </div>
                                        <div>
                                            <h5>{make}</h5>
                                        </div>
                                    </li>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faRoad}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Type</span>
                                        </div>
                                        <div>
                                            <h5>{type}</h5>
                                        </div>
                                    </li>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faRoad}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Stock Id</span>
                                        </div>
                                        <div>
                                            <h5>{motor._id}</h5>
                                        </div>
                                    </li>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faRoad}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Milage</span>
                                        </div>
                                        <div>
                                            <h5>{milage} mi</h5>
                                        </div>
                                    </li>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faGasPump}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Fuel Type</span>
                                        </div>
                                        <div>
                                            <h5>{fuelType}</h5>
                                        </div>
                                    </li>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faGasPump}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Engine</span>
                                        </div>
                                        <div>
                                            <h5>{engine}</h5>
                                        </div>
                                    </li>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faGasPump}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Transmission</span>
                                        </div>
                                        <div>
                                            <h5>{transmission}</h5>
                                        </div>
                                    </li>
                                    <li className="border-bottom d-flex align-items-center justify-content-between">
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faGasPump}
                                                className="icon"
                                            ></FontAwesomeIcon>
                                            <span>Color</span>
                                        </div>
                                        <div>
                                            <h5>{color}</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="seller-notes mt-5">
                                <h4>Seller Notes</h4>
                                <p className="m-0">{notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ps-4 ">
                        <div className="update-stock p-4">
                            <h4 className="mb-3">Update Your Stock</h4>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="number"
                                    name="stock"
                                    id=""
                                    placeholder="Quantity of product"
                                    onChange={handleStock}
                                />
                                <input type="submit" value="UPDATE" />
                            </form>
                        </div>
                        <div className="dealer-info mt-5 p-4">
                            <h4 className="mb-4">{dName}</h4>
                            <div>
                                <div className="dealer-logo d-flex  align-items-center justify-content-between">
                                    <img
                                        style={{ width: "50%" }}
                                        src={dLogo}
                                        alt=""
                                    />
                                    <div>
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="icon"
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="icon"
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="icon"
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="icon"
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faStarHalfAlt}
                                                    className="icon"
                                                ></FontAwesomeIcon>
                                            </li>
                                        </ul>
                                        <span className="text-secondary">
                                            Reviews (2)
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="phone-dealer">
                                    <div>
                                        <FontAwesomeIcon
                                            className="me-3 icon"
                                            icon={faPhone}
                                        ></FontAwesomeIcon>
                                        <span>{dPhone}</span>
                                    </div>
                                </div>
                                <div className="whatsup-btn my-3">
                                    <button>
                                        <FontAwesomeIcon
                                            icon={faWhatsapp}
                                            className="icon"
                                        ></FontAwesomeIcon>{" "}
                                        Chat via Whatsup
                                    </button>
                                </div>
                                <div className="location-dealer pb-3">
                                    <div>
                                        <FontAwesomeIcon
                                            className="me-3 icon"
                                            icon={faLocationDot}
                                        ></FontAwesomeIcon>
                                        <span>{dLocation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default InventoryDetails;
