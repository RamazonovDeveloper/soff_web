import React, { createContext, useState }  from 'react'
import { json } from 'react-router-dom';


export const UserContext = createContext();


function MainContext({children}) {

  let userDataFromLocalstorage = localStorage.getItem('user')
  userDataFromLocalstorage = JSON.parse(userDataFromLocalstorage)
  const [user, setUser] = useState(userDataFromLocalstorage);

const data = {
  user: user,
  key:setUser
}

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default MainContext;
