import React, { useEffect, useState } from 'react'
import QuestionsRepository from '../../repositories/QuestionsRepository';

import './examQues.css'

import testClose from '../../assets/testClose.svg'
import testSend from '../../assets/testSend.svg'
import { Link, useNavigate } from 'react-router-dom';

function ExamQuestions() {

  const [questions, setQuestions] = useState([])
    
  const navigate = useNavigate()

  const userAnswers = []
  const isCorrect = []

  // const sayHello = () => {

    
  //   console.log("User Answers : ");
  //   console.log(userAnswers)
    
  //   const [...rest] = questions
    
  //   setQuestions(rest)
    
  //   for (let index = 0; index < userAnswers.length; index++) {
      
  //     if (userAnswers[index] == questions[index].correct_answer) {
  //       isCorrect[index] = true
  //     }else{
  //       isCorrect[index] = false
  //     }
  //   }
  //   console.log(isCorrect)
  //   navigate('/questions/results')
  // }
    
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
        <Link
        className='questions_btns_send'
        to={'/questions/results'} 
        state={{userAnswers:userAnswers,questions:questions}}
        >
          <img src={testSend}/>
          <p>Yakunlash</p>
        </Link>
        {/* <div onClick={sayHello} className='questions_btns_send'>
          <img src={testSend}/>
          <p>Yakunlash</p>
        </div> */}
      </div>
      <div className='questions_tests'>
        {
          questions.map((item, index)=>{
            return <div key={index} className={isCorrect[index] == null ? 'questions_tests_item' : 'questions_tests_item questions_tests_item_wrong'}>
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
                  onChange={() => {userAnswers[index] = "A"}}
                  />
                  <label htmlFor="a">A</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input 
                  type="radio" 
                  id={`test${index}`} 
                  name={`question_answers_${index}`} 
                  value="B"
                  onChange={() => {userAnswers[index] = "B"}}
                  />
                  <label htmlFor="b">B</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input 
                  type="radio" 
                  id={`test${index}`} 
                  name={`question_answers_${index}`} 
                  value="C"
                  onChange={() => {userAnswers[index] = "C"}}
                  />
                  <label htmlFor="c">C</label>
                </div>
                <div className='questions_tests_item_answers_answer'>
                  <input 
                  type="radio" 
                  id={`test${index}`} 
                  name={`question_answers_${index}`} 
                  value="D"
                  onChange={() => {userAnswers[index] = "D"}}
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

export default ExamQuestions
