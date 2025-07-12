import React from "react";
function Pricing() {
  return (
    <div className="container mt-5 p-2 ">
      <div className="row p-2">
        <div className="col-1"></div>
        <div className="col-5 p-2">
          <h1 className="fs-2 mt-2 mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See Pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-6">
          <img
            src="media/unbeatable-pricing.png"
            style={{ width: "95%" }}
            className="mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
