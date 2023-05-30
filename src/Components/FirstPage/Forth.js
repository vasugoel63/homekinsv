import React from 'react'

const data = JSON.parse(localStorage.getItem('list2'));
const text =  JSON.parse(localStorage.getItem('textArea'));
const head = JSON.parse(localStorage.getItem('secondhead'));
const src = JSON.parse(localStorage.getItem('img'));


const Forth = () => {
  return (
   <>
   <div className='forth-section'>
    <div className='container'>
        <div className='row ps-lg-4 ps-3 ps-xl-0'>
            <div className='col-sm-6 mt-5'>
                <div className='forth-img'>
                
                    <img className="intimg img-fluid" src={src} alt='forth'></img>
                </div>
            </div>
            <div className='col-sm-6 text-col pt-5'>
            <h3 className='pb-3'>{head}</h3>
            <p> {text}</p>
            <ul>
                {data.map((ele)=>{
                    return(<>
                <li className='mb-3'> <span><i class="fa-solid fa-chevron-right"></i></span> {ele.Name}</li>
                    
                    </>)
                })}
                {/* <li className='mb-3'> <span><i class="fa-solid fa-chevron-right"></i></span>Modular Kitchen Designs</li>
                <li className='mb-3'> <span><i class="fa-solid fa-chevron-right"></i></span>Wardrobe Design Interior</li>
                <li className='mb-3'> <span><i class="fa-solid fa-chevron-right"></i></span>Space Saving Furniture</li> */}
            </ul>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Forth;