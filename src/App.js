import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main/Main';
import Registration from './pages/Registration/Registration';
import Welcome from './pages/Welcome/Welcome';
import Book from './pages/Book/Book';

import './App.css';
import Profile from './pages/Profile/Profile';
import Competition from './pages/Competition/Competition';
import Settings from './pages/settings/Settings';
import TimerSuccessful from './pages/TimerSuccessful/TimerSuccessful';
import PageNotFound from './pages/404/pageNotFound';
// import { LogInUser, registrNewUser } from './components/ApiData'



// async function registrNewUser(){

//   const data = {
//     full_name: "Samariddin",
//     phone :"+998993332211",
//     password: "qwer1234",
//     password2: "qwer1234"
//   }

//   let response = await fetch("https://xusandev.pythonanywhere.com/account/v1/sign-up/",{
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify(data)
//   })

//   let result = await response.json();
//   console.log(result);
//   alert(result.message);
//   console.log("is success : " + result.success)

// }

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/logIn' element={<Login/>}/>
        <Route path='/404' element={<PageNotFound/>}/>
        <Route path='/welcome' element={<Main/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/books' element={<Book/>}/>
        <Route path='/competition' element={<Competition/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/successful' element={<TimerSuccessful/>} />
      </Routes>
    </div>
  );
}

export default App;
