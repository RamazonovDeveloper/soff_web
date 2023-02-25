import React from 'react'
import { useNavigate } from 'react-router-dom'

import './registration.css'

import close from '../assets/close.png'
import regCall from '../assets/regCall.png'
import regPass from '../assets/regPass.png'

function Login() {

  const navigate = useNavigate()

  return (

    <div className='register'>
      <div>
        <div className='register_title'>
          <h3>Tizimga kirish</h3>
          <img onClick={() => navigate('/')} src={close}/>
        </div>
        <form className='register_form'>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regCall}/></label>
            <input name='username' type="tel" placeholder="Telefon nomeringiz"/>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regPass}/></label>
            <input name='username' type="password" placeholder="Parol"/>
          </div>
        </form>
        <div className='register_btns'>
          <button className='secondary_btn'>Tizimga kirish</button>
          <a href='#'>Yordam kerakmi</a>
        </div>
      </div>
    </div>
  )
}

export default Login
