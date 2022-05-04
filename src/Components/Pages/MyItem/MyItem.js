import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import InventoryItem from "../Inventory/InventoryItem";
import InventorySidebar from "../Inventory/InventorySidebar";

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/my-items?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user]);
    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure want to delete this item?"
        );
        if (proceed) {
            const uri = `http://localhost:5000/motor/${id}`;
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
                <div className="row">
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
                        <div className="all-items">
                            {items.map((item) => (
                                <InventoryItem
                                    key={item._id}
                                    motor={item}
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

export default MyItem;
