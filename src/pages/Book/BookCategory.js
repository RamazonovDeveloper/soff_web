import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import back from '../../assets/black_back.svg'
import arrowRight from '../../assets/Arrow - Right.svg'

function BookCategory() {

    const navigate = useNavigate()

    const location = useLocation()
    const { bookData } = location.state
    const { categoryName } = location.state
    console.log('Book Category')
    console.log(bookData) 

  return (
    <div className='books container'>
      <div className='books_top'>
        <img onClick={() => navigate('/books')} src={back}/>
        <p>{categoryName}</p>
      </div>
      <div className='books_data'>

        {
          bookData.map((item, index) => {
            return<Link
            key={index} 
            className='books_data_item'
            to={item.download}>
              <p>{item.title}</p>
              <img src={arrowRight}/>
            </Link>
          })
        }
        </div>
    </div>
  )

}
export default BookCategory
