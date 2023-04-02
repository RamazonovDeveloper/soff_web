import React from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom';

import back from '../../assets/black_back.svg'
import arrowRight from '../../assets/Arrow - Right.svg'


function ExamsCategory() {

    const navigate = useNavigate()

    const location = useLocation()
    const { examData } = location.state
    const { categoryName } = location.state
    console.log('Exam Category Data ')
    console.log(examData) 
    console.log(categoryName) 

  return (
    <div className='books container'>
      <div className='books_top'>
        <img onClick={() => navigate('/exam')} src={back}/>
        <p>{categoryName}</p>
      </div>
      <div className='books_data'>
        
        {
          examData.map((item, index) => {
            return<Link
            key={index} 
            className='books_data_item'
            to={'/exam/category/item'}
            state={
              {
                categoryName:item.title,
                examData:item.children
              }}
            onClick={() => {
              console.log("data for exam category item")
              console.log(item.title)
              console.log(item.children)
            }} 
            >
              <p>{item.title}</p>
              <img src={arrowRight}/>
            </Link>
          })
        }
        </div>
    </div>
  )
}

export default ExamsCategory
