import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bghold = ({element}) => {
  const navigate = useNavigate();
  return (
    <div>
        <div className='detail_section'>
      <div className='detailbg'  >
        <img src={element.src} />
      </div>
      <div className='detail-back-container' onClick={()=>navigate(-1)}>
        <div className='row'>
          <div className='col-6'>
            <div className='detail-back'>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          </div>
          <div className='col-6 detail-b'>
            <p>Back</p>
          </div>
        </div>
      
      
      </div>
      <div className='detail-overlay ps-5'>
        <div className='detail-overlay-text ps-xl-5 '>
        <p className='mb-1'>{element.date}</p>
        <p className='mb-1'>{element.subhead}</p>
        <h1 className='mb-3'>{element.head}</h1>
        <p>We bring you creative home design products that work together beautifully to form inspired living spaces. Get thoughtful home interior design elements that add real and lasting value to your interiors!</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Bghold