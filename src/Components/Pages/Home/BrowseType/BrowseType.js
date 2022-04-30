import React from "react";
import frod from "../../../../images/ford.png";
import bently from "../../../../images/bentley.png";
import bmw from "../../../../images/bmw.png";
import acura from "../../../../images/acura.png";
import kia from "../../../../images/kia.png";
import hyundai from "../../../../images/hyundai.png";
import convertible from "../../../../images/convertible.png";
import pickup from "../../../../images/pickup.png";
import minivan from "../../../../images/minivan.png";
import sedan from "../../../../images/sedan.png";
import sport from "../../../../images/sport.png";
import suv from "../../../../images/suv.png";
import "./BrowseType.css";

const BrowseType = () => {
    return (
        <div className="">
            <div className="container-md">
                <div className="row browse-type py-5">
                    <div className="col-md-6">
                        <h4 className="mb-4">
                            Browse by{" "}
                            <span style={{ color: "#1BC744" }}>Make</span>
                        </h4>
                        <div className="row g-4 me-4">
                            <div className="col-md-4">
                                <div className="make">
                                    <img src={frod} alt="" />
                                    <h6>Frod</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="make">
                                    <img src={bently} alt="" />
                                    <h6>Bentley</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="make">
                                    <img src={acura} alt="" />
                                    <h6>Acura</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="make">
                                    <img src={hyundai} alt="" />
                                    <h6>Hyundai</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="make">
                                    <img src={kia} alt="" />
                                    <h6>KIA</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="make">
                                    <img src={bmw} alt="" />
                                    <h6>BMW</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-4 ms-4">
                            Browse by{" "}
                            <span style={{ color: "#1BC744" }}>Types</span>
                        </h4>
                        <div className="row ms-4 g-4">
                            <div className="col-md-4">
                                <div className="type">
                                    <img src={convertible} alt="" />
                                    <h6>Convertible</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="type">
                                    <img src={pickup} alt="" />
                                    <h6>Pickups</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="type">
                                    <img src={minivan} alt="" />
                                    <h6>Minivan</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="type">
                                    <img src={sedan} alt="" />
                                    <h6>Sedan</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="type">
                                    <img src={sport} alt="" />
                                    <h6>Sports</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="type">
                                    <img src={suv} alt="" />
                                    <h6>SUV</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseType;
