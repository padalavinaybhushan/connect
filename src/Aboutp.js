import React from "react";
import Navbar  from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import AboutInfo from "./components/AboutInfo";
import Aboutwtobut from "./components/Aboutwtobut";


function Aboutp(){
    return(
        <div>
            <Header/>
            <Aboutwtobut/>
            <AboutInfo/>
            <Footer/>
        </div>
    )
}

export default Aboutp;