import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./card.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Card = () => {
  return (
    <div>
        <h2 className='section_title'>Gallery Image</h2>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay= {{
            delay: 2500,
            disableOnInteraction: false,
            }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/videos/foto7.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto6.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto8.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto9.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto10.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto11.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto12.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto13.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto14.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto15.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto16.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto17.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto18.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto19.jpg"  className='imgs'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/videos/foto20.jpg"  className='imgs'/>
        </SwiperSlide>

      </Swiper>


    
        <div>
            <div className='home_data'>
                <p class="home_description">Haloo semuannya aku lagi ulang tahun yang ke 17 tahun, hari ini sangat-sangat spesial banget buat akuhh karena yahh yang kalian bisa tau aku ulang tahun dong wkwk.</p>
                
            </div>
        </div>


    </div>
  )
}

export default Card