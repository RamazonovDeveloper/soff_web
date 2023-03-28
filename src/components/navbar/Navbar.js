import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './navbar.css'

import home from '../../assets/home.png'
import exams from '../../assets/exams.png'
import store from '../../assets/store.png'
import profile from '../../assets/userDefAvatar.svg'

function Navbar() {

    function ActiveLink(props){
        return <NavLink 
        style={({isActive}) => {
            return {
                color: isActive ? '#602796' : ''
            };
        }}
        {...props}
        />
    }

  return (
    <div className='container nav'>
        <Outlet></Outlet>
        <div className='nav-bottom'>
          <ul className='nav-bottom-btns'>
            <ActiveLink className="nav-bottom-btns-btn" to={'/'}>
                <img src={home}/>
                <p>Asosiy</p>
            </ActiveLink>
            <ActiveLink className="nav-bottom-btns-btn" to={'/exams'}>
                <img src={exams}/>
                <p>Imtihonlar</p>
            </ActiveLink>
            <ActiveLink className="nav-bottom-btns-btn" to={'/store'}>
                <img src={store}/>
                <p>Do’kon</p>
            </ActiveLink>
            <ActiveLink className="nav-bottom-btns-btn" to={'/settings'}>
                <img src={profile}/>
                <p>Profil</p>
            </ActiveLink>
            {/* <li 
            onClick={() => {setActiveButton('home')}} 
            className={activeButton =='home' ? 'nav-bottom-btns-btn nav-bottom-btns-btn-active' : 'nav-bottom-btns-btn'}>
              <img src={home}/>
              <p>Asosiy</p>
            </li> */}
            {/* <li 
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
            </li> */}
          </ul>
        </div>
    </div>
  )
}

export default Navbar
