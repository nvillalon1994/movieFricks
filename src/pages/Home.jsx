import React, { useContext } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Page from '../components/Page'
import Product from '../components/Product'
import { obtenerPeliculas, obtenerProductos } from '../features/productos/productosSlice'
import axios from 'axios'
import { get } from '../api'
import { Context } from './Login'

export default function Home() {
    const user = useContext(Context)
    
    
    const dispatch = useDispatch()
    const {peliculas,loading} = useSelector(state=>state.peliculas)
    console.log(peliculas)
    useEffect(()=>{
        dispatch(obtenerPeliculas())

    },[dispatch])
    
    return (
        
        <Page>
            
            <section className='bg-sky-700 pb-20 pt-28' >
                 {user?<div>Hola</div>:<>hola</>}
                <div className='grid grid-cols-10'>
                    <div className='col-span-2'>
                        <div className='position fixed w-64  m-2 border border-transparent border-r-black'>
                        <h1 className='text-3xl text-center font-bold py-5 text-white'>Categorias</h1>
                        <p className='text-xl text-center m-4 text-white'>Acción</p>
                        <p className='text-xl text-center m-4 text-white'>Animación</p>
                        <p className='text-xl text-center m-4 text-white'>Comedía</p>
                        <p className='text-xl text-center m-4 text-white'>Documentales</p>
                        <p className='text-xl text-center m-4 text-white'>Musicales</p>
                        <p className='text-xl text-center m-4 text-white'>Terror</p>
                    </div></div>
                    
                    <div className='col-span-6'>
                        <h2 className='text-3xl text-center font-bold  py-5 text-white'>Peliculas Online</h2>
                        <div className='grid grid-cols-4 gap-5 max-w-7xl mx-auto'>
                            {
                                loading?<div className='bg-green-200 p-5 text-xl h-screen'>
                                    <p> Loading....</p>
                                </div>:
                                peliculas.map(pelicula=><Product pelicula={pelicula}/>)
                            }
                        </div>
                    </div>
                    
                </div>
            </section>
        </Page>
    )
}
