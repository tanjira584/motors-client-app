import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import blog1 from "../../../images/blog1.jpg";
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
import d1 from "../../../images/d1.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const InventoryDetails = () => {
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <h2 className="">This is inventory details</h2>
                <hr />
                <div className="row py-5">
                    <div className="col-md-8">
                        <div className="inventory-details">
                            <div className="modelPrice d-flex justify-content-between">
                                <div className="inventory-model">
                                    <h5>New</h5>
                                    <h4>NEW LAMBORGHINI URUS 2021</h4>
                                </div>
                                <div className="inventory-price">
                                    <div className="price-seal">
                                        <div className="regular">$30000</div>
                                        <div className="normal">
                                            <h4>$27000</h4>
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
                                        20
                                    </h4>
                                </div>
                                <div className="delivered-btn">
                                    <button>Delivered</button>
                                </div>
                            </div>
                            <div className="img">
                                <img
                                    style={{ width: "100%" }}
                                    src={blog1}
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
                                            <span>Stock Id</span>
                                        </div>
                                        <div>
                                            <h5>3984</h5>
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
                                            <h5>100 mi</h5>
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
                                            <h5>LPG autogas</h5>
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
                                            <h5>6.2L v8</h5>
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
                                            <h5>Manual</h5>
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
                                            <h5>Grey</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="seller-notes mt-5">
                                <h4>Seller Notes</h4>
                                <p className="m-0">
                                    Fusce viverra, ligula quis pellentesque
                                    interdum, leo felis congue dui, ac accumsan
                                    sem nulla id lorem. Praesent ut tristique
                                    dui, nec condimentum lacus. Maecenas
                                    lobortis ante id egestas placerat. Nullam at
                                    ultricies lacus. Nam in nulla consectetur,
                                    suscipit mauris eu, fringilla augue.
                                    Phasellus gravida, dui quis dignissim
                                    tempus, tortor orci tristique leo, ut congue
                                    diam ipsum at massa. Pellentesque ut
                                    vestibulum erat. Donec a felis eget tellus
                                    laoreet ultrices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ps-4 ">
                        <div className="update-stock p-4">
                            <h4 className="mb-3">Update Your Stock</h4>
                            <form>
                                <input
                                    type="number"
                                    name="quantity"
                                    id=""
                                    placeholder="Quantity of product"
                                />
                                <input type="submit" value="UPDATE" />
                            </form>
                        </div>
                        <div className="dealer-info mt-5 p-4">
                            <h4 className="mb-4">West Covina Motors</h4>
                            <div>
                                <div className="dealer-logo d-flex  align-items-center justify-content-between">
                                    <img
                                        style={{ width: "50%" }}
                                        src={d1}
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
                                        <span>+880161371257</span>
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
                                        <span>Kasba, Brahmanbaria.</span>
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
