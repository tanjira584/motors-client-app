import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import InventoryItem from "../Inventory/InventoryItem";
import InventorySidebar from "../Inventory/InventorySidebar";

const MyItem = () => {
    const [user, loading] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    /*--------------------GEt a JWT token-------------*/
    useEffect(() => {
        if (!loading) {
            fetch(
                `https://serene-chamber-17586.herokuapp.com/my-items?email=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setItems(data);
                });
        }
    }, [user, token, loading]);

    /*---------------Handle Delete single inventory--------------*/
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
                    const remain = items.filter((m) => m._id !== id);
                    setItems(remain);
                });
        }
    };
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5">
                <div className="row g-5">
                    <div className="col-md-3">
                        <InventorySidebar></InventorySidebar>
                    </div>
                    <div className="col-md-9">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>My Inventory Items</h4>
                            <button
                                className="add-item-btn"
                                onClick={() => navigate("/add-item")}
                            >
                                Add New Item
                            </button>
                        </div>
                        <hr />
                        {loading ? (
                            <div className="spin">
                                <div
                                    className="spinner-border text-danger"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="all-items">
                                {items.length > 0 ? (
                                    items.map((item) => (
                                        <InventoryItem
                                            key={item._id}
                                            motor={item}
                                            handleDelete={handleDelete}
                                        ></InventoryItem>
                                    ))
                                ) : (
                                    <p>You have not any Inventory..</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyItem;
