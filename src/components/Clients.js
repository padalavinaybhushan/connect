import React from "react";

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="client">
              <h1>40+</h1>
              <p>Board Members</p>
            </div>
          </div>
          <div className="col-4">
            <div className="client">
              <h1>20+</h1>
              <p>Events</p>
            </div>
          </div>
          <div className="col-4">
            <div className="client">
              <h1>10+</h1>
              <p>Contests</p>
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
