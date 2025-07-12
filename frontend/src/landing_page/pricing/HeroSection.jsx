import React from "react";

function HeroSection() {
  return (
    <div className="container p-5">
      <div className="row mb-5" style={{ marginLeft: "8rem" }}>
        <h1 className="pt-5 text-center">Charges</h1>
        <p className="text-muted text-center pt-2 ">
          List of all charges and taxes
        </p>
      </div>
      <div className="row d-flex justify-content-center flex-wrap text-center mt-5 ">
        <div className="col-1"></div>
        <div className="col-4 ">
          <img
            src="media/pricingEquity.svg"
            className="mb-4"
            style={{ width: "80%" }}
          />
          <h3 className="mb-4">Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE,<br></br> BSE), are absolutely free — ₹
            0<br></br> brokerage.
          </p>
        </div>
        <div className="col-4" >
          <img
            src="media/intradayTrades.svg"
            className="mb-4"
            style={{ width: "80%" }}
          />
          <h3 className="mb-4">Free equity delivery</h3>
          <p>
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-3 ">
          <img
            src="media/pricingEquity.svg"
            className="mb-5"
            style={{ width: "100%" }}
          />
          <h3 className="mb-4">Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
