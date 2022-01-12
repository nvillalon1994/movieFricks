import { useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../images/logo.jpg'


export default function Product({pelicula}) {
    
    console.log(pelicula)
    const [show,setShow]= useState(false)
    const mostrarDescripción=()=>{
        setShow(true)
    }
    
    const quitarDescripción=()=>{
        setShow(false)
    }
    
    
    
    return (
        
            <article className='flex flex-row shadow-lg bg-sky-600  rounded-lg justify-center' >
                <div onMouseOver={mostrarDescripción} onMouseOut={quitarDescripción} >
                    <img className='rounded-t-lg ' src={pelicula.pelicula.img} />
                    <section className='p-5'>
                        <p className='text-sm font-light mb-3 text-white'>{pelicula.pelicula.nombre}</p>
                        
                    </section>
                </div>
                {show? <div className='z-100' ><div style={{backgroundImage:`url(${pelicula.pelicula.img})`,backgroundRepeat:`no-repeat`,backgroundSize:`500px 300px`}} className=' overflow-hidden position absolute  border border-opacity-5 bg-sky-700  rounded-lg text-center  w-1/3 p-5 h-64'>
                    
                        <h1 className='text-white  text-xl text-bold mb-2 pt-0'>{pelicula.pelicula.nombre}</h1>
                        <p className='text-white  '>{pelicula.pelicula.descripción}</p></div>
                    
                    
                    </div>:<></>}

            </article>
        
    )
}
