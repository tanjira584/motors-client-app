import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Banner from "./Banner/Banner";
import BlogSection from "./BlogSection/BlogSection";
import BrowseType from "./BrowseType/BrowseType";
import Counter from "./Counter/Counter";
import HomeItem from "./HomeItem/HomeItem";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BrowseType></BrowseType>
            <HomeItem></HomeItem>
            <Counter></Counter>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
