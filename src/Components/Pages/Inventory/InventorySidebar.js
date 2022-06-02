import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InventorySidebar = () => {
    const [car, setCar] = useState({
        type: "",
        make: "",
        model: "",
        color: "",
        transmission: "",
        fuel: "",
    });
    const [refetch, setRefetch] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
        setRefetch(true);
    };
    useEffect(() => {
        const { type, make, model, color, transmission, fuel } = car;
        if (refetch) {
            navigate(
                `/inventory?type=${type}&make=${make}&model=${model}&color=${color}&transmission=${transmission}&fuel=${fuel}`
            );
            setRefetch(false);
        }
    }, [car, navigate, refetch]);
    return (
        <div className="sidebar p-4">
            <h6 className="mb-3 text-light">SEARCH OPTIONS</h6>
            <div>
                <select name="make" id="" onChange={handleChange}>
                    <option value="">Select Make</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="kia">KIA</option>
                    <option value="bently">Bently</option>
                    <option value="bmw">BMW</option>
                    <option value="ford">Ford</option>
                    <option value="acura">Acura</option>
                </select>
                <select name="type" id="" onChange={handleChange}>
                    <option value="">Select Types</option>
                    <option value="convertible">Convertible</option>
                    <option value="pickups">Pickups</option>
                    <option value="minivan">Minivan</option>
                    <option value="sedan">Sedan</option>
                    <option value="sports">Sports</option>
                    <option value="suv">SUV</option>
                </select>
                <input
                    type="text"
                    name="model"
                    className="form-control mb-3"
                    id=""
                    placeholder="Enter model"
                    onChange={handleChange}
                />
                <select className="" name="fuel" id="" onChange={handleChange}>
                    <option value="">Select fuel type</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="ethanol">Ethanol</option>
                    <option value="fuel">Fuel</option>
                    <option value="gasolin">Gasoline</option>
                </select>
                <select
                    className=""
                    name="transmission"
                    id=""
                    onChange={handleChange}
                >
                    <option value="">Transmission</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                    <option value="semi-automatic">Semi-Automatic</option>
                </select>
                <select className="" name="color" onChange={handleChange} id="">
                    <option value="">Interrior Color</option>
                    <option value="grey">Grey</option>
                    <option value="brown">Brown</option>
                    <option value="jet-black">Jet-Black</option>
                    <option value="jet-red">Jet-Red</option>
                    <option value="beige">Beige</option>
                </select>
            </div>
        </div>
    );
};
export default InventorySidebar;
