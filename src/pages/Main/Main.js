import React, { useContext, useEffect, useState } from 'react'

import avatar from '../../assets/userDefAvatar.svg'
import home from '../../assets/home.png'
import exams from '../../assets/exams.png'
import store from '../../assets/store.png'
import profile from '../../assets/export.png'

import './main.css'
import MainCar from '../../components/mainCarousel/MainCar'
import CompetitionList from '../../components/competList/CompetitionList'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context'


function Main() {

  const user = useContext(UserContext);

  console.log(user)

  const navigate = useNavigate()

  const [activeButton, setActiveButton] = useState('home')

  return (
    <div className='main'>
      <div className='nav-top'>
        <div className='nav-top-texts'>
          <p>Salom!</p>
          <p className='nav-top-texts-name'>{user.user.full_name}</p>
        </div>
        <button onClick={() => navigate('/profile')} className='nav-top-img'>
          <img src={avatar}/>
        </button>
      </div>
      
      <MainCar/>
      
      <CompetitionList/>

      {/* <div className='nav-bottom'>
          <ul className='nav-bottom-btns'>
            <li 
            onClick={() => {setActiveButton('home')}} 
            className={activeButton =='home' ? 'nav-bottom-btns-btn nav-bottom-btns-btn-active' : 'nav-bottom-btns-btn'}>
              <img src={home}/>
              <p>Asosiy</p>
            </li>
            <li 
            onClick={() => {setActiveButton('exam')}} 
            className={activeButton =='exam' ? 'nav-bottom-btns-btn nav-bottom-btns-btn-active' : 'nav-bottom-btns-btn'}>
              <img src={exams}/>
              <p>Imtixon</p>
            </li>
            <li 
            onClick={() => {setActiveButton('store')}} 
            className={activeButton =='store' ? 'nav-bottom-btns-btn nav-bottom-btns-btn-active' : 'nav-bottom-btns-btn'}>
              <img src={store}/>
              <p>Do'kon</p>
            </li>
            <li 
            onClick={() => {setActiveButton('profile');navigate('/settings')}} 
            className={activeButton =='profile' ? 'nav-bottom-btns-btn nav-bottom-btns-btn-active' : 'nav-bottom-btns-btn'}>
              <img src={profile}/>
              <p>Profil</p>
            </li>
          </ul>
        </div> */}
    </div>
  )
}

export default Main
