
import React, { useContext, useState,createContext } from 'react'

import { Link } from 'react-router-dom'

import Page from '../components/Page'

import {onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from 'firebase/auth'
import {auth } from '../api/index'

const Context = createContext()
export default function Login() {
    
    
    const [loginEmail, setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")
    
    const [user , setUser]= useState({})
    const[entrar,setEntrar]=useState(true)
    const logout =async ()=>{
        await signOut(auth);
        setEntrar(true)
        
    }  
    
    
    const login =async ()=>{
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            setEntrar(false)
            console.log(user)
        }catch(error) {
        console.log(error.message)
        
    }
    }    
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
    })

    
    return (
        <Context.Provider value={user} >
            <Page>
                
                
                        <div className="bg-sky-600 pb-56 h-screen pt-24 ">

                        
                            {entrar?<div>
                                <div className='bg-sky-300 p-10 flex flex-col gap-5 rounded-lg w-1/2 mx-auto'>
                                    <h3 className='text-3xl font-bold max-w-7xl mx-auto '> Login </h3>
                                    <input
                                    placeholder="Email..."
                                    onChange={(event) => {
                                        setLoginEmail(event.target.value);
                                    }}
                                    />
                                    <input
                                    placeholder="Password..."
                                    onChange={(event) => {
                                        setLoginPassword(event.target.value);
                                    }}
                                    />

                                    <button className='bg-sky-500 rounded-lg w-40 m-auto p-2' onClick={login}> Login</button>
                                </div>
                                <div>
                                    <p className='text-center text-white'>¿No tienes cuenta? <Link to={"/register"}>Registrate!</Link> </p>
                                </div>
                            </div>:<></>}
                            <div className='bg-sky-300 p-10 flex flex-col gap-5 rounded-lg w-1/2 mx-auto'>
                                <h4 className='text-xl font-bold max-w-7xl mx-auto '> User Logged In:{user?<p>{user.email}</p> :<p>No estas registrado</p> } </h4>
                                <br />
                                {user?<button className='bg-sky-500 rounded-lg w-40 m-auto p-2' onClick={logout}> Sign Out </button>:<></>}
                            </div>  
                            
                        </div>
                        
            </Page>
        </Context.Provider>
        
    )
}
export  {Context}

