import { Navigate, Outlet, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
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
import Navbar from './components/navbar/Navbar';
import BookCategory from './pages/Book/BookCategory';
import Exams from './pages/Exams/Exams';
import ExamsCategory from './pages/Exams/ExamsCategory';
import ExamCategoryItem from './pages/Exams/ExamCategoryItem';
import ExamQuestions from './pages/Exams/ExamQuestions';
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

  function RequireAuth({children}){
    const auth = JSON.parse(localStorage.getItem('user'))
    const location = useLocation()

    return auth ? (
      children
    ):(
      <Navigate to={'/login'} replace state={{path:location.pathname}}/>
    )
  }


  const routes = useRoutes([
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/welcome',
      element:<Welcome></Welcome>
    },
    {
      path:'/registration',
      element:<Registration></Registration>
    },
    {
      path:'/',
      element:<Navbar></Navbar>,
      children:[
        {
          index:true,
          element:<RequireAuth><Main/></RequireAuth>
        },
        {
          path:'/exams',
          element:<><h1>This is exams Page</h1></>
        },
        {
          path:'/store',
          element:<><h1>This is store Page</h1></>
        },
        {
          path:'/settings',
          element:<Settings></Settings>
        }
      ]
    },
    {
      path:'/profile',
      element:<Profile></Profile>
    },
    { 
      path:'/books',
      element:<Book></Book>
    },
    {
      path:'/booksCategory',
      element:<BookCategory></BookCategory>
    },
    {
      path:'/exam',
      element:<><Outlet></Outlet></>,
      children:[
        {
          index:true,
          element:<Exams></Exams>
        },
        {
          path:'/exam/category',
          element:<><Outlet></Outlet></>,
          children:[
            {
              index:true,
              element:<ExamsCategory></ExamsCategory>,
            },
            {  
              path:'/exam/category/item',
              element:<><Outlet></Outlet></>,
              children:[
                {
                  index:true,
                  element:<ExamCategoryItem></ExamCategoryItem>
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path:'/questions',
      element:<ExamQuestions></ExamQuestions>
    },
    {
      path:'/test',
      element:<><h1>This is a Test Page</h1></>
    },
    {
      path:'/result',
      element:<><h1>This is a Result Page</h1></>
    },
    {
      path:'/competition',
      element:<Competition></Competition>
    }

  ])

  return routes

  // return (
  //   <div className="App">
  //     <Routes>
  //       <Route path='/' element={<Welcome/>}/>
  //       <Route path='/registration' element={<Registration/>}/>
  //       <Route path='/logIn' element={<Login/>}/>
  //       <Route path='/404' element={<PageNotFound/>}/>
  //       <Route path='/welcome' element={<Main/>}/>
  //       <Route path='/profile' element={<Profile/>}/>
  //       <Route path='/books' element={<Book/>}/>
  //       <Route path='/competition' element={<Competition/>}/>
  //       <Route path='/settings' element={<Settings/>}/>
  //       <Route path='/successful' element={<TimerSuccessful/>} />
  //     </Routes>
  //   </div>
  // );
}

export default App;
