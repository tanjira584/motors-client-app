import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Auth from "./Components/Pages/Auth/Auth";
import InventoryDetails from "./Components/Pages/Inventory/InventoryDetails";
import Inventory from "./Components/Pages/Inventory/Inventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/RequireAuth";
import Blogs from "./Components/Pages/Blogs/Blogs";
import AddItem from "./Components/Pages/AddItem/AddItem";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Auth></Auth>}></Route>
                <Route path="/add-item" element={<AddItem></AddItem>}></Route>
                <Route
                    path="/blogs"
                    element={
                        <RequireAuth>
                            <Blogs></Blogs>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/inventory"
                    element={
                        <RequireAuth>
                            <Inventory></Inventory>
                        </RequireAuth>
                    }
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
