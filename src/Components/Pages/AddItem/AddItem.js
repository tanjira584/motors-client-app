import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./AddItem.css";

const AddItem = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5">
                <h2 className="pb-4">Build Your Ad.</h2>
                <div className="ad-form">
                    <form className="py-5" onSubmit={handleSubmit}>
                        <div className="listing-item-details">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h5>Listing Item Details</h5>
                                <h5 style={{ color: "#1BC744" }}>Step 1</h5>
                            </div>
                            <div className="listing-input ">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div class="input-box">
                                            <h6>Conditions*</h6>
                                            <select name="" id="">
                                                <option value="">
                                                    Select Condition
                                                </option>
                                                <option value="">New</option>
                                                <option value="">Used</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="input-box">
                                            <h6>Makes*</h6>
                                            <select name="" id="">
                                                <option value="">
                                                    Select Make
                                                </option>
                                                <option value="">
                                                    Bentley
                                                </option>
                                                <option value="">KIA</option>
                                                <option value="">
                                                    Hyundai
                                                </option>
                                                <option value="">Ford</option>
                                                <option value="">BMW</option>
                                                <option value="">ACURA</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="input-box">
                                            <h6>Types*</h6>
                                            <select name="" id="">
                                                <option value="">
                                                    Select Types
                                                </option>
                                                <option value="">
                                                    Convertible
                                                </option>
                                                <option value="">
                                                    Pickups
                                                </option>
                                                <option value="">
                                                    Minivan
                                                </option>
                                                <option value="">Sedan</option>
                                                <option value="">Sports</option>
                                                <option value="">SUV</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="input-box">
                                            <h6>Select Models*</h6>
                                            <input
                                                type="text"
                                                name="model"
                                                id=""
                                                placeholder="Enter model"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="optional-input mt-4">
                                <div className="row gx-5">
                                    <div className="col-md-4">
                                        <div class="row mb-3">
                                            <label
                                                for="milage"
                                                class="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Milage
                                            </label>
                                            <div class="col-sm-8">
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    id="milage"
                                                    placeholder="Milage"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="row mb-3">
                                            <label
                                                for="engine"
                                                class="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Engine
                                            </label>
                                            <div class="col-sm-8">
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    id="engine"
                                                    placeholder="Engine type"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="row mb-3">
                                            <label
                                                for="fuel-type"
                                                class="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Fuel Type
                                            </label>
                                            <div class="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    name=""
                                                    id=""
                                                >
                                                    <option value="">
                                                        Select fuel type
                                                    </option>
                                                    <option value="">
                                                        Diesel
                                                    </option>
                                                    <option value="">
                                                        Electric
                                                    </option>
                                                    <option value="">
                                                        Ethanol
                                                    </option>
                                                    <option value="">
                                                        Fuel
                                                    </option>
                                                    <option value="">
                                                        Gasoline
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="row mb-3">
                                            <label
                                                for="transmission"
                                                class="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Transmission
                                            </label>
                                            <div class="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    name=""
                                                    id=""
                                                >
                                                    <option value="">
                                                        Transmission
                                                    </option>
                                                    <option value="">
                                                        Manual
                                                    </option>
                                                    <option value="">
                                                        Automatic
                                                    </option>
                                                    <option value="">
                                                        Semi-Automatic
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="row mb-3">
                                            <label
                                                for="color"
                                                class="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Color
                                            </label>
                                            <div class="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    name=""
                                                    id=""
                                                >
                                                    <option value="">
                                                        Interrior Color
                                                    </option>
                                                    <option value="">
                                                        Grey
                                                    </option>
                                                    <option value="">
                                                        Brown
                                                    </option>
                                                    <option value="">
                                                        Jet-Black
                                                    </option>
                                                    <option value="">
                                                        Jet-Red
                                                    </option>
                                                    <option value="">
                                                        Beige
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="row mb-3">
                                            <label
                                                for="stock"
                                                class="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Stock*
                                            </label>
                                            <div class="col-sm-8">
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    id="stock"
                                                    placeholder="Stock*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-img-price mt-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h5>Upload Image & Set Asking Price*($)</h5>
                                    <h5 style={{ color: "#1BC744" }}>Step 2</h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="mb-3">
                                            <label
                                                for="img-url"
                                                class="form-label"
                                            >
                                                Image Url*
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="img-url"
                                                placeholder="Enter Image url"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="mb-3">
                                            <label
                                                for="regular-price"
                                                class="form-label"
                                            >
                                                Regular Price*($)
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="regular-price"
                                                placeholder="Enter Regular Price"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="mb-3">
                                            <label
                                                for="normal-price"
                                                class="form-label"
                                            >
                                                Regular/Sell Price*($)
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="normal-price"
                                                placeholder="Enter Selling Price"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-note mt-4">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4>Product Note:</h4>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="4"
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                    <div className="col-md-4">
                                        <h4>Ready For Sale: </h4>
                                        <input
                                            type="submit"
                                            value="ADD STOCK FOR SALE"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItem;
