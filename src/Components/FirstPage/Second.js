import React from 'react'

const sdata = JSON.parse(localStorage.getItem('second'));
const Second = () => {
  return (
    <>
    <div className='second-section'>
    <div className='container'>
        <div className='row'>
          {sdata.map((ele)=>{
            return(
              <>
              <div className='col-md-6 col-lg listcol'>
                <div className='second-icon'>
                  <div className='row'>
                  <div className='col-5 d-flex justify-content-center'>
                  <i class={ele.iconlink}></i>
                  </div>
                  <div className='col-7'>
                  <span>{ele.name}</span>
                  </div>
                </div>
                </div>
              </div>
              </>
            )
          })}
            
            {/* <div className='col-md-6 col-lg-3'>
            <div className='second-icon'>
            <div className='row'>
                <div className='col-5 d-flex justify-content-center'>
                  <i class="fa-regular fa-calendar-days"></i>
                </div>
                <div className='col-7'>
                  <span>Get Consultant</span>
                </div>
              </div>

            </div>
            </div>
            <div className='col-lg-3 col-md-6'>
            <div className='second-icon'>
            <div className='row'>
                <div className='col-5 d-flex justify-content-center'>
                  {/* <i class="fa-regular fa-calendar-days"></i> */}
                  {/* <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div className='col-7'>
                  <span>Get Consultant</span>
                </div>
              </div>

            </div>
            </div>
            <div className='col-lg-3 col-md-6'>
            <div className='second-icon last-icon'>
            <div className='row'>
                <div className='col-5 d-flex justify-content-center'>
                  <i class="fa-solid fa-arrow-up-right-dots"></i>
                </div>
                <div className='col-7'>
                  <span>Get Consultant</span>
                </div>
              </div>
            </div>
            </div> */} 
        </div>
    
   
   
    
    </div>
    </div>
    </>
  )
}

export default Second