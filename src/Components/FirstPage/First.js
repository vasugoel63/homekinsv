import React from 'react'
// import pic1 from '/Components/images/bg-1.jpg';
import pic1 from '../../images/bg-1.jpg'
// import pic1 from '../images/bg-1.jpg';
// import pic1 from '../images/bg-1.jpg';
import pic2 from '../../images/bg-2.jpg';
import pic3 from '../../images/bg-3.jpg';
// import svg from './less'
const fdata = JSON.parse(localStorage.getItem('first'));


const First = () => {
  return (
    <>
    <div id="demo" className="carousel slide vertical" data-bs-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-item active">
              <img src="http://homekins.on3-step.com/img/bg-3.jpg" alt="pic-1" className="h-100 d-block w-100"/>
              <div class="carousel-caption">
              <h1>Homekins Design</h1>
              <h5>With precision</h5>
             <button className='btn'>More Detail</button>
        </div>
        </div>
        {fdata.map((ele)=>{
          return(
            <>
            <div className="carousel-item">
              <img src={ele.src} alt="pic-1" className="h-100 d-block w-100"/>
              <div class="carousel-caption">
              <h1>{ele.head}</h1>
              <h5>{ele.subhead}</h5>
             <button className='btn'>{ele.btn}</button>
        </div>
        </div>
            </>
          )
        })}
      
  {/* <div className="carousel-item item-2">
    <img src={pic2} alt="Chicago" class="h-100 d-block w-100"/>
    <div class="carousel-caption">
          <h1>Interior Expertise</h1>
          <h5>Stylish living</h5>
          <button className='btn'>More Detail</button>
        </div>
  </div>
  <div className="carousel-item item-3">
    <img src={pic3} alt="New York" class="h-100 d-block w-100"/>
    <div class="carousel-caption">
          <h1>Land of Residence</h1>
          {/* <h1>First slide label</h1> */}
          {/* <h5>According lifestyle</h5>
          <button className='btn'>More Detail</button>
        </div>
  </div>  */}
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"><svg
          fill="#FFFFFF"
          width="30px"
          height="30px"
          viewBox="-128 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </svg></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"><svg
          fill="#FFFFFF"
          width="30px"
          height="30px"
          viewBox="-128 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </svg></span>
</button>
</div>
    </>
  )
}

export default First

