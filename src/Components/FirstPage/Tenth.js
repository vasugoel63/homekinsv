import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Tenth = () => {
  return (
    <>
    <section className='tenth-section'>
    <div className='container'>
    <h2 className='mb-5 fw-bold'>Latest News</h2>
    
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
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
    >
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/news/img1.jpg" alt="img1" class="img-fluid"/>
        <div className='imgslider3-text'>
        <p className='mb-1'>Sept 08 2020</p> 
        <h3 className='mb-4'>Pacific Region Awards</h3>
        <div className='texthidden opacity-75'>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident</p>
        </div>
        {/* <p><span className='readtext'>Read</span> More </p> */}
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <p className='fixed-text'><span className='readtext'>Read</span> More </p>
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/news/img2.jpg" alt="img1" class="img-fluid"/>
        <div className='imgslider3-text'>
        <p className='mb-0'>Sept 08 2020</p> 
        <h3 className='mb-2'>Pacific Region Awards</h3>
        <div className='texthidden opacity-75'>
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident natus praesentium facilis? Ab, repudiandae cum. */}
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident</p>
        </div>
        {/* <p><span className='readtext'>Read</span> More </p> */}
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <p className='fixed-text'><span className='readtext'>Read</span> More </p>
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/news/img3.jpg" alt="img1" class="img-fluid"/>
        <div className='imgslider3-text'>
        <p className='mb-0'>Sept 08 2020</p> 
        <h3 className='mb-2'>Pacific Region Awards</h3>
        <div className='texthidden opacity-75'>
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident natus praesentium facilis? Ab, repudiandae cum. */}
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident</p>
            {/* <p></p> */}
        </div>
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <p className='fixed-text'><span className='readtext'>Read</span> More </p>
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
      <SwiperSlide className='imgslider'>
        <img src="http://homekins.on3-step.com/img/news/img4.jpg" alt="img1" class="img-fluid"/>
        <div className='imgslider3-text'>
        <p className='mb-0'>Sept 08 2020</p> 
        <h3 className='mb-2'>Pacific Region Awards</h3>
        <div className='texthidden opacity-75'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident natus praesentium facilis? Ab, repudiandae cum.
            <p></p>
        </div>
        
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
        </div>
        <p className='fixed-text'><span className='readtext'>Read</span> More </p>
        
        <div className="overlay w-100">
               
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
</section>
    </>
  )
}

export default Tenth