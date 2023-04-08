import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './examResults.css'

import testFinishIcon from '../../assets/testFinishIcon.png'

function ExamResults() {

    const navigate = useNavigate()

    const location = useLocation()
    const { userAnswers } = location.state
    const { questions } = location.state
    console.log('Exam Results Data ')
    console.log(userAnswers) 
    console.log(questions) 

    let rightAnswers = 0
    let wrongAnswers = 0

    const isCorrect = []

    for (let index = 0; index < userAnswers.length; index++) {
      
        if (userAnswers[index] == questions[index].correct_answer) {
            isCorrect[index] = true
            rightAnswers = rightAnswers + 1
        }else{
            isCorrect[index] = false
            wrongAnswers = wrongAnswers + 1
        }
    }

  return (
    <div className='exam_results'>
      <div className='exam_results_wrapper'>
        <h3 className='exam_results_title'>Test Yakunlandi</h3>

        <div className='exam_results_texts'>
            <h2>{(rightAnswers/questions.length)*100}%</h2>
            <img className='exam_results_texts_icon' src={testFinishIcon} alt="" />
            <div className='exam_results_texts_item'>
                <p>To'gri javoblar soni:</p>
                <span>{rightAnswers}</span>
            </div>
            <div className='exam_results_texts_item'>
                <p>Noto'gri javoblar soni:</p>
                <span>{wrongAnswers}</span>
            </div>
            <div className='exam_results_texts_item'>
                <p>Umumiy savollar soni:</p>
                <span>{questions.length}</span>
            </div>
        </div>
      </div>
      <div className='exam_results_btns'>
        <Link 
        className='main_btn '
        to={'/questions/results/view'}
        state={
            {
                userAnswers:userAnswers,
                questions:questions,
                isCorrect:isCorrect
            }}
        >Natija Tahlili</Link>

        <button className='secondary_btn' onClick={() => navigate('/')}>Orqaga qaytish</button>
      </div>
    </div>
  )
}


export default ExamResults
