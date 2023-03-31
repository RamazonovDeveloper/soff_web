import React, { useEffect, useState } from 'react'
import QuestionsRepository from '../../repositories/QuestionsRepository';

function ExamQuestions() {

    const [questions, setQuestions] = useState([])
    
    
  useEffect(() => {
    async function getData(){

      const data = await QuestionsRepository.getQuestions()
      // console.log(data);
      
      setQuestions(data)
    }

    getData()
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default ExamQuestions
