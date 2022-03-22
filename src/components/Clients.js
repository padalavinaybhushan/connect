import React from "react";

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="client">
              <h1>40+</h1>
              <p>Cities Integrated</p>
            </div>
          </div>
          <div className="col-4">
            <div className="client">
              <h1>2000+</h1>
              <p>Farmers</p>
            </div>
          </div>
          <div className="col-4">
            <div className="client">
              <h1>10,000+</h1>
              <p>Solutions</p>
            </div>
          </div>
          {/* <div className="col-3">
            <div className="client">
              <h1>2031</h1>
              <p>Delivery</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Clients;
