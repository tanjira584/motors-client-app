import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Auth from "./Components/Pages/Auth/Auth";
import InventoryDetails from "./Components/Pages/Inventory/InventoryDetails";
import Inventory from "./Components/Pages/Inventory/Inventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Auth></Auth>}></Route>
                <Route
                    path="/inventory"
                    element={<Inventory></Inventory>}
                ></Route>
                <Route
                    path="/inventory/:id"
                    element={<InventoryDetails></InventoryDetails>}
                ></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
