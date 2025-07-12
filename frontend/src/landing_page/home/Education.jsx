import React from 'react'
function Education() {
    return ( 
       <div className='container mt-5 p-2 mb-5 ' >
        <div className='row p-2'>
            
             <div className='col-6'>
              <img src='media/education.svg' style={{width:'70%'}} className='mt-2'/>
             </div>
            <div className='col-6 p-2'>
               <h1 className='fs-2 mt-5 mb-4'>Free and open market education</h1>
               <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
               <a href=''>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
               <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
               <a href=''>TradingQ%A<i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
           
        </div>
       </div>
    );
}

export default Education;