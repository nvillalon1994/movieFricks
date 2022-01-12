import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import Page from '../components/Page'

export default function User() {
    const [show, setShow] = useState(true)
    
    return (
        <Page>
            <div className='pt-24'>
                <h1>Usuario</h1>
                <div className=' grid justify-center'>
                    <div className='  rounded-lg text-center mb-10'>
                        <button className='bg-sky-500 rounded-lg w-40 m-auto p-2'>Log Out</button>
                    </div>
                        
                    {show?<div className=' flex justify-items-center' >
                        
                        
                        <form className='bg-sky-300 p-10 flex flex-col gap-5 rounded-lg' >
                         <h1>Subir una pelicula</h1>
                            <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="text" placeholder='Titulo' />
                            <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="text" placeholder='Descripción' />
                            <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="number" placeholder='Ingrese id' />
                            <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="number" placeholder='Ingrese duracion' />
                            <input className='bg-cyan-100 p-2 m-2 rounded-lg' type="number" placeholder='Ingrese año' />
                            label
                            <input className=' p-2 m-2 rounded-lg' type="file" placeholder='Ingrese su imagen' />                            
                            <button className='bg-sky-500 rounded-lg w-40 m-auto'>Guardar Pelicula</button>
                    </form>
                    </div>:<></>}
                    </div>
            </div>
        </Page>
    )
}
