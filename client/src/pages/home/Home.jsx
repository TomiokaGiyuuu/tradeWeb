import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Products from "../products/Products";
import './home.css'
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Products/>
            </div>
        </div>
    );
};

export default Home;