import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { fifthData } from '../Pages/DB';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Fifth = () => {
  const fdata = JSON.parse(localStorage.getItem('fifthdata'));
  const fhead = localStorage.getItem('fifthHead');
  return (
    <>
<section className='fifth-section px-5'>
    <div className='container'>
    <h2 className='mb-5 fw-bold'>{fhead}</h2>
    
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      // pagination={true }
      breakpoints={{
        0:{
          // width:320,
          slidesPerView: 1,
        },
        
        500: {
          // width: 500,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        600: {
          // width: 768,
          slidesPerView: 3,
        },
      }}
    >

      {fdata.map((ele)=>{
        return(
        <>
        <SwiperSlide className='imgslider'>
        <img src={ele.src} alt="img2" class="img-fluid"/>
        <div className='imgslider-text'>
        <h4 class="fw-bold mb-3">{ele.heading}</h4> 
        <p class="text-light texthidden">{ele.text} </p>
        </div>
        <div className="overlay w-100">
        </div>
        </SwiperSlide>
        </>
        )
      }
      )}
    </Swiper>
    </div>
</section>
    </>
  )
}

export default Fifth