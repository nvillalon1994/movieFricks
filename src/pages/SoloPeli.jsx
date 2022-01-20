import React, { useContext} from 'react'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'

import Page from '../components/Page'

import { obtenerPeliculas} from '../features/peliculas/peliculasSlice'
import UserContext from '../contextt/userContext'
import FiltroId from '../components/FiltroId'


export default function SoloPeli({pelicula}) {

    const{filtroPeticionId}=useContext(UserContext)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(obtenerPeliculas())

    },[dispatch])
    
    
    
    return (
        
        <Page >
            <section className='bg-sky-700' >
                <article className='    bg-cyan-500 '>
                    
                        
                    {filtroPeticionId.map(pelicula=><FiltroId pelicula={pelicula}></FiltroId>)}
                        
                    
                </article>  
            </section>
            
        </Page>
    )
}
