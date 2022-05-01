import React from "react";

const InventorySidebar = () => {
    return (
        <div className="sidebar p-4">
            <h6 className="mb-3 text-light">SEARCH OPTIONS</h6>
            <div>
                <select name="" id="">
                    <option value="">Select Make</option>
                    <option value="">Bentley</option>
                    <option value="">KIA</option>
                    <option value="">Hyundai</option>
                    <option value="">Ford</option>
                    <option value="">BMW</option>
                    <option value="">ACURA</option>
                </select>
                <select name="" id="">
                    <option value="">Select Types</option>
                    <option value="">Convertible</option>
                    <option value="">Pickups</option>
                    <option value="">Minivan</option>
                    <option value="">Sedan</option>
                    <option value="">Sports</option>
                    <option value="">SUV</option>
                </select>
                <input
                    type="text"
                    name="model"
                    className="form-control mb-3"
                    id=""
                    placeholder="Enter model"
                />
                <select className="" name="" id="">
                    <option value="">Select fuel type</option>
                    <option value="">Diesel</option>
                    <option value="">Electric</option>
                    <option value="">Ethanol</option>
                    <option value="">Fuel</option>
                    <option value="">Gasoline</option>
                </select>
                <select className="" name="" id="">
                    <option value="">Transmission</option>
                    <option value="">Manual</option>
                    <option value="">Automatic</option>
                    <option value="">Semi-Automatic</option>
                </select>
                <select className="l" name="" id="">
                    <option value="">Interrior Color</option>
                    <option value="">Grey</option>
                    <option value="">Brown</option>
                    <option value="">Jet-Black</option>
                    <option value="">Jet-Red</option>
                    <option value="">Beige</option>
                </select>
            </div>
        </div>
    );
};
export default InventorySidebar;
