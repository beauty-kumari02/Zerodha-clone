import React from "react";

function Universe() {
  return (
    <div className="container text-center mb-5">
      <div className="row mt-5">
        <h5>
          Want to know more about our technology stack? Check out the
          <a href="">Zerodha.tech </a>blog.
        </h5>
        <h2 className="mt-5 p-4">The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      <div className="row">
      <div className="col-4 text-small text-muted mt-5">
        <img src="media/zerodhaFundhouse.png" className="mb-3" style={{width:"50%"}}></img>
        <p>Our asset management venture  <br></br>that is creating simple and transparent index <br></br>funds to help you save for your goals.</p>
      </div>
       <div className="col-4 text-small text-muted mt-5">
        <img src="media/sensibullLogo.svg" className="mb-3 mt-3" style={{width:"60%"}}></img>
        <p>Options trading platform that lets you  <br></br>create strategies, analyze positions, and examine  <br></br>data points like open interest, FII/DII, and more.</p>
      </div>
       <div className="col-4 text-small text-muted mt-5">
        <img src="media/tijori.svg" className="mb-3 " style={{width:"40%"}}></img>
        <p>Investment research platform <br></br>that offers detailed insights on stocks,  <br></br>sectors, supply chains, and more.</p>
      </div>
      </div>
      <div className="row">
       <div className="col-4 text-small text-muted mt-5">
        <img src="media/streakLogo.png" className="mb-3" style={{width:"50%"}}></img>
        <p>Systematic trading platform  <br></br>that allows you to create and backtest <br></br>strategies without coding.</p>
      </div>
       <div className="col-4 text-small text-muted mt-5">
        <img src="media/smallcaseLogo.png" className="mb-3"></img>
        <p>Thematic investing platform <br></br>that helps you invest in diversified <br></br>baskets of stocks on ETFs.</p>
      </div>
       <div className="col-4 text-small text-muted mt-5">
        <img src="media/dittoLogo.png" className="mb-3"  style={{width:"30%"}}></img>
        <p>Personalized advice on life  <br></br>and health insurance. No spam  <br></br>and no mis-selling.</p>
      </div>
      </div>
      <button className='btn btn-primary fs-5 p-2 mt-5 mb-5' style={{width:"15% ",margin:"0 auto"}}>Sign up for free</button>
    </div>
  );
}

export default Universe;
