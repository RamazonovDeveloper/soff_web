import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Registration/registration.css'

import close from '../assets/close.png'
import regCall from '../assets/regCall.png'
import regPass from '../assets/regPass.png'

import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import AuthRepository from '../repositories/AuthRepository'
import { UserContext } from '../context'

function Login() {

  const userData = useContext(UserContext);

  const navigate = useNavigate()

  const telRef = useRef()
  const passRef = useRef()

  const [invalid, setInvalid] = useState('')

  const [passVisible, setPassVisible] = useState(false)

  const passVisibleFunc = () => {
    setPassVisible(!passVisible)
  }

  const checkUser = async () =>{
    
    setInvalid('')

    if(telRef.current.value == ''){
      setInvalid('tel')
    }else if(passRef.current.value == ''){
      setInvalid('pass')
    }else{

      setInvalid('')

      const user = {
        phone: telRef.current.value,
        password: passRef.current.value
      }

      console.log(user)
      
      const answer = await AuthRepository.loginUser(user)
      
      console.log(answer);

      if(answer.success){
        userData.key(answer.data)

        localStorage.setItem('user', JSON.stringify(answer.data))

        console.log("login js is successfull")
        navigate('/')
      }else{
        setInvalid('invalidUser')
      }
    }
    
    

    
  }

  return (

    <div className='register'>
      <div>
        <div className='register_title'>
          <h3>Tizimga kirish</h3>
          <img onClick={() => navigate('/welcome')} src={close}/>
        </div>
        <form className='register_form'>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regCall}/></label>
            <input ref={telRef} name='username' type="tel" placeholder="Telefon nomeringiz"/>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regPass}/></label>
            <input ref={passRef} name='username' type={passVisible ? "text" : "password"} placeholder="Parol"/>
            {
              passVisible 
              ? <AiOutlineEyeInvisible className='eye' onClick={passVisibleFunc}/>
              : <AiOutlineEye className='eye' onClick={passVisibleFunc}/>
            }
          </div>
          
        </form>
        <div className='registerErrorMessage'>
          {
            invalid == 'tel' ? <span>Telefon raqam kiriting</span> : ''
          }
          {
            invalid == 'pass' ? <span>Parol kiriting</span> : ''
          }
          {
            invalid == 'invalidUser' ? <span>Telefon raqami yoki parol xato kiritildi</span> : ''
          }
        </div>
        <div className='register_btns'>
          <button onClick={() => checkUser()} className='secondary_btn'>Tizimga kirish</button>
          <a href='#'>Yordam kerakmi</a>
        </div>
      </div>
    </div>
  )
}

export default Login
  