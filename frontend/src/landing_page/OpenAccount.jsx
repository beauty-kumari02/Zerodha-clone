import React from 'react'

function OpenAccount() {
    return ( 
        <div className=" conatiner  text-center "
            style={{ height: '50vh' }}>
            <div className='row text-center'>
                <h2 className='mb-2 mt-5 p-3' style={{margin:"0 auto"}}>Open a Zerodha account</h2>
                <p className='p-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary fs-5 p-2' style={{width:"15% ",margin:"0 auto"}}>Sign up for free</button>
           </div>

        </div>
     );
}

export default OpenAccount;