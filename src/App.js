import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/logIn' element={<Login/>}/>

      </Routes>
      {/* <Welcome/> */}
    </div>
  );
}

export default App;
