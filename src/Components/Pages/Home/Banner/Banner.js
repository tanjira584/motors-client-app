import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bannar from "../../../../images/bannar.jpg";
import "./Banner.css";

const Banner = () => {
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
                    <div className="row g-3">
                        <div className="col-lg-3 filter-box">
                            <div className="choose-maker">
                                <select name="" id="">
                                    <option value="">Choose Make</option>
                                    <option value="">Honda</option>
                                    <option value="">KIA</option>
                                    <option value="">Bently</option>
                                    <option value="">BMW</option>
                                    <option value="">Ford</option>
                                    <option value="">Acura</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 filter-box">
                            <div className="choose-maker">
                                <select name="" id="">
                                    <option value="">Choose Model</option>
                                    <option value="">Honda</option>
                                    <option value="">KIA</option>
                                    <option value="">Bently</option>
                                    <option value="">BMW</option>
                                    <option value="">Ford</option>
                                    <option value="">Acura</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-3 filter-box">
                            <div className="filter-location">
                                <input
                                    type="text"
                                    placeholder="Enter a location"
                                    name=""
                                    id=""
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
                </div>
            </div>
        </section>
    );
};

export default Banner;
