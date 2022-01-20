import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth } from '../api/index'

export default function Register() {

    const [registerEmail, setRegisterEmail]=useState("")
    const [registerPassword, setRegisterPassword]=useState("")
 

    const [user,setUser]=useState({})

    onAuthStateChanged(auth,(currentUser)=>{
        
            setUser(currentUser)
        
    })
    const register = async ()=>{
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
          
        }catch (error) {
            console.log(error.message)
        
    }}
    
    
    

    return (
        <Page >
            <section className='bg-sky-600 pb-56 h-screen pt-32'>
                
                <article className=''>
                        
                        <div className='bg-sky-300 p-10 flex flex-col gap-5 rounded-lg xl:w-1/2 2xl:w-1/3 mx-auto' >
                            <h1 className='text-3xl text-center text-white font-bold max-w-7xl mx-auto '>Registrate!</h1>
                            <input className='bg-sky-100 p-2 rounded-lg 2xl:w-[500px] 2xl:m-auto'  placeholder="Email..." type="email"  onChange={(event)=>{setRegisterEmail(event.target.value)}} />
                            <input className='bg-sky-100 p-2 rounded-lg 2xl:w-[500px] 2xl:m-auto' name="password" placeholder='Password...' type="password" id="password" onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
                            <button  onClick={register} className='bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-200 hover:to-blue-400 rounded-lg w-40 m-auto p-2 text-center text-white'><Link to ={'/'}>Registrate</Link></button>
                        </div>
                </article>
                <article>
                                    <p className='text-center text-white'>¿Ya tienes cuenta? <Link className='text-lg text-cyan-300 text-bold hover:text-sky-300' to={"/login"}> Entra ya!</Link> </p>
                </article>
                    
                    
                
                
                
            </section>
            

        </Page>
    )
}


