import React from 'react'

import './profile.css'

import backIcon from '../../assets/Back.svg'
import userDefAvatar from '../../assets/userDefAvatar.svg'
import profileCall from '../../assets/profileCall.svg'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const navigate = useNavigate()

  return (
    <div className='profile container'>
      <div className='profile_top'>
        <img onClick={() => navigate('/welcome')} src={backIcon}/>
        <p>Profil</p>
      </div>
      <div className='profile_img'>
        <img src={userDefAvatar}/>
      </div>
      <div className='profile_form'>
        <div className='profile_form_items'>
          <label htmlFor='name'>Ismi:</label>
          <div className='profile_form_items_input'>
            <img src={userDefAvatar}/>
            <input name='name' placeholder='Daniel Travis'/>
          </div>
        </div>
        <div className='profile_form_items'>
          <label htmlFor='name'>Nomeri:</label>
          <div className='profile_form_items_input'>
            <img src={profileCall}/>
            <input name='name' placeholder='0812 345 6789'/>
          </div>
        </div>
        <div className='profile_form_items'>
          <label htmlFor='name'>Parol:</label>
          <div className='profile_form_items_input'>
            <img src={userDefAvatar}/>
            <input name='name' placeholder='Daniel Travis'/>
          </div>
        </div>
        
      </div>
      <div className='profile_btn'>
        <button className='main_btn '>Saqlash</button>
      </div>
    </div>
  )
}

export default Profile
