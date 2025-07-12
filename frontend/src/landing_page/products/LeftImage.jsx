import React from 'react'

function LeftImage({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (  

        <div class='container p-5'>
          <div class="row mt-5" style={{marginLeft:"4rem"}}>
            <div class="col-6">
              <img src={imageURL} />
            </div>
            <div class="col-6 mt-5" >
                 <h2 style={{marginLeft:"4rem"}}>{productName}</h2>
                 <p style={{marginLeft:"4rem"}}>{productDescription}</p>
                 <div>
                    <a href="{tryDemo}" style={{marginLeft:"4rem"}}>Try Demo<i class="fa-solid fa-arrow-right-long" ></i></a>
                    <a href="{learnMore}" style={{marginLeft:"4rem"}}>Learn More<i class="fa-solid fa-arrow-right-long" ></i></a>
                 </div>
                 <div className='mt-3'>
                   <a href={googlePlay} style={{marginLeft:"4rem"}}><img src="media/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"4rem" }}><img src="media/appstore-badge.svg"/></a>
                 </div>
            </div>
          </div>
        </div>
    );
}

export default LeftImage;