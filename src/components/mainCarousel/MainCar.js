import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import './mainCar.css'

import "swiper/css";
import "swiper/css/pagination";

import mainBook from '../../assets/mainBooks.svg'
import mainTest from '../../assets/mainTest.svg'
import mainResult from '../../assets/mainResult.svg'

import { Pagination } from "swiper";
import { useNavigate } from 'react-router-dom';

function MainCar() {

  const navigate = useNavigate()

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
        <SwiperSlide onClick={() => navigate('/books')}>
          <div className='swiperBlock'>
            <img src={mainBook}/>
          </div>
          <p className='swiperText'>Kitoblar</p>
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate('/exam')}>
          <div className='swiperBlock'>
            <img src={mainTest}/>
          </div>
          <p className='swiperText'>Bilimingizni sinab ko’ring</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainResult}/>
          </div>
          <p className='swiperText'>Mening natijalarim</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainBook}/>
          </div>
          <p className='swiperText'>Kitoblar</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperBlock'>
            <img src={mainBook}/>
          </div>
          <p className='swiperText'>Kitoblar</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainCar
