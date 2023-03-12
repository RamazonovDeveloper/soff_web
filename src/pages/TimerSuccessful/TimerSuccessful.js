import React from 'react'

import './successTimer.css'

import successCompet from '../../assets/successCompet.svg'
import { useNavigate } from 'react-router-dom'

function TimerSuccessful() {

    const navigate = useNavigate()

  return (
    <div className='timerSuccess container'>
        <img className='timerSuccess_img' src={successCompet}/>
        <p className='timerSuccess_mes'>Tasqilandi</p>
        <div>
            15.11.2022 / 16:00
        </div>
        <p className='timerSuccess_text'>
            Imtihonga o’z vaqtida krisihingizni taklif beramiz.
        </p>

        <button onClick={() => navigate('/welcome')} className='main_btn'>Asosiy</button>
    </div>
  )
}

export default TimerSuccessful
