import React from 'react'

function Hero() {
    return ( 
        <div className=" conatiner mt-5 p-5 border-bottom" style={{marginLeft:"6rem"}}>
            <div className='row text-center'>
                <h1 className='mb-2 p-3' style={{margin:"0 auto"}}>Zerodha Products</h1>
                <h4 >Sleek, modern, and intuitive trading platforms</h4>
                <p className='p-3 mb-5'>Check out our <a href="">investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
           </div>

        </div>
     );
}

export default Hero;