import React, { useEffect, useState } from 'react'
import QuestionsRepository from '../../repositories/QuestionsRepository';

import '../Exams/examQues.css'

import testClose from '../../assets/testClose.svg'
import testSend from '../../assets/testSend.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function LastResults() {

  const navigate = useNavigate()

//   const history = Useh


    const location = useLocation()
    const { userAnswers } = location.state
    const { questions } = location.state
    const { isCorrect } = location.state


  return (
    <div className='container questions'>
      <div className='questions_btns'>
        <img src={testClose} onClick={() => navigate(-1)}/>
        
      </div>
      <div className='questions_tests'>
        {
          questions.map((item, index)=>{
            return <div key={index} className={isCorrect[index] == true ? 'questions_tests_item' : 'questions_tests_item questions_tests_item_wrong'}>
              <div className='questions_tests_item_text'>
                <p>{index + 1}.</p>
                <img className='questions_tests_item_text_img' key={index} src={item.image}/>
              </div>
              <div className='questions_tests_item_answers'>
                <div className='questions_tests_item_answers_answer'>
                  <input 
                  type="radio" 
                  id={`test${index}`} 
                  name={`question_answers_${index}`} 
                  value="A"
                  defaultChecked={userAnswers[index] == "A"}
                  disabled={true}
                  />
                  <label htmlFor="a">A</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input 
                  type="radio" 
                  id={`test${index}`} 
                  name={`question_answers_${index}`} 
                  value="B"
                  defaultChecked={userAnswers[index] == "B"}
                  />
                  <label htmlFor="b">B</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input 
                  type="radio" 
                  id={`test${index}`} 
                  name={`question_answers_${index}`} 
                  value="C"
                  defaultChecked={userAnswers[index] == "C"}
                  />
                  <label htmlFor="c">C</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input 
                  type="radio" 
                  id={`test${index}`} 
                  name={`question_answers_${index}`} 
                  value="D"
                  defaultChecked={userAnswers[index] == "D"}
                  />
                  <label htmlFor="d">D</label>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default LastResults

// export default LastResults
