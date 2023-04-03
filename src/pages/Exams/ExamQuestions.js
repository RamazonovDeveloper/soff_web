import React, { useEffect, useState } from 'react'
import QuestionsRepository from '../../repositories/QuestionsRepository';

import './examQues.css'

import testClose from '../../assets/testClose.svg'
import testSend from '../../assets/testSend.svg'
import { useNavigate } from 'react-router-dom';

function ExamQuestions() {

  const [questions, setQuestions] = useState([])
    
  const navigate = useNavigate()

  const sayHello = () => {
    console.log("hello")
  }
    
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
        <img src={testClose} onClick={() => navigate('/exam')}/>
        <div onClick={sayHello} className='questions_btns_send'>
          <img src={testSend}/>
          <p>Yakunlash</p>
        </div>
      </div>
      <div className='questions_tests'>
        {
          questions.map((item, index)=>{
            return <div key={index} className='questions_tests_item'>
              <div className='questions_tests_item_text'>
                <p>{index + 1}.</p>
                <img className='questions_tests_item_text_img' key={index} src={item.image}/>
              </div>
              <div className='questions_tests_item_answers'>
                <div className='questions_tests_item_answers_answer'>
                  <input type="radio" id="a" name="question_answers" value="A"/>
                  <label htmlFor="a">A</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input type="radio" id="b" name="question_answers" value="B"/>
                  <label htmlFor="b">B</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input type="radio" id="c" name="question_answers" value="C"/>
                  <label htmlFor="c">C</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input type="radio" id="d" name="question_answers" value="D"/>
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

export default ExamQuestions
