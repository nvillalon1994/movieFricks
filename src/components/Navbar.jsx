import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Item from './Item'
import logo from '../images/logo.jpg'
import { Context } from '../pages/Login'
export default function Navbar() {

    const user = useContext(Context)
    console.log(user)
    return (
        <nav className='bg-sky-900 position fixed w-full h-24  '>
            <div className='flex justify-between max-w-7xl mx-auto  '>
                <Link to={"/"}><img className=' w-32 ' src={logo} alt="" /></Link>
                <div className='py-8 mr-10 text-white'>
                    <input type="text"className='bg-transparent   text-white h-8 border border-black rounded-3xl p-2  ' placeholder='Buscar peliculas' />
                </div>
                 
                
                
                <ul >
                    
                    {user?<div className='flex '>
                        <li className='flex space-x-5 my-8 border border-black px-5 py-2 rounded-3xl text-white bg-blue-500 m-1'><Link to ={"/user"}>{user.email}</Link></li>
                        <li className='flex space-x-5 my-8 border border-black px-5 py-2 rounded-3xl text-white bg-blue-500'> <Link to ={"/"}>Log Out</Link></li>
                        
                        </div>  
                        :<Link className='flex space-x-5 my-8 border border-black px-5 py-2 rounded-3xl text-white bg-blue-500' to={"/login"}  >Log In</Link>}
                
                </ul>
                
                
            </div>
        </nav>
    )
}
