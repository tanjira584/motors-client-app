import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import InventoryItem from "./InventoryItem";
import "./Inventory.css";
import InventorySidebar from "./InventorySidebar";
import useMotors from "../../../hooks/useMotors";
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";

const Inventory = () => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const make = new URLSearchParams(search).get("make");
    const type = new URLSearchParams(search).get("type");
    const price = new URLSearchParams(search).get("price");
    const model = new URLSearchParams(search).get("model");
    const transmission = new URLSearchParams(search).get("transmission");
    const color = new URLSearchParams(search).get("color");
    const fuel = new URLSearchParams(search).get("fuel");
    console.log(make, type, price, model, transmission, color, fuel);
    const [motors, , setMotors] = useMotors({
        make,
        type,
        price,
        model,
        transmission,
        color,
        fuel,
    });

    /*-----------Handle Delete Single Item----------*/
    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure want to delete this item?"
        );
        if (proceed) {
            const uri = `https://serene-chamber-17586.herokuapp.com/motor/${id}`;
            fetch(uri, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((date) => {
                    alert("Deleted Successfully");
                    const remain = motors.filter((m) => m._id !== id);
                    setMotors(remain);
                });
        }
    };
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-3">
                        <InventorySidebar></InventorySidebar>
                    </div>
                    <div className="col-md-9">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>Manage Inventories</h4>
                            <button
                                className="add-item-btn"
                                onClick={() => navigate("/add-item")}
                            >
                                Add New Item
                            </button>
                        </div>
                        <hr />
                        <div className="all-items">
                            {motors.map((motor) => (
                                <InventoryItem
                                    key={motor._id}
                                    motor={motor}
                                    handleDelete={handleDelete}
                                ></InventoryItem>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;
