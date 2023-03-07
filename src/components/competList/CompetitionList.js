import React, { useEffect, useState } from 'react'
import { getCompList } from '../ApiData'

import './competList.css'

import compIcon from '../../assets/compItemIcon.svg'
import CompetitionsRepository from '../../repositories/CompetitionsRepository'
import axios from 'axios'

function CompetitionList() {

  let [competitionData, setCompetitionData] = useState([])


  const getCompetitionList = async () => {
    const endPoint = 'competition/v1/list/'

    let response = await axios.get(`https://xusandev.pythonanywhere.com/${endPoint}`)

    
    setCompetitionData(response.data)
    console.log(response)
    console.log(response.data);
    // return response
    // competitionData = response.data
  }

  
  useEffect(() => {
    getCompetitionList()
  }, []);


  return (
    <div className='main_compet'>
        <div className='main_compet_texts'>
          <h3>Kelayotgan musoboqalar</h3>
          <a href=''>Barchasi</a>
        </div>

        <div>
          {
            competitionData.map((item, index) => {
              return <div key={index} className='main_compet_item'>
                <img src={compIcon}/>
                <div className='main_compet_item_name'>
                    <p>{item.title}</p>
                </div>
                <div className='main_compet_item_price'>
                    <p>{item.price}</p>
                    <p>9:39</p>
                </div>
              </div>
            })
          }
        </div>
        
      </div>
  )
}

export default CompetitionList
