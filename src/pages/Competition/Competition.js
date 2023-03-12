import React, { useState } from 'react'

import './compet.css'

import competUser from "../../assets/compUser.svg"
import BackWhite from "../../assets/BackWhite.svg"
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { useNavigate } from 'react-router-dom'



function Competition() {

  const navigate = useNavigate()

  const [minut, setMinut] = useState(0)
  const [hour, setHour] = useState(0)

  const increment = () => {
    if(minut == 55 && hour < 100){
      setHour(hour + 1)
      setMinut(0)

    }else{
      setMinut(minut + 5)
    }
  }

  const decrement = () => {
    if(minut != 0){
      setMinut(minut - 5)
    }else{
      if(hour != 0){
        setHour(hour - 1)
        setMinut(55)
      }
    }
  }

  return (
    <div className='compet'>
      <div className='compet_title'>
        <a href='/welcome'><img src={BackWhite}/></a>
        <h3>Musoboqa #A1</h3>
      </div>
      <div className='compet_main'>
        <p className='compet_main_title'>15 talik XX mavzuga oid misollar</p>
        <div className='compet_main_registred'>
            <div className='compet_main_registred_top'>
                <p>Ro’yxatdan o’tganlar</p>
                <a href='#'>Barchasi</a>
            </div>
            <div className='compet_main_registred_users'>
                <div className='compet_main_registred_user'>
                    <div className='compet_main_registred_user_img'>
                        <img src={competUser}/>
                    </div>
                    <p>Qo'shilish</p>
                </div>
                <div className='compet_main_registred_user'>
                    <div className='compet_main_registred_user_img'>
                        <img src={competUser}/>
                    </div>
                    <p>Qo'shilish</p>
                </div>
                
            </div>
        </div>
        <div className='compet_main_timer'>
          <p>Imtihonga qolganda</p>
          <div className='compet_main_timer_btns'>
            <div onClick={() => decrement()}  className='compet_main_timer_btns_btn'>
              <img src={minus}/>
            </div>
            <div className='compet_main_timer_btns_btn_text'>
              {
                hour < 10 ? '0' + hour : hour
              }
              :
              {
                minut < 10 ? '0' + minut : minut
              }
            </div>
            <div onClick={() => increment()}  className='compet_main_timer_btns_btn'> 
              <img src={plus}/>
            </div>
          </div>
        </div>
        <button onClick={() => navigate('/successful')} className='main_btn my-btn'>Ogoxlantirish</button>
      </div>
    </div>
  )
}

export default Competition
