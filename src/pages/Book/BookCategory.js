import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../../assets/black_back.svg'
import arrowRight from '../../assets/Arrow - Right.svg'

function BookCategory(data) {

    const navigate = useNavigate()

    // const getCategoryItem = () => {


  return (
    <div className='books container'>
      <div className='books_top'>
        <img onClick={() => navigate('/welcome')} src={back}/>
        <p>Kitoblar</p>
      </div>
      <div className='books_data'>

        {
          data.map((item, index) => {
            
            return<div key={index} className='books_data_item'>
              <p>{item.title}</p>
              <img src={arrowRight}/>
            </div>
          })
        }
        </div>
    </div>
  )

}
export default BookCategory
