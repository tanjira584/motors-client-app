import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import InventoryItem from "./InventoryItem";
import "./Inventory.css";
import InventorySidebar from "./InventorySidebar";

const Inventory = () => {
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <InventorySidebar></InventorySidebar>
                    </div>
                    <div className="col-md-9">
                        <h4>Manage Inventories</h4>
                        <hr />
                        <div className="all-items">
                            <InventoryItem></InventoryItem>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;
