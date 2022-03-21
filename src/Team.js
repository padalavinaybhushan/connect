import React from "react";
import Navbar  from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import Teamem from "./components/Teamem";

function Team(){
    return(
        <div>
            <Header/>
            <Prices/>
            <Teamem/>
            <Footer/>
        </div>
    )
}

export default Team;