import React from "react";
import "./components/Footer.css";
import "./App.css";
import Aboutp from "./Aboutp.js";
import Home from "./Home.js";
import Team from "./Team.js";
import Events from "./Events";
import Navbar  from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Teamem from "./components/Teamem";
import Footer from "./components/Footer";
import Navtemp from "./components/Navtemp";
import {Route,Link} from "react-router-dom";


function App() {
  return (
    <div>
      
      {/* <Navbar/> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/aboutp" component={Aboutp} />
      <Route exact path="/events" component={Events} />
    </div>
  );
}

export default App;
