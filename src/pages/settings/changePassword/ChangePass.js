import React, { useState } from 'react'

import backIcon from '../../../assets/Back.svg'

import { HiLockClosed } from 'react-icons/hi'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'

import './change_pass.css'
import { useNavigate } from 'react-router-dom'

function ChangePass() {

    const navigate = useNavigate()

    const [passVisible, setPassVisible] = useState(false)

    const [newPassVisible, setNewPassVisible] = useState(false)

    const passVisibleFunc = () => {
        setPassVisible(!passVisible)
    }
  
    const newPassVisibleFunc = () => {
        setNewPassVisible(!newPassVisible)
    }

  return (
    <div className='container change'>
        <div className='change_top'>
            <img className='change_top_img' onClick={() => navigate('/settings')} src={backIcon}/>
            <h2>Parolni o'zgartirish</h2>
        </div>
        <p>Parol kamida 8 ta belgidan iborat bo'lishi kerak</p>
        <div className='change_input'>
            <HiLockClosed/>
            <input type={passVisible ? "text" : "password"} placeholder='Oldingi parolni kiriting'/>
            {
                passVisible ? <MdVisibility onClick={passVisibleFunc}/> : <MdVisibilityOff onClick={passVisibleFunc}/>
            }
            
        </div>
        <div className='change_input'>
            <HiLockClosed/>
            <input type={newPassVisible ? "text" : "password"}  placeholder='Yangi parol kiriting'/>
            {
                newPassVisible ? <MdVisibility onClick={newPassVisibleFunc}/> : <MdVisibilityOff onClick={newPassVisibleFunc}/>
            }
        </div>
        <div className='change_input'>
            <HiLockClosed/>
            <input type={newPassVisible ? "text" : "password"} placeholder='Parolni takrorlang' />
            {
                newPassVisible ? <MdVisibility onClick={newPassVisibleFunc}/> : <MdVisibilityOff onClick={newPassVisibleFunc}/>
            }
        </div>
        <button className='main_btn'>O'zgarishlarni saqlash</button>
    </div>
  )
}

export default ChangePass
