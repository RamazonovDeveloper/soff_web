import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import back from '../../assets/black_back.svg'
import arrowRight from '../../assets/Arrow - Right.svg'

function ExamCategoryItem() {

    
    const navigate = useNavigate()

    const location = useLocation()
    const { examData } = location.state
    const { categoryName } = location.state
    console.log('Book Category')
    console.log(examData) 

  return (
    <div className='books container'>
      <div className='books_top'>
        <img onClick={() => navigate('/examCategory')} src={back}/>
        <p>{categoryName}</p>
      </div>
      <div className='books_data'>
        <Link className='books_data_item' to={'/exam/category/item'}>
          <p>Test</p>
          <img src={arrowRight}/>
          <p>To exam questions</p>
        </Link>
        {
          examData.map((item, index) => {
            return<Link
            key={index} 
            className='books_data_item'
            to={'/questions'}>
              <p>{item.title}</p>
              <img src={arrowRight}/>
              <p>to questions</p>
            </Link>
          })
        }
        </div>
    </div>
  )
}

export default ExamCategoryItem
