

import {BrowserRouter, Routes,Route} from 'react-router-dom'

import React,{createContext} from 'react'
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import { UserProvider } from './contextt/userContext';
import Homeadmin from './pages/Homeadmin';
import SoloPeli from './pages/SoloPeli';




const Context = createContext()
function App() {
  
  
  return (
    <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/homeadmin" element={<Homeadmin/>}/>
            <Route path="/pelicula" element={<SoloPeli/>}/>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
        </BrowserRouter>
    </UserProvider>
    
    
    
  );
}
export  {Context}
export default App;
