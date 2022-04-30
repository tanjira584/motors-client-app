import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Banner from "./Banner/Banner";
import BrowseType from "./BrowseType/BrowseType";
import HomeItem from "./HomeItem/HomeItem";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BrowseType></BrowseType>
            <HomeItem></HomeItem>
            <div style={{ height: "500px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
