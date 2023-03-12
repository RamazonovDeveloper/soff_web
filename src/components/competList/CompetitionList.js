import React, { useEffect, useState } from 'react'
import { getCompList } from '../ApiData'

import './competList.css'

import compIcon from '../../assets/compItemIcon.svg'
import CompetitionsRepository from '../../repositories/CompetitionsRepository'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CompetitionList() {

  const navigate = useNavigate()

  let [competitionData, setCompetitionData] = useState([])

  useEffect(() => {
    async function getData(){
      const data = await CompetitionsRepository.getCompetitionList()

      console.log("comp axios data is ");
      console.log(data);

      setCompetitionData(data.data)
    }

    getData()

  }, []);

  // const getCompetitionList = async () => {
  //   const endPoint = 'competition/v1/list/'

  //   let response = await axios.get(`https://xusandev.pythonanywhere.com/${endPoint}`)

  //   setCompetitionData(response.data)
  //   console.log(response)
  //   console.log(response.data);
  //   // return response
  //   // competitionData = response.data
  // }

  
  // useEffect(() => {
  //   getCompetitionList()
  // }, []);


  return (
    <div className='main_compet'>
        <div className='main_compet_texts'>
          <h3>Kelayotgan musoboqalar</h3>
          <a href='/competition'>Barchasi</a>
        </div>

        <div>
          {
            competitionData.map((item, index) => {

              const date = new Date(item.date_created)

              const day = date.getDay()

              const year = date.getFullYear()

              const time = date.getHours() + ":" + date.getMinutes()

              let month = ''

              switch (date.getMonth()) {
                case 1:
                  month = "yanvar"
                break;
                case 2:
                  month = "fevral"
                break;
                case 3:
                  month = "mart"
                break;
                case 4:
                  month = "aprel"
                break;
                case 5:
                  month = "may"
                break;
                case 6:
                  month = "iyun"
                break;
                case 7:
                  month = "iyul"
                break;
                case 8:
                  month = "avgust"
                break;
                case 9:
                  month = "sentabr"
                break;
                case 10:
                  month = "oktabr"
                break;
                case 11:
                  month = "noyabr"
                break;
                case 12:
                  month = "dekabr"
                break;
              
                default:
                  break;
              }

              return <div key={index} className='main_compet_item' onClick={() => navigate('/competition')}>
                <img src={compIcon}/>
                <div>
                  <div className='main_compet_item_name'>
                    <p>{item.title}</p>
                    <span>{day+"-"+month+" / "+year}</span>
                  </div>
                  <div className='main_compet_item_price'>
                      <p>{item.price}</p>
                      <p>{time}</p>
                  </div>
                </div>
              </div>
            })
          }
          
        </div>
        
      </div>
  )
}

export default CompetitionList
