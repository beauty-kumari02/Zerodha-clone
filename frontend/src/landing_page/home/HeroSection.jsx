import React from 'react'

function HeroSection() {
    return ( 
         <div
            className=" conatiner d-flex justify-content-center align-items-center text-center mb-5"
            style={{ height: '100vh' }}>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt="Hero Image" className='mb-5 img-fluid ' style={{ maxWidth: '50%', display: 'block', margin: '0 auto' }}></img>
                <h1 className='mb-2' style={{margin:"0 auto"}}>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary fs-5 p-2' style={{width:"15% ",margin:"0 auto"}}>Sign up for free</button>
           </div>

        </div>
     );
}

export default HeroSection;