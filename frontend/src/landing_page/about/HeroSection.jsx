import React from "react";

function HeroSection() {
  return (
    <div className="container p-5">
      <div className="row" style={{marginLeft:"8rem"}}>
        <h1 style={{ fontSize: "2rem" ,lineHeight:"3rem"}} className="p-5 text-center mb-5">
          We pioneered the discount broking model in India.<br></br>
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row border-top p-5 mt-5 " style={{lineHeight:"2rem",fontSize:"1.1rem",marginLeft:"8rem"}}>
        <div className="col-6 mt-5">
             <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

             </p>
             <p>
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
             </p>
             <p>
                Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
             </p>
        </div>
        <div className="col-6 mt-5">
            <p>
                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
            </p>
            <p>
               <a href="">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
            </p>
            <p>
                And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
            </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
