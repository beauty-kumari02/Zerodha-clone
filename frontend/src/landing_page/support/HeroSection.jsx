import React from 'react'
import "./HeroSection.css";

function HeroSection() {
    return (
        <section className='container-fluid' id="supportHero">
          <div className='p-3' id="supportWrapper">
               <h4>Support Portal</h4>
               <a href="">Track tickets</a>
          </div>
           <div className='row p-5'>
             <div className='col-6 p-5 ' id="outer">
                <h1 className='fs-3'style={{color:"white"}}>Search for an answer or browse help topics to create a ticket</h1>
                <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="E.g. How do I activate F&O, why is my order getting rejected..."
                />
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </div>


                  <a href=""className="d-inline-block me-3 mb-2">Track account opening</a>
                  <a href=""className="d-inline-block me-3 mb-2"> Track segment activation</a>
                  <a href=""className="d-inline-block me-3 mb-2"> Intraday margins</a>
                  <a href=""className="d-inline-block me-3 mb-2">Kite user manual</a>
             </div>
             <div className='col-6 p-5'id="inner">
                <h1 className='fs-3'style={{color:"white"}}>Featured</h1>
                <ol>
                <li>
                  <a href="">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>

                  </li>
                
                <li><a href="">Revision in expiry day of Index and Stock derivatives contracts</a>

                </li>
                </ol>
 
              </div>
          </div>
        </section>
      );
}

export default HeroSection;