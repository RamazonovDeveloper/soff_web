import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import './mainCar.css'

import "swiper/css";
import "swiper/css/pagination";

import mainBook from '../../assets/mainBooks.svg'
import mainTest from '../../assets/mainTest.svg'
import mainResult from '../../assets/mainResult.svg'

import { Pagination } from "swiper";

function MainCar() {
  return (
    <div className='mainCarousel'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainBook}/>
          </div>
          <p>Kitoblar</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainTest}/>
          </div>
          <p>Bilimingizni sinab ko’ring</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainResult}/>
          </div>
          <p>Mening natijalarim</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainBook}/>
          </div>
          <p>Kitoblar</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainBook}/>
          </div>
          <p>Kitoblar</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainCar
