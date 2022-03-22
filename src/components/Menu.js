import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/eventsbg1.png" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>CONNECT</h3>
            <h1>EVENTS</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="about__btn">
            <Link to="/Events"> <a href="" className="btn btn-smart">
                VIEW MORE
              </a> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
