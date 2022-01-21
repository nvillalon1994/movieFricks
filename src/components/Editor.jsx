import { useContext } from 'react'
import UserContext from '../contextt/userContext'


export default function Editor({pelicula}) {
 
  
    


    
   
    
    const {handleDelete} = useContext(UserContext)
    
    return (
    
        <div>
            
            <div className='mr-2'>
            <article className='flex flex-row shadow-lg bg-sky-600  rounded-lg justify-center  ' >
                
                <div className=' md:h-96 sm:h-72' >
                    <img className='rounded-lg lg:h-64 md:h-56 m-2 mb-0 xl:w-40 lg:max-w-52 md:w-36 md:max-w-40 sm:max-w-screen sm:w-28 xs:w-32 ' alt={pelicula.pelicula.nombre} src={pelicula.pelicula.img} />
                    <section className='p-5 '>
                        <p className='text-sm font-light mb-3 text-white mt-0'>{pelicula.pelicula.nombre}</p>
                        
                        
                        <button onClick={()=>{
                            handleDelete(pelicula.id)
        
                        }}>Eliminar</button>
                        
                       
                        
                    </section>
                    
                </div>
                    
                
            </article>
            </div>
        </div>
        
    )
}
