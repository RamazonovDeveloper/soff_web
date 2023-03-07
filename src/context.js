import React, { createContext, useState }  from 'react'


export const UserContext = createContext();


function MainContext({children}) {

const [user, setUser] = useState({});

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
