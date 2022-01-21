import React, { useContext } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Page from '../components/Page'
import Peliculas from '../components/Peliculas'
import { obtenerPeliculas} from '../features/peliculas/peliculasSlice'
import UserContext from '../contextt/userContext'




export default function Home() {
    
    const {peliculas,loading} = useSelector(state=>state.peliculas)
    
    const{filtroPeticion,show}=useContext(UserContext)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(obtenerPeliculas())

    },[dispatch])
    
    
    
    return (
        // 
        <Page  >

                <section className=' bg-gradient-to-b from-sky-700 via-cyan-500 to-black-500" pb-20 pt-28 xl:max-w-screen  mx-auto lg:pl-0 lg:pr-10 xl:pl-32 xl:pr-40 ' >

                    <article>
                        
                        <div className='flex '>
                                <h2 className='  text-3xl m-auto py-5 font-bold  text-white'>Películas Online</h2>
                        </div>
                        
                        <div>
                        
                            {show?<div >
                                
                                <div className='grid 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-5 xl:max-w-7xl lg:max-w-5xl xl:mx-auto   '>
                                    {
                                        loading?<div  className='flex bg-green-200 p-5 text-xl h-sreen  '>
                                            <h1 className=' '>Cargando Información</h1>
                                        </div>:
                                        peliculas.map(pelicula=><Peliculas key ={pelicula.id} pelicula={pelicula}/>)
                                    }
                                </div>
                            </div>:<div className='col-span-6'> <div className='grid 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-5 xl:max-w-7xl lg:max-w-5xl xl:mx-auto'>
                            {filtroPeticion.map(pelicula=><Peliculas pelicula={pelicula}></Peliculas>)}
                            </div></div>}
                        </div>
                    </article>
                </section>    
                <footer className='bg-gradient-to-r from-sky-500 to-blue-700 sm:h-36 sm:grid sm:grid-cols-9 xs:h-auto '>
                    <div className='col-span-3 my-9  '>
                        <p className='text-white text-xl text-center'>Digital</p>
                        
                        <div className='  flex justify-center my-2 '>
                            <p className='text-white text-center mx-4 '>Contacto</p>
                            <p className='text-white text-center' >Servicio</p>
                            
                        </div>
                    </div>
                    <div className='col-span-3 my-9  '>
                        
                        
                        
                            <p className='text-white text-lg mx-5 text-justify'>MovieFricks es una pagina web.No aloja ningún video en nuestro servidos</p>
                            
                        
                    </div>
                    <div className='col-span-3 my-9  '>
                        <p className='text-white text-center text-xl'>REDES SOCIALES</p>
                        
                        <div className=' flex justify-center my-5'>
                            
                            <p className='text-green-500 mx-4 text-4xl text-center '><FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon></p>
                            <p className='text-pink-500 mx-4 text-4xl text-center'><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></p>
                            <p className='text-blue-500 mx-4 text-4xl text-center'><FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon></p>
                        </div>
                    </div>
                    
                   
                   
                    

                </footer>  
        </Page>

    )
}
