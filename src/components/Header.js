import React from 'react';
import Navtemp from "./Navtemp";
import Model from "./Model";

const Header = () => {
  
  return (
    <div className="banner">
      <Navtemp/>
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3 className="header-back-grd">SNIST Innovation.</h3>
            <h3 className="header-back-grd2"><u className='u'>Connection </u> between farmer and customer.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <Model/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
