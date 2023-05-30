import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Seventh = () => {
  return (
    <>
    <section className='seventh-section'>
    <div className='container'>
    <h2 className= 'mb-5 fw-bold '>Our Projects</h2>
    </div>
    <div className='containerimg'>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
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
        },
        1025: {
            slidesPerView: 4,
        }
      }}
    >
      <SwiperSlide >
            <div className='imgcol'>
                <img src='http://homekins.on3-step.com/img/projects/img1.jpg' alt='seventh-1' className='img-fluid'></img>
                <div className='content ps-4'>
                    <p>Interior</p>
                    <h2>Entertainment <br/> Unit</h2>
                    <p className='hiddentext'><span className='bordertext'>View</span> Project </p>
                </div>
                <div className='overlay'></div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='imgcol'>
                <img src='http://homekins.on3-step.com/img/projects/img2.jpg' alt='seventh-1' className='img-fluid'></img>
                <div className='content ps-4'>
                    <p>Interior</p>
                    <h2>Entertainment <br/>Unit</h2>
                    <p className='hiddentext'><span className='bordertext'>View</span>  Project</p>

                </div>
                <div className='overlay'></div>

            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='imgcol'>
                <img src='http://homekins.on3-step.com/img/projects/img3.jpg' alt='seventh-1' className='img-fluid'></img>
                <div className='content ps-4'>
                    <p>Interior</p>
                    <h2>Entertainment <br/>Unit</h2>
                    <p className='hiddentext'><span className='bordertext'>View</span>  Project</p>

                </div>
                <div className='overlay'></div>

            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='imgcol'>
                <img src='http://homekins.on3-step.com/img/projects/img4.jpg' alt='seventh-1' className='img-fluid'></img>
                <div className='content ps-4'>
                    <p>Interior</p>
                    <h2>Entertainment <br/>Unit</h2>
                    <p className='hiddentext'><span className='bordertext'>View</span>  Project</p>

                </div>
                <div className='overlay'></div>

            </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </section>
    </>
  )
}

export default Seventh