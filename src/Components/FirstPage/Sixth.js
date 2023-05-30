import React, { Component, useState } from 'react'
import $ from 'jquery';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { imgs1 } from '../Pages/DB';
// import { imgs2 } from '../Pages/DB';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Sixth = ()=> {
  const imgs1 = JSON.parse(localStorage.getItem('images1'));
  const imgs2 = JSON.parse(localStorage.getItem('images2'));
  
//  const[imgs1, setImgs1] = useState(imgs1);
//  const [imgs2, setImgs2] = useState(imgs2);
  return (
  
    <>
    <section className='sixth-section'>
    <div className='container ps-5 pt-2 pb-4'>
        <Swiper className='ps-2'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0:{
          // width:320,
          slidesPerView: 2,
        // pagination={true },

        },
        
        600: {
          // width: 500,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        1024: {
          // width: 768,
          slidesPerView: 4,
        //   pagination={false},

        },
      }}
    >
    
        {imgs1.map((ele)=>{
          return(
            <>
              <SwiperSlide >
                <img src={ele} alt="img2" class="rounded img-fluid"/>
              </SwiperSlide>
            </>
          )
        })}  
    </Swiper>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}

      breakpoints={{
        0:{
          // width:320,
          slidesPerView: 2,
        // pagination={true },

        },
        
        600: {
          // width: 500,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        1024: {
          // width: 768,
          slidesPerView: 4,
        //   pagination={false},

        },
      }}
    >

      {/* </SwiperSlide> */}
      {imgs2.map((ele)=>{
          return(
            <>
              <SwiperSlide >
                <img src={ele} alt="img2" class="rounded img-fluid"/>
              </SwiperSlide>
            </>
          )
        })}
      {/* <SwiperSlide>
      <img src="http://homekins.on3-step.com/img/ourclients/4.png" alt="img2" class="rounded img-fluid"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://homekins.on3-step.com/img/ourclients/1.png" alt="img2" class="rounded img-fluid"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://homekins.on3-step.com/img/ourclients/2.png" alt="img2" class="rounded img-fluid"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://homekins.on3-step.com/img/ourclients/5.png" alt="img2" class="rounded img-fluid"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://homekins.on3-step.com/img/ourclients/3.png" alt="img2" class="rounded img-fluid"/>
      </SwiperSlide> */}
      
    </Swiper>
    </div>
    </section>
  </>
  )
  }


export default Sixth;