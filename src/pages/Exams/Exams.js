import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ExamsRepository from '../../repositories/ExamsRepository';

import back from '../../assets/black_back.svg'
import arrowRight from '../../assets/Arrow - Right.svg'

function Exams() {

    
  const navigate = useNavigate()

  let [examData, setExamData] = useState([])

  console.log(examData)

  useEffect(() => {
    async function getData(){

      const data = await ExamsRepository.getExamsCategory()
      // console.log(data);
      
      setExamData(data)
    }

    getData()
  }, []);

  return (
    <div className='books container'>
      <div className='books_top'>
        <img onClick={() => navigate('/')} src={back}/>
        <p>Fanlar</p>
      </div>
      <div className='books_data'>

        {
          examData.map((item, index) => {
            return<Link
            to={'/exam/category'} 
            key={index} 
            state={{categoryName:item.title,examData:item.children}}
            // onClick={() => {
            //   console.log("data for exam category")
            //   console.log(item.title)
            //   console.log(item.children)
            // }} 
            className='books_data_item'>
              <p>{item.title}</p>
              <img src={arrowRight}/>
            </Link>
          })
        }
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Exams
