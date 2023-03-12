import React, { useContext } from 'react'

import './profile.css'

import backIcon from '../../assets/Back.svg'
import userDefAvatar from '../../assets/userDefAvatar.svg'
import profileCall from '../../assets/profileCall.svg'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context'

function Profile() {

  const user = useContext(UserContext)

  console.log(user.user);

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
            <input name='name' defaultValue={user.user.full_name}/>
          </div>
        </div>
        <div className='profile_form_items'>
          <label htmlFor='name'>Nomeri:</label>
          <div className='profile_form_items_input'>
            <img src={profileCall}/>
            <input name='name' defaultValue={user.user.phone}/>
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
