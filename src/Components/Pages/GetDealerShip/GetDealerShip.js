import React from "react";
import Header from "../../Share/Header/Header";
import Footer from "../../Share/Footer/Footer";

const GetDealerShip = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5">
                <h2 className="text-center">Resigter as a Dealership</h2>
                <div className="w-50 mx-auto">
                    <form className="border p-5">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Dealer Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="leader-logo" className="form-label">
                                Dealer Logo Url
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="dealer-logo"
                                placeholder="Logo url"
                            />
                        </div>
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
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="whatsup-link"
                                className="form-label"
                            >
                                Whatsup Link
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="whatsup-link"
                                placeholder="Whatsup link"
                            />
                        </div>
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
                                placeholder="Give Rating"
                            />
                        </div>
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
                                placeholder="Dealer Location"
                            />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default GetDealerShip;
