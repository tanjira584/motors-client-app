import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div style={{ height: "500px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
