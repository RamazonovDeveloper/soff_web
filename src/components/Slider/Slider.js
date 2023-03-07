import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

// images
import star from "../../assets/Star.png"
import settings from "../../assets/Setting.png"
import books from "../../assets/books.png"
import inter from "../../assets/inter.png"
import message from "../../assets/message.png"
import phone from "../../assets/phone.png"
// import QuestionsRepository from 'src/repositories/QuestionsRepository'

function Slider() {
  // const [qez, setQez] = useState([])

  // function getQuestions() {
  //   let question  = QuestionsRepository.getQuestions()
  //   if(question){
  //     setQez(question.data)
  //   }
  // }


  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay ,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={star}/>
            <h2>Bilimingizni sinab ko’ring</h2>
            <p>
                Matematikadan misol va masalalar tuplami uchun sinov va imtihon testlari mavzulari.
            </p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={settings}/>
            <h2>Natijangizni tahlili qiling</h2>
            <p>
            Sinov va imtihon testlaridan to’plagan ballaringiz, to’g’ri va notog’ri beriglan jovoblaringizni ko’ra olish va tahlili qilish imkoniyati.
            </p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={books}/>
            <h2>??? kitoblari</h2>
            <p>
              ??? kitoblari haqida ma’lumot, mavzulashtirilgan tekin va pullik elektron kitoblari, kitoblari sotiladigan do’konlar ro’yxati.
            </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={inter}/>
          <h2>Qulay interfeys</h2>
          <p>
            Dasturimiz orqali tez, qulay, vaqtingizni tejab va hohlagan joyda test ishlang!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={message}/>
          <h2>Bepul imkoniyatlar</h2>
          <p>
          Dasturda bepul foydalanish uchun chegaralangan imkoniyalat mavjud.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={phone}/>
          <h2>Offline ishlata olish</h2>
          <p>
          Yuklab olingan barcha sinov va imtihon testlarini ishlay olish imkoniyati va o’z kutubxonangizdagi elektron kitoblardan foydalanish
          </p>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider