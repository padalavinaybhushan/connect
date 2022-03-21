import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO <span className="Annoucement">CONNECTION </span></h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="about__btn">
            <Link to="/Aboutp"> <a href="" className="btn btn-smart">
                READ MORE
              </a> </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/about_farmer.jpeg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
