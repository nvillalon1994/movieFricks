import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Page from '../components/Page'

import { obtenerPeliculas } from '../features/peliculas/peliculasSlice'
import UserContext from '../contextt/userContext'

import Editor from '../components/Editor'

export default function Homeadmin() {
    
    const {peliculas,loading} = useSelector(state=>state.peliculas)
    const {user,setNombre,setDescripción,setID,setDuracion,setAño,setImg,setGenero,setTrailer,handleNew} =useContext(UserContext)
    
    
    
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(obtenerPeliculas())

    },[dispatch])
    
    return (
        
        <Page >
            <div className='bg-gradient-to-b from-sky-500 via-cyan-200 to-black-500"'>
            <section className='bg-sky-700 pb-20 pt-28 max-w-screen-2xl mx-auto' >
                
                {/* filtrado */}
                <h1 className='text-3xl text-center font-bold  py-5 text-white'>Menu de Edición</h1>
                
                <div className=' md:grid grid-cols-9 ml-5 '>
                    
                    
                    
                    <div className='xl:col-span-5 2xl:col-span-6 md:col-span-6  bg-sky-300 p-2 rounded-lg xl:ml-32 mb-2'>
                        <h2 className='text-2xl text-center font-bold  py-5 text-white'>Eliminar Peliculas</h2>
                        <div className='grid md:grid-cols-3 sm:grid-cols-2  2xl:grid-cols-4 xs:grid-cols-2 gap-5  mx-auto'>
                            
                            {
                                loading?<div  className='bg-green-200 p-5 text-xl h-sreen'>
                                    
                                </div>:
                                peliculas.map(pelicula=><Editor  key ={pelicula.id} pelicula={pelicula}/>)
                            }
                        </div>
                    </div>
                    <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 ml-2 xl:mr-10 2xl:mr-36 lg:mr-5 md:mr-2'>

                                {(user.email==="natalio_94@hotmail.com")?<div className='bg-sky-300  flex flex-col gap-5 rounded-lg'>
                                    <h1 className='text-2xl text-center font-bold  text-white pt-5' >Subir una pelicula</h1>
                                    <form className='bg-sky-300 px-10 flex flex-col gap-5 rounded-lg' >
                                
                                    <input className='bg-cyan-100 p-2 m-2 rounded-lg ' type="text" placeholder='Titulo'  onChange={(event) => {setNombre(event.target.value)}} />
                                    <textarea className='bg-cyan-100 p-2 m-2 rounded-lg '  type="text" placeholder='Descripción' style={{height:"212px"}}onChange={(event) => {setDescripción(event.target.value)}} />
                                    <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="number" placeholder='Ingrese id' onChange={(event) => {setID(event.target.value)}}/>
                                    <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="text" placeholder='Ingrese duracion' onChange={(event) => {setDuracion(event.target.value)}}/>
                                    <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="number" placeholder='Ingrese año' onChange={(event) => {setAño(event.target.value)}}/>
                                    <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="text" placeholder='URL de la imagen' onChange={(event) => {setImg(event.target.value)}}/>
                                    <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="text" placeholder='Genero' onChange={(event) => {setGenero(event.target.value)}}/>
                                    <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="text" onClick={()=>{
                                        alert("Dentro del video de Youtube,donde esta el trailer, has click sobre COMPARTIR, en la lista de opciones haz click en insertar, del codigo que se brinda copiar el contenido de src SIN LAS COMILLAS")
                                    }} placeholder='Traiter' onChange={(event) => {setTrailer(event.target.value)}}/>
                                    
  
                            </form>
                            <button className='  w-32 h-14 m-auto mb-2 bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-xl  text-center text-white' onClick={handleNew}>Guardar Pelicula</button>
                            </div>:<></>}
                        
                    </div>
                </div>
                
            </section>
            </div>
            
        </Page>
    )
}
