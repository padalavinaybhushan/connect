import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "./components/Footer";


function Home(){
    return(
        <div>
            <Header />
            <div class = "marquee-class"><marquee behavior="alternate">Bounce back and forth</marquee></div>
            
            <About />
            <Shop />
            <Menu />
            <Clients />
            <Prices />
            <Footer/>
        </div>
    )
}

export default Home;
