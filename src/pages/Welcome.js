import React from 'react'
import Slider from '../components/Slider/Slider'

import './welcome.css'

import user from '../assets/registerUser.png'
import { useNavigate } from 'react-router-dom'

function Welcome() {

  const navigate = useNavigate()

  return (
    <div className='wel'>
      <Slider className="my-slider"/> 
      <div className='wel-btns'>
        <div>
          <h2>XUSH KELIBSIZ</h2>
          <p>Dasturning barcha funksiyalaridan foydalanish uchun iltimos ro’yxatdan o’ting.</p>
          <img src={user}/>
          <button onClick={() => navigate('/registration')} className='secondary_btn'>Registration</button>
          <a href='#'>Qanday ro’yxatdan o’tkaziladi?</a>
          <button onClick={() => navigate('/login')} className='secondary_btn'>Sign in</button>
          <a href='#'>Qanday tizimga kiriladi?</a>
        </div>
      </div>
    </div>
  )
}

export default Welcome
