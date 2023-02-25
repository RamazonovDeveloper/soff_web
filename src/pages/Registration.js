import React from 'react'

import './registration.css'

import close from '../assets/close.png'
import regCall from '../assets/regCall.png'
import regPass from '../assets/regPass.png'
import regEdit from '../assets/regEdit.png'
import { useNavigate } from 'react-router-dom'

function Registration() {

  const navigate = useNavigate()

  return (
    <div className='register'>
      <div>
        <div className='register_title'>
          <h3>Ro’yxatdan o’tish</h3>
          <img onClick={() => navigate('/')} src={close}/>
        </div>
        <form className='register_form'>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regEdit}/></label>
            <input name='username' type="text" placeholder="To’liq ismingiz"/>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regCall}/></label>
            <input name='username' type="tel" placeholder="Telefon nomeringiz"/>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regPass}/></label>
            <input name='username' type="password" placeholder="Parol"/>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regPass}/></label>
            <input name='username' type="password" placeholder="Parolni tasdiqlang"/>
          </div>
        </form>
        <div className='register_btns'>
          <button className='secondary_btn'>Ro’yxatdan o’tish</button>
          <a href='#'>Yordam kerakmi</a>
        </div>
      </div>
    </div>
  )
}

export default Registration
