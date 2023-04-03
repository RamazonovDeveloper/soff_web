import React from 'react'

import './settings.css'

import backIcon from '../../assets/Back.svg'

import arrowRight from '../../assets/arrowRight.svg'

import twitterIcon from '../../assets/twitter.svg'
import facebookIcon from '../../assets/facebook.svg'
import tikTokIcon from '../../assets/tikTok.svg'
import insIcon from '../../assets/instagram.svg'
import { useNavigate } from 'react-router-dom'

function Settings() {

    const navigate = useNavigate()

    const logOutUser = () => {
        localStorage.removeItem('user')
        navigate('/logIn')
    }

  return (
    <div className='settings'>
      <a className='settings_back' href='/welcome'><img src={backIcon}/></a>
      <h2 className='settings_title'>Sozlamalar</h2>
      <div className='settings_items'>
        <p className='settings_items_title'>Umumiy</p>
        <div className='settings_items_item'>
            <p>Parolni o’zgartirish</p>
            <img src={arrowRight}/>    
        </div>
        <div className='settings_items_item'>
            <p>Bildirishnoma</p>
            <img src={arrowRight}/>    
        </div>
        <div className='settings_items_item'>
            <p>Maxfiy sozlamalar</p>
            <img src={arrowRight}/>    
        </div>  
        {/* <div className='settings_items_item'>
            <p>Yordamchi markaz</p>
            <img src={arrowRight}/>    
        </div>  
        <div className='settings_items_item'>
            <p>Biz bilan bog’lanish</p>
            <img src={arrowRight}/>    
        </div>  */}
      </div>
        <p className='settings_items_title'>Follow Us</p> 
        <div className='settings_socials'>
            <div className='settings_socials_item'>
                <img src={twitterIcon}/>
            </div>
            <div className='settings_socials_item'>
                <img src={facebookIcon}/>
            </div>
            <div className='settings_socials_item'>
                <img src={tikTokIcon}/>
            </div>
            <div className='settings_socials_item'>
                <img src={insIcon}/>
            </div>
        </div>
        <div className='settings_bottom'>
            <button onClick={() => logOutUser()} className='settings_logOut'>Log out</button>
            <p className='settings_soff'>Soff Hub / 2023</p>
        </div>
    </div>
  )
}

export default Settings
