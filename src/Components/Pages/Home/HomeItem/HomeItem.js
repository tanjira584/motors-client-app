import React from "react";
import useMotors from "../../../../hooks/useMotors";
import "./HomeItem.css";
import Item from "./Item";

const HomeItem = () => {
    const [motors] = useMotors();
    return (
        <div className="">
            <div className="container py-5">
                <div className="section-info d-flex justify-content-between">
                    <div>
                        <h2>New/Used Cars</h2>
                    </div>
                    <div className="presentation">
                        <ul>
                            <li>Popular Items</li>
                            <li>Recent Items</li>
                            <li className="active">Featured Item</li>
                        </ul>
                    </div>
                </div>

                <div className="home-items py-5">
                    <div className="row g-5">
                        {motors.map((motor) => (
                            <div className="col-md-4" key={motor._id}>
                                <Item motor={motor}></Item>
                            </div>
                        ))}
                    </div>
                    <div className="show-all-btn text-center mt-5">
                        <button className="">Show All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;
