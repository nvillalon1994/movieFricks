import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signOut} from 'firebase/auth'
import {auth } from '../api/index'

export default function Register() {

    const [registerEmail, setRegisterEmail]=useState("")
    const [registerPassword, setRegisterPassword]=useState("")
    const [registrado, setRegistrado]= useState(true)

    const [user,setUser]=useState({})

    onAuthStateChanged(auth,(currentUser)=>{
        
            setUser(currentUser)
        
    })
    const register = async ()=>{
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
            setRegistrado(false)
        }catch (error) {
            console.log(error.message)
        
    }}
    
    
    

    return (
        <div >
            <section className='bg-sky-600 pb-56 h-screen pt-24'>
                <h1 className='text-3xl text-center text-white font-bold max-w-7xl mx-auto py-10'>Registrate!</h1>
                <div className='w-1/2 mx-auto'>
                        <div className='bg-sky-300 p-10 flex flex-col gap-5 rounded-lg' >
                            
                            <input className='bg-sky-100 p-2 rounded-lg'  placeholder="Email..." type="email"  onChange={(event)=>{setRegisterEmail(event.target.value)}} />
                            <input className='bg-sky-100 p-2 rounded-lg' name="password" placeholder='Password...' type="password" id="password" onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
                            <button  onClick={register} className='bg-sky-500 rounded-lg w-40 m-auto'><Link to ={'/'}>Registrate</Link></button>
                        </div>
                    </div>
                    
                    
                    
                
                
                
            </section>
            

        </div>
    )
}


