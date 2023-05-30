import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Eight = () => {
  return (
    <>
    <section className='eight-section'>
    <div className='container'>
    <h2 className='mb-5 fw-bold'>Our Team</h2>
    
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
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
        }
      }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/team/img1.jpg" alt="img1" class="img-fluid"/>
        <div className='imgslider2-text'>
        <h4 class="fw-bold">Jhon Doe</h4> 
        <p>Co-Founder</p>
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <div className='icon'>
            <i class="fa-brands fa-facebook-f me-3"></i>
            <i class="fa-brands fa-twitter me-3" ></i>
            <i class="fa-brands fa-linkedin-in me-3"></i>    
        </div>  
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/team/img2.jpg" alt="img2" class="img-fluid"/>
        <div className='imgslider2-text'>
        <h4 class="fw-bold">Jhon Doe</h4> 
        <p>Co-Founder</p>
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <div className='icon'>
            <i class="fa-brands fa-facebook-f me-3"></i>
            <i class="fa-brands fa-twitter me-3" ></i>
            <i class="fa-brands fa-linkedin-in me-3"></i>    
        </div>  
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/team/img3.jpg" alt="img3" class="img-fluid"/>
        <div className='imgslider2-text'>
        <h4 class="fw-bold">Jhon Doe</h4> 
        <p>Co-Founder</p>
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <div className='icon'>
            <i class="fa-brands fa-facebook-f me-3"></i>
            <i class="fa-brands fa-twitter me-3" ></i>
            <i class="fa-brands fa-linkedin-in me-3"></i>    
        </div>  
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/team/img4.jpg" alt="img4" class="img-fluid"/>
        <div className='imgslider2-text'>
        <h4 class="fw-bold">Jhon Doe</h4> 
        <p>Co-Founder</p>
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <div className='icon'>
            <i class="fa-brands fa-facebook-f me-3"></i>
            <i class="fa-brands fa-twitter me-3" ></i>
            <i class="fa-brands fa-linkedin-in me-3"></i>    
        </div>  
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
</section>
    </>
  )
}

export default Eight