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
import GetDealerShip from "./Components/Pages/GetDealerShip/GetDealerShip";
import Dealers from "./Components/Pages/Dealers/Dealers";
import MyItem from "./Components/Pages/MyItem/MyItem";
import PageNotFound from "./Components/Pages/404/404";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Auth></Auth>}></Route>
                <Route path="/add-item" element={<AddItem></AddItem>}></Route>
                <Route path="/dealers" element={<Dealers></Dealers>}></Route>
                <Route path="/my-items" element={<MyItem></MyItem>}></Route>
                <Route
                    path="/add-dealer"
                    element={<GetDealerShip></GetDealerShip>}
                ></Route>
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
                <Route
                    path="/*"
                    element={<PageNotFound></PageNotFound>}
                ></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
