import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannar from "../../../../images/bannar.jpg";
import "./Banner.css";

const Banner = () => {
    const [car, setCar] = useState({ make: "", type: "", price: "" });
    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(
            `/inventory?make=${car.make}&type=${car.type}&price=${parseInt(
                car.price
            )}`
        );
    };
    return (
        <section>
            <div
                className="home-banner"
                style={{ backgroundImage: `url(${bannar})` }}
            >
                <div className="container-md">
                    <div className="banner-content">
                        <h1>15000+</h1>
                        <h3>Vehicle Available</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="stm-filter-wrp">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-lg-3 filter-box">
                                <div className="choose-maker">
                                    <select
                                        name="make"
                                        id=""
                                        onChange={handleChange}
                                    >
                                        <option value="">Choose Make</option>
                                        <option value="hyundai">Hyundai</option>
                                        <option value="kia">KIA</option>
                                        <option value="bently">Bently</option>
                                        <option value="bmw">BMW</option>
                                        <option value="ford">Ford</option>
                                        <option value="acura">Acura</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 filter-box">
                                <div className="choose-maker">
                                    <select
                                        name="type"
                                        id=""
                                        onChange={handleChange}
                                    >
                                        <option value="">Choose Type</option>
                                        <option value="convertible">
                                            Convertible
                                        </option>
                                        <option value="pickups">Pickups</option>
                                        <option value="minivan">Minivan</option>
                                        <option value="sedan">Sedan</option>
                                        <option value="sports">Sports</option>
                                        <option value="suv">SUV</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-3 filter-box">
                                <div className="filter-location">
                                    <input
                                        type="text"
                                        placeholder="Max Price"
                                        name="price"
                                        id=""
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 filter-box">
                                <div className="filter-btn">
                                    <button type="submit">
                                        <FontAwesomeIcon
                                            style={{ marginRight: "6px" }}
                                            icon={faSearch}
                                        ></FontAwesomeIcon>
                                        37 Cars
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Banner;
