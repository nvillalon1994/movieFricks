import { useState, useContext } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import UserContext from '../contextt/userContext'
import { motion } from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'


export default function Product({pelicula}) {

    
    const {peliculas} = useSelector(state=>state.peliculas)
    
    // console.log(peliculas)
    const [show2,setShow2]= useState(false)
    const mostrarDescripción=()=>{
        setShow2(!show2)
    }
    
    const quitarDescripción=()=>{
        setShow2(!show2)
    }
    
    const {user,peliSola,setPeliSola,setShowPeliSola,actualizarFiltroPeticionId,variants} = useContext(UserContext)
    
    
    
    const filtrarId2=()=>{

        if(user===null){
        if(peliSola===" "){         
            setShowPeliSola(true)
            const filtroPeticion =[]
            actualizarFiltroPeticionId(filtroPeticion)
            console.log(filtroPeticion)
        }}
        else if(peliSola===pelicula.id){
            setShowPeliSola(false)
            const filtroPeticion= peliculas.filter((pelicula)=>{
                return pelicula.id.toUpperCase().includes(peliSola.toUpperCase())
            })
            actualizarFiltroPeticionId(filtroPeticion)
            window.scroll({
                top: -1000,
                left: 100,
                
              });

        }
    }
    
    const tomarID =() => {
        const id= pelicula.id
        setPeliSola(id)
        
    }
   console.log(pelicula.pelicula.año)

   
    
    return (
        
            <div onMouseOver={tomarID} onClick={filtrarId2} className='flex m-auto  sm:ml-10' >
                
                
                <article onMouseOver={mostrarDescripción} onMouseOut={quitarDescripción} className='flex flex-row sm:w-[200px] xs:w-[150px]  xs:max-h-96  shadow-lg hover:shadow-2xl bg-gradient-to-b from-sky-800 via-cyan-600 to-black-500"  rounded-lg justify-center ' >
                    
                    {user?<Link  to={'/pelicula'}><div className='xs:h-80 sm:h-auto sm:max-h-96'  >
                        <div className='flex m-auto'>
                            <img className='rounded-lg sm:h-[320px] xs:h-[220px] w-screen  mb-0 sm:max-h-72 xs:max-h-48 'id="titulo" alt={pelicula.pelicula.nombre} src={pelicula.pelicula.img} />
                        </div>
                        
                        <section className='p-5 '>

                            <p className='text-sm font-light mb-3 text-white mt-0'>{pelicula.pelicula.nombre}</p>
                            
                            

                        </section>
                        
                    </div>
                    </Link>:
                    <Link to={'/login'} ><div className='' onClick={()=>{
                        alert("Por favor registrate o logueate para ver más datos de la Película")
                    }} >
                        <img className='rounded-lg h-[320px]  mb-0 'id="titulo" src={pelicula.pelicula.img} />
                        <section className='p-5 '>
                            <p className='text-sm font-light mb-3 text-white mt-0'>{pelicula.pelicula.nombre}</p>
                            

                            
                            
                            
                            
                        
                            
                        </section>
                        
                    </div>
                    </Link>
                    }
                    <motion.div className='xs:hidden sm:flex'
                                    animate={show2?"open":"closed"}
                                    variants={variants}>  
                    {show2? <div  className=''  ><div 
                    style={{backgroundImage:`url(${pelicula.pelicula.img})`,backgroundRepeat:`no-repeat`,backgroundSize:`500px 300px`,backgroundBlendMode:'color'}} 
                    className=  ' overflow-hidden  position  absolute  bg-black bg-opacity-60 border border-opacity-5   rounded-lg text-center  w-96 p-5 h-64'>
                    
                            <div className=' z-10   '>
                                <h1 className='text-white drop-shadow-2xl shadow-gray-900  text-xl text-bold mb-2 pt-0'>{pelicula.pelicula.nombre}</h1>
                                <p className='text-white  '>{pelicula.pelicula.descripción}</p>
                                <p className='text-white  '>Duración: {pelicula.pelicula.duracion} Minutos</p>
                            </div>
                            </div>
                            
                        
                        
                        </div>:<></>}
                        </motion.div>
                </article>
                
            </div>
        
        
        
    )
}
