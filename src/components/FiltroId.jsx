import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contextt/userContext'
import { db } from '../api'
import { doc,collection, updateDoc, arrayUnion } from 'firebase/firestore'
export default function FiltroId({pelicula}) {

    
    
    
    
    
    
    
    const {user} = useContext(UserContext)
    
    const [comentario, setComentario]=useState("")
   
    const [puntuación, setPuntuacion]=useState("")
    
    const comentarios ={comentario:comentario,puntuación:puntuación 
        ,usuario:user.email
    }

    const comentarioNew = async (id) => {
        

        const newComentario = doc(collection(db,"peliculas"),pelicula.id)
        if(comentarios.comantario==="" || comentarios.puntuación==="" 
        ||comentarios.usuario===""
        ){

        }else{
        const payload =comentarios;
        // setCom(payload)
         await updateDoc(newComentario,{
            com:arrayUnion(payload)
        })
        alert("Su comentario sera evaluado y luego publicado. Muchas gracias por su aporte")
    }
        
    

         
    };
    
    const com=pelicula.com
    // console.log(com)
    // console.log(com[0].puntuación)
    const rank=[]
    const [rankin,setRankin]=useState("")
    const ranking=()=>{
        var acum=0
        com.forEach(element => {
            
            const punto =element.puntuación
            rank.push(parseInt(punto))
            
            acum=parseInt( acum)+parseInt(punto)
            
            setRankin(parseFloat(acum/rank.length).toFixed(2))
            
           
        });
    }
    
    
    
    return (
        
        <div className='flex  bg-sky-700 m-auto xl:max-w-7xl 2xl:max-w-7xl lg:max-w-7xl  '>
            
            <div onLoad={ranking} className='   m-10 bg-gradient-to-r from-sky-700 via-cyan-500 to-red-500" '>
                
                    <section className=' pt-28 sm:grid grid-cols-10  h-[700px]  '>
                                <div className='grid grid-cols-2 2xl:col-span-3 xl:col-span-4   sm:col-span-3 xs:col-span-3'>
                                    <img className=' sm:col-span-2 rounded-lg sm:h-96 m-2 xl:ml-32 lg:ml-0 xs:ml-0 2xl:ml-0 border border-white' id="titulo" alt={pelicula.pelicula.nombre} src={pelicula.pelicula.img} />
                                    <div className='sm:hidden'>
                                        <h1 className=' font-extrabold  text-5xl text-white mb-10 ml-6 mt-10'>{pelicula.pelicula.nombre}</h1>
                                        <p className=' mb-5 text-sm text-white ml-6 '>Genero: {pelicula.pelicula.genero}</p>
                                        <p className='text-white text-sm  sm:ml-auto mb-5 ml-6'>Ranking: {rankin}pts/5</p>
                                    </div>
                                    
                                    
                                </div>
                                <section className='sm:p-5 xl:col-span-6 lg:col-span-5 md:col-span-6 sm:col-span-6 xs:col-span-6 xl:w-5/6 2xl:w-[770px] xs:ml-10  '>
                                    <h1 className=' xs:hidden sm:flex font-extrabold  text-5xl text-white mb-10'>{pelicula.pelicula.nombre}</h1>
                                    
                                    <p className=' xs:hidden sm:flex mb-5 text-white'>Genero: {pelicula.pelicula.genero}</p>
                                    
                                    <p className='text-white text-justify  xs:-ml-10 sm:m-auto  mb-5 '>{pelicula.pelicula.descripción}</p>
                                    <p className='text-white xs:-ml-10 sm:ml-auto mb-8'>Año: {pelicula.pelicula.año}</p>
                                    <p className='text-white xs:-ml-10 sm:ml-auto mb-5'>Duración: {pelicula.pelicula.duracion} Minutos</p>
                                    <p className='text-white xs:-ml-10 sm:ml-auto mb-5 xs:hidden sm:flex'>Ranking: {rankin}pts/5</p>
                                    
                                    
                                    
                                </section>
                                
                                
                    </section>
                    
                    <div className='-mt-224 '>
                    <hr />
                                    <h2 className='   2xl:ml-0 font-extrabold text-center text-3xl text-white mb-10  '>Trailer de {pelicula.pelicula.nombre}</h2>
                                    <iframe className='flex sm:m-auto xs:w-[300px] md:w-[600px]' width="800" height="450" src={pelicula.pelicula.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                    <h1 className='xl:ml-36 2xl:ml-0 font-extrabold  text-3xl text-white mb-10  mt-40'>Comentarios</h1>
                    <section className='xl:ml-36 2xl:ml-0 lg:ml-0 '>
                            
                            <section className='bg-sky-400 xl:mr-36 2xl:ml-14 mb-5   border border-sky-400 rounded-lg shadow hover:shadow-xl'>
                                <div>
                                    <textarea type="text" className=' placeholder-slate-300  text-xl bg-sky-500 text-white h-36 p-2 xl:w-full xs:w-full' placeholder='Dejanos tu comentario!!' onChange={(event) => {setComentario(event.target.value)}}/>
                                </div>
                                
                                <div className="clasificacion flex xl:mr-[750px]  lg:mr-[780px]">
                                    
                                    <input id="radio1" type="radio" name="estrellas" value="5" onClick={(e) => {setPuntuacion(e.target.value)}}/>
                                    <label htmlFor="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" onClick={(e) => {setPuntuacion(e.target.value)}}/>
                                    <label htmlFor="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" onClick={(e) => {setPuntuacion(e.target.value)}}/>
                                    <label htmlFor="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" onClick={(e) => {setPuntuacion(e.target.value)}}/>
                                    <label htmlFor="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" onClick={(e) => {setPuntuacion(e.target.value)}}/>
                                    <label htmlFor="radio5">★</label>
                                    <h2>: Puntiacion</h2>
                                    
                                </div>
                                <div>
                                    <Link  to={'/'}><button  onClick={()=>comentarioNew(pelicula.id)} className=' bg-blue-500 flex   m-2  bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg p-2 text-center text-white'>Publicar</button></Link>
                                </div>
                            </section> 
                            {com.length!==0?
                            <div>
                                
                                {pelicula.com.map(comentario=>
                                <div className='bg-sky-400 xl:mr-36 mb-5  border border-sky-400 rounded-lg shadow hover:shadow-xl 2xl:ml-14 p-2 '>
                                    <div className=' '>
                                        <h1 className='text-white text-xl'>{comentario.usuario}</h1>
                                        <p className='text-white text-lg'>"{comentario.comentario}"</p>
                                        <p className='text-white text-md'> Puntacion: {comentario.puntuación}pts/5</p>
                                        
                                         
                                        

                                    </div>
                                </div>)}
                            </div>:<></>} 
                                        
                                    
                    </section>
                        
                        
                    
                            
                    
                                
                            
                                
                            
                        
                        
                    
            </div>
            
        </div>
        
    )
}
