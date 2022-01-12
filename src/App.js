import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes,Route} from 'react-router-dom'


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';


function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
