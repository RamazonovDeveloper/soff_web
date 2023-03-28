import React, { useRef, useState } from 'react'

import './registration.css'

import close from '../../assets/close.png'
import regCall from '../../assets/regCall.png'
import regPass from '../../assets/regPass.png'
import regEdit from '../../assets/regEdit.png'
import { useNavigate } from 'react-router-dom'
import { registrNewUser } from '../../components/ApiData'

function Registration() {

  const navigate = useNavigate()

  const [ invalidValue, setInvalidValue ] = useState('')

  const nameRef = useRef()
  const telRef = useRef()
  const passRef = useRef()

  const checkUser = async (e) => {
    e.preventDefault();

    if(nameRef.current.value == ''){
      setInvalidValue('name')
      console.log("Invalid name ");
      console.log(invalidValue);
    }else if(telRef.current.value == ''){
      setInvalidValue('tel')
      console.log("Invalid tel number");
      console.log(invalidValue);
    }else if(passRef.current.value == ''){
      setInvalidValue('pass')
      console.log("Invalid pass number");
      console.log(invalidValue);
    }else{

      // if(invalidValue == '')

      setInvalidValue('')
      
      const newUser = {
        full_name: nameRef.current.value,
        phone :telRef.current.value,
        password: passRef.current.value,
        password2: passRef.current.value
      }
      
      const result = await registrNewUser(newUser)
      
      if (result.success == true ) {
        navigate('/logIn')
      }
      console.log(result)
    }
    
  }
  
  return (
    <div className='register'>
      <div>
        <div className='register_title'>
          <h3>Ro’yxatdan o’tish</h3>
          <img onClick={() => navigate('/welcome')} src={close}/>
        </div>
        <form className='register_form'>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regEdit}/></label>
            <input ref={nameRef} name='username' type="text" placeholder="To’liq ismingiz"/>
            <span></span>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regCall}/></label>
            <input ref={telRef} name='username' type="tel" placeholder="Telefon nomeringiz"/>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regPass}/></label>
            <input name='username' type="password" placeholder="Parol"/>
          </div>
          <div className='register_form_item'>
            <label htmlFor='username'><img src={regPass}/></label>
            <input ref={passRef} name='username' type="password" placeholder="Parolni tasdiqlang"/>
          </div>
        </form>
        
        <div className='registerErrorMessage'>
          {
            invalidValue == 'name'? <span>Ismingizni kiriting</span> : '' 
          }
          {
            invalidValue == 'tel' ? <span>Telefon raqamingizni kiriting</span> : ''
          }
          {
            invalidValue == 'pass' ? <span>Parol kiriting</span> : ''
          }
        </div>

        <div className='register_btns'>
          <button onClick={(e) => checkUser(e)} className='secondary_btn'>Ro’yxatdan o’tish</button>
          <a href='#'>Yordam kerakmi</a>
        </div>
      </div>
    </div>
  )
}

export default Registration
