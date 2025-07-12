import React from 'react'

function NotFound() {
    return ( 
        <div className=" conatiner  text-center "
            style={{ height: '50vh' }}>
            <div className='row text-center'>
                <h2 className='mb-2 mt-5 p-3' style={{margin:"0 auto"}}>404 Not Found</h2>
                <p className='p-3'>The page you are looking for does'nt exist.</p>
                
           </div>

        </div>
     );
}

export default NotFound;