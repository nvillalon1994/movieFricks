import React, { useContext, useState} from 'react'
import { } from 'react-redux'
import { Link } from 'react-router-dom'

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/logo.jpg'

import UserContext from '../contextt/userContext'

import { motion } from 'framer-motion'



export default function Navbar() {
  
    
    const {logout,user,filtrarNombre,setInput,setMostrarCategoria,mostrarCategoria,variants,setCategoria,filtrarCategoria,setInput2,filtrarAño} = useContext(UserContext)
    const [menu,setMenu]=useState(false)
    return (
        <nav className='bg-sky-900 position fixed xl:w-full lg:w-full  xs:w-full 2xl:h- xl:h-24 lg:h-24  xs:h-24 '>
            {/* //div que se ve */}
            <div className=''>
            <div className='flex justify-between   2xl:max-w-7xl  xl:ml-28 xl:mr-44 2xl:m-auto xs:hidden lg:flex '>
                <a onMouseOver={()=>setCategoria("")} onClick={filtrarCategoria} href={"/"}><img className=' lg:w-32 xl:ml-12 2xl:ml-6 xs:ml-0 xs:w-28 ' src={logo} alt="" /></a>
                
                <div className=' flex  w-6  m-2   ' >
                                <button className='  font-bold text-lg  text-white hover:text-cyan-400 -ml-5 mt-8' onClick={()=>{setMostrarCategoria(!mostrarCategoria)}}>Categorias ↧</button>
                                <motion.div 
                                    animate={mostrarCategoria?"open":"closed"}
                                    variants={variants}
                                    >

                                
                                {mostrarCategoria?
                                    <div  className='w-[500px]  bg-gradient-to-b from-sky-800 to-sky-400 position absolute mt-20 -left-24 '>
                                    <div  className='grid grid-cols-4  gap-x-10 m-2'>
                                        <button  onMouseOver={()=>setCategoria("")} onClick={filtrarCategoria} className=' text-xl bg-sky-700 rounded-xl  px-48 pl-5 border-sky-400   text-white  bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Todas</button>
                                        <br />
                                        <button  onMouseOver={()=>setCategoria("Acción")} onClick={filtrarCategoria} id="boton"className=' text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Acción</button>
                                        <br />
                                        <button onMouseOver={()=>setCategoria("Animación")} onClick={filtrarCategoria } className='text-xl bg-sky-700 rounded-xl px-48 pl-5 border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Animación</button>
                                        <br />                           
                                        <button  onMouseOver={()=>setCategoria("Comedia")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Comedía</button>
                                        <br /> 
                                        <button  onMouseOver={()=>setCategoria("Documental")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5 border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Documentales</button>
                                        <br /> 
                                        <button onMouseOver={()=>setCategoria("Musical")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Musicales</button>
                                        <br /> 
                                        <button  onMouseOver={()=>setCategoria("Terror")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Terror</button>
                                    </div>
                                    </div>
                                
                                :<></>}
                                </motion.div>
                </div>
                <div className='my-6 ml-5'>
                                <input onChange={(event) => {
                                    setInput(event.target.value)
                                    ;
                                    
                                }} type="text"className=' bg-sky-700 rounded-xl w-24 px-4 border border-sky-400 text-center mt-4 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 ' placeholder='Nombre' />
                                <button className='' onClick={filtrarNombre}>Buscar</button>
                </div>
                <div className='my-6 ml-5'>
                                <input onChange={(event) => {
                                    setInput2(event.target.value)
                                    ;
                                    
                                }} type="number"className=' bg-sky-700 rounded-xl w-12 m-0 border border-sky-400 text-center mt-4  text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 ' placeholder='Año' />
                                <button className='' onClick={filtrarAño}>Buscar</button>
                </div>
                <ul >
                    
                    {user?<div className='flex lg:max-h-24'>
                        <li className='flex space-x-5 my-8 h-10  m-3  px-1 py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg    text-center text-white'><Link to ={"/user"}>{user.email}</Link></li>
                        <li className='flex space-x-5 my-8 h-10 m-3  px-1 py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg   p-2 text-center text-white'> <Link onClick={logout} to ={"/login"}>Log Out</Link></li>
                        {user.email==="natalio_94@hotmail.com"?<li className='flex space-x-5 my-8 m-3  h-10 px-1 py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg   p-2 text-center text-white'> <Link to ={"/homeadmin"}>Menú de edición</Link></li>:<></>}
                        
                        </div>  
                        :<Link className='flex space-x-5 my-8    px-1 py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg  m-auto p-2 text-center text-white' to={"/login"}  >Log In</Link>}
                
                </ul>
                </div>
                <div className='flex justify-between   2xl:max-w-7xl  xl:ml-28 xl:mr-44 2xl:m-auto  lg:flex'>
                    <Link onMouseOver={()=>setCategoria("")} onClick={filtrarCategoria} to={"/"}><img className=' lg:w-32 xl:ml-12 2xl:ml-6 xs:ml-0 xs:w-28 lg:hidden' src={logo} alt="" /></Link>
                    <button onClick={()=>setMenu(!menu)} className='text-white text-4xl lg:hidden mt8 mr-5'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                </div>               
            </div>

             {/* //botton que abre opciones*/}

             
            <motion.div animate={menu? "open":"closed"} variants={variants} >
            
            <div className='  mt-4 bg-sky-700 bg-opacity-90 w-[360px] max-w-[400px] xs:h-[250px] sm:h-[390px]    2xl:max-w-7xl  xl:ml-28 xl:mr-44 2xl:m-auto absolute right-1  '>
                
                
                <div className=' ' >
                                <div className='flex'>
                                    <button className=' font-bold text-lg  text-white hover:text-cyan-400  m-auto ' onClick={()=>{setMostrarCategoria(!mostrarCategoria)}}>Categorias ↧</button>
                                </div>
                                <div className=''>
                                <motion.div 
                                    animate={mostrarCategoria?"open":"closed"}
                                    variants={variants}
                                    >

                                
                                {mostrarCategoria?
                                    <div  className='w-[360px]  bg-gradient-to-b from-sky-800 to-sky-400 position absolute mt-15  '>
                                    <div  className='grid grid-cols-4  gap-x-10 m-2'>
                                        <button  onMouseOver={()=>setCategoria("")} onClick={filtrarCategoria} className=' text-xl bg-sky-700 rounded-xl  px-48 pl-5 border-sky-400   text-white  bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Todas</button>
                                        <br />
                                        <button  onMouseOver={()=>setCategoria("Acción")} onClick={filtrarCategoria} id="boton"className=' text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Acción</button>
                                        <br />
                                        <button onMouseOver={()=>setCategoria("Animación")} onClick={filtrarCategoria } className='text-xl bg-sky-700 rounded-xl px-48 pl-5 border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Animación</button>
                                        <br />                           
                                        <button  onMouseOver={()=>setCategoria("Comedia")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Comedía</button>
                                        <br /> 
                                        <button  onMouseOver={()=>setCategoria("Documental")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5 border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Documentales</button>
                                        <br /> 
                                        <button onMouseOver={()=>setCategoria("Musical")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Musicales</button>
                                        <br /> 
                                        <button  onMouseOver={()=>setCategoria("Terror")} onClick={filtrarCategoria }className='text-xl bg-sky-700 rounded-xl px-48 pl-5  border-sky-400  m-1 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 '>Terror</button>
                                    </div>
                                    </div>
                                
                                :<></>}
                                </motion.div>
                                </div>
                                
                </div>
                <div className=' xs:my-2  md:my-6 ml-5'>
                                <input onChange={(event) => {
                                    setInput(event.target.value)
                                    ;
                                    
                                }} type="text"className=' bg-sky-700 rounded-xl sm:px-4 border border-sky-400 text-center sm:mt-4 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 ' placeholder='Buscar por nombre' />
                                <button className='' onClick={filtrarNombre}>Buscar</button>
                </div>
                <div className='xs:my-2  md:my-6 ml-5'>
                                <input onChange={(event) => {
                                    setInput2(event.target.value)
                                    ;
                                    
                                }} type="text"className=' bg-sky-700 rounded-xl sm:px-4 border border-sky-400 text-center sm:mt-4 text-white bg-inherit hover:bg-blue-300 active:bg-blue-400 focus:border focus:ring-violet-300 focus:bg-blue-300 ' placeholder='Buscar por año' />
                                <button className='' onClick={filtrarAño}>Buscar</button>
                </div>
                <ul >
                    
                    {user?<div className=' lg:max-h-24'>
                        <li className='flex xs:m-2 xs:p-1 md:my-8 md:h-10  md:m-3  md:px-1 md:py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg    text-center text-white'><Link to ={"/user"}>{user.email}</Link></li>
                        <li className='flex xs:m-2 xs:p-1 md:my-8 md:h-10  md:m-3  md:px-1 md:py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg    text-center text-white'> <Link onClick={logout} to ={"/login"}>Log Out</Link></li>
                        {user.email==="natalio_94@hotmail.com"?<li className='flex xs:m-2 xs:p-1 md:my-8 md:h-10  md:m-3  md:px-1 md:py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg    text-center text-white'> <Link to ={"/homeadmin"}>Menú de edición</Link></li>:<></>}
                        
                        </div>  
                        :<Link className='flex space-x-5 my-8    px-1 py-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg  m-auto p-2 text-center text-white' to={"/login"}  >Log In</Link>}
                
                </ul>
   
            </div>
            </motion.div>
            
        </nav>
        
    )
}
