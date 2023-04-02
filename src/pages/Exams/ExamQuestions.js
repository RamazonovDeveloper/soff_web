import React, { useEffect, useState } from 'react'
import QuestionsRepository from '../../repositories/QuestionsRepository';

import './examQues.css'

import testClose from '../../assets/testClose.svg'
import testSend from '../../assets/testSend.svg'

function ExamQuestions() {

    const [questions, setQuestions] = useState([])
    
    
  useEffect(() => {
    async function getData(){
      const data = await QuestionsRepository.getQuestions()
      setQuestions(data)
    }

    getData()
  }, []);

  return (
    <div className='container questions'>
      <div className='questions_btns'>
        <img src={testClose}/>
        <div className='questions_btns_send'>
          <img src={testSend}/>
          <p>Yakunlash</p>
        </div>
      </div>
      <div className='questions_tests'>
        {
          questions.map((item, index)=>{
            return <div className='questions_tests_item'>
              <div className='questions_tests_item_text'>
                <p>{index + 1}.</p>
                <img key={index} src={item.image}/>
              </div>
              
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ExamQuestions
