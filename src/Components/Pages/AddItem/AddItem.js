import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./AddItem.css";

const AddItem = () => {
    const [item, setItem] = useState({
        condition: "",
        make: "",
        type: "",
        model: "",
        milage: "",
        engine: "",
        fuelType: "",
        transmission: "",
        color: "",
        stock: 0,
        img: "",
        regular: 0,
        normal: 0,
        notes: "",
        dName: "",
        dLogo: "",
        dLocation: "",
        dPhone: "",
        dWhatsup: "",
        dRating: 0,
    });

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        fetch("http://localhost:5000/motors", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Item Added successfully");
                e.target.reset();
                setItem({
                    condition: "",
                    make: "",
                    type: "",
                    model: "",
                    milage: 0,
                    engine: "",
                    fuelType: "",
                    transmission: "",
                    color: "",
                    stock: 0,
                    img: "",
                    regular: 0,
                    normal: 0,
                    notes: "",
                });
            })
            .catch((e) => {
                console.log(e);
            });
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
                                        <div className="input-box">
                                            <h6>Conditions*</h6>
                                            <select
                                                name="condition"
                                                id=""
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select Condition
                                                </option>
                                                <option value="new">New</option>
                                                <option value="used">
                                                    Used
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="input-box">
                                            <h6>Makes*</h6>
                                            <select
                                                name="make"
                                                id=""
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select Make
                                                </option>
                                                <option value="bentley">
                                                    Bentley
                                                </option>
                                                <option value="kia">KIA</option>
                                                <option value="hyundai">
                                                    Hyundai
                                                </option>
                                                <option value="ford">
                                                    Ford
                                                </option>
                                                <option value="bmw">BMW</option>
                                                <option value="acura">
                                                    ACURA
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="input-box">
                                            <h6>Types*</h6>
                                            <select
                                                name="type"
                                                id=""
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select Types
                                                </option>
                                                <option value="convertible">
                                                    Convertible
                                                </option>
                                                <option value="pickups">
                                                    Pickups
                                                </option>
                                                <option value="minivan">
                                                    Minivan
                                                </option>
                                                <option value="sedan">
                                                    Sedan
                                                </option>
                                                <option value="sports">
                                                    Sports
                                                </option>
                                                <option value="suv">SUV</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="input-box">
                                            <h6>Select Models*</h6>
                                            <input
                                                type="text"
                                                name="model"
                                                id=""
                                                placeholder="Enter model"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="optional-input mt-4">
                                <div className="row gx-5">
                                    <div className="col-md-4">
                                        <div className="row mb-3">
                                            <label
                                                htmlFor="milage"
                                                className="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Milage
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="milage"
                                                    name="milage"
                                                    placeholder="Milage"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row mb-3">
                                            <label
                                                htmlFor="engine"
                                                className="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Engine
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="engine"
                                                    name="engine"
                                                    placeholder="Engine type"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row mb-3">
                                            <label
                                                htmlFor="fuel-type"
                                                className="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Fuel Type
                                            </label>
                                            <div className="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    name="fuelType"
                                                    id=""
                                                    onChange={handleChange}
                                                >
                                                    <option value="">
                                                        Select fuel type
                                                    </option>
                                                    <option value="diesel">
                                                        Diesel
                                                    </option>
                                                    <option value="electric">
                                                        Electric
                                                    </option>
                                                    <option value="ethanol">
                                                        Ethanol
                                                    </option>
                                                    <option value="fuel">
                                                        Fuel
                                                    </option>
                                                    <option value="gasoline">
                                                        Gasoline
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row mb-3">
                                            <label
                                                htmlFor="transmission"
                                                className="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Transmission
                                            </label>
                                            <div className="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    name="transmission"
                                                    id=""
                                                    onChange={handleChange}
                                                >
                                                    <option value="">
                                                        Transmission
                                                    </option>
                                                    <option value="manual">
                                                        Manual
                                                    </option>
                                                    <option value="automatic">
                                                        Automatic
                                                    </option>
                                                    <option value="semi-automatic">
                                                        Semi-Automatic
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row mb-3">
                                            <label
                                                htmlFor="color"
                                                className="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Color
                                            </label>
                                            <div className="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    name="color"
                                                    id=""
                                                    onChange={handleChange}
                                                >
                                                    <option value="">
                                                        Interrior Color
                                                    </option>
                                                    <option value="grey">
                                                        Grey
                                                    </option>
                                                    <option value="brown">
                                                        Brown
                                                    </option>
                                                    <option value="jet-black">
                                                        Jet-Black
                                                    </option>
                                                    <option value="jet-red">
                                                        Jet-Red
                                                    </option>
                                                    <option value="beige">
                                                        Beige
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row mb-3">
                                            <label
                                                htmlFor="stock"
                                                className="col-sm-4 col-form-label"
                                            >
                                                <FontAwesomeIcon
                                                    className="icon me-2"
                                                    icon={faRoad}
                                                ></FontAwesomeIcon>
                                                Stock*
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="stock"
                                                    name="stock"
                                                    placeholder="Stock*"
                                                    onChange={handleChange}
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
                                        <div className="mb-3">
                                            <label
                                                htmlFor="img-url"
                                                className="form-label"
                                            >
                                                Image Url*
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="img-url"
                                                name="img"
                                                placeholder="Enter Image url"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="regular-price"
                                                className="form-label"
                                            >
                                                Regular Price*($)
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="regular-price"
                                                name="regular"
                                                placeholder="Enter Regular Price"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="normal-price"
                                                className="form-label"
                                            >
                                                Regular/Sell Price*($)
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="normal-price"
                                                name="normal"
                                                placeholder="Enter Selling Price"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dealer-form">
                                <div className="d-flex align-items-center justify-content-between py-4">
                                    <h5>Dealer Information</h5>
                                    <h5>
                                        <span
                                            style={{
                                                color: "rgb(27, 199, 68)",
                                            }}
                                        >
                                            Step 3
                                        </span>
                                    </h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="dealer-name"
                                                className="form-label"
                                            >
                                                Dealer Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dealer-name"
                                                placeholder="Enter Dealer Name"
                                                name="dName"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="dealer-phone"
                                                className="form-label"
                                            >
                                                Dealer Phone
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dealer-phone"
                                                placeholder="Enter Phone Number"
                                                name="dPhone"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="dealer-logo"
                                                className="form-label"
                                            >
                                                Dealer Logo URL
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dealer-logo"
                                                placeholder="Enter Logo Url"
                                                name="dLogo"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="dealer-rating"
                                                className="form-label"
                                            >
                                                Dealer Rating
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="dealer-rating"
                                                placeholder="Enter Rating"
                                                name="dRating"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="dealer-whatsup-link"
                                                className="form-label"
                                            >
                                                Dealer Whatsup Link
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dealer-whatsup-link"
                                                placeholder="Enter Whatsup Link"
                                                name="dWhatsup"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="dealer-location"
                                                className="form-label"
                                            >
                                                Dealer Location
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dealer-location"
                                                name="dLocation"
                                                placeholder="Enter Dealer Location"
                                                onChange={handleChange}
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
                                            name="notes"
                                            id=""
                                            cols="30"
                                            rows="4"
                                            className="form-control"
                                            onChange={handleChange}
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
