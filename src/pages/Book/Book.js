import React, { useEffect, useState } from 'react'

import back from '../../assets/black_back.svg'
import BookRepository from '../../repositories/BookRepository';

import './book.css'

import arrowRight from '../../assets/Arrow - Right.svg'
import { Link, useNavigate } from 'react-router-dom';
import BookCategory from './BookCategory';

function Book() {

  const navigate = useNavigate()

  let [bookData, setBookData] = useState([])
  
  useEffect(() => {
    async function getData(){

      const data = await BookRepository.getBookData()
      console.log(data.data);
      
      setBookData(data.data)
    }

    getData()
  }, []);

  const navigateToBookCategory = (data) => {
    console.log("Clicked book");
    <BookCategory data={data}/>
  }

  return (
    <div className='books container'>
      <div className='books_top'>
        <img onClick={() => navigate('/')} src={back}/>
        <p>Kitoblar</p>
      </div>
      <div className='books_data'>

        {
          bookData.map((item, index) => {
            return<Link key={index} onClick={() => navigateToBookCategory(item)} className='books_data_item'>
              <p>{item.title}</p>
              <img src={arrowRight}/>
            </Link>
          })
        }
        
        {/* <div className='books_data_item'>
          <p>Elektron kitoblar</p>
          <img src={arrowRight}/>
        </div>
        <div className='books_data_item'>
          <p>Elektron kitoblar</p>
          <img src={arrowRight}/>
        </div> */}

      </div>
    </div>
  )
}

export default Book
